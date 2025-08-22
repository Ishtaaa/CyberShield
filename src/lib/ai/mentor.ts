import { writable, type Writable } from 'svelte/store';
import type { ChatResponse } from './openai';

export interface MentorSession {
  id: string;
  topic: string;
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
  currentLab?: string;
  progress: string;
  questions: MentorQuestion[];
  recommendations: string[];
  createdAt: Date;
  lastActive: Date;
}

export interface MentorQuestion {
  id: string;
  question: string;
  answer?: string;
  timestamp: Date;
  status: 'asked' | 'answered' | 'follow-up';
}

export interface MentorState {
  currentSession: MentorSession | null;
  isLoading: boolean;
  error: string | null;
  availableTopics: string[];
  skillLevels: string[];
}

function createMentorStore() {
  const { subscribe, set, update }: Writable<MentorState> = writable({
    currentSession: null,
    isLoading: false,
    error: null,
    availableTopics: [
      'Network Security',
      'Web Application Security',
      'Cryptography',
      'Malware Analysis',
      'Incident Response',
      'Digital Forensics',
      'Penetration Testing',
      'Security Architecture',
      'Cloud Security',
      'IoT Security'
    ],
    skillLevels: ['beginner', 'intermediate', 'advanced']
  });

  return {
    subscribe,
    
    startSession: (topic: string, skillLevel: 'beginner' | 'intermediate' | 'advanced', currentLab?: string) => {
      const session: MentorSession = {
        id: crypto.randomUUID(),
        topic,
        skillLevel,
        currentLab,
        progress: 'Just starting',
        questions: [],
        recommendations: [],
        createdAt: new Date(),
        lastActive: new Date()
      };

      update(state => ({
        ...state,
        currentSession: session
      }));

      return session;
    },

    askQuestion: async (question: string) => {
      let currentSession: MentorSession | null;
      
      // Get current session state
      subscribe(s => currentSession = s.currentSession)();
      
      if (!currentSession) {
        throw new Error('No active mentor session');
      }

      update(state => ({ ...state, isLoading: true, error: null }));

      try {
        const mentorQuestion: MentorQuestion = {
          id: crypto.randomUUID(),
          question,
          timestamp: new Date(),
          status: 'asked'
        };

        // Add question to session
        update(state => ({
          ...state,
          currentSession: state.currentSession ? {
            ...state.currentSession,
            questions: [...state.currentSession.questions, mentorQuestion],
            lastActive: new Date()
          } : null
        }));

        // Get AI response from server
        const response = await fetch('/api/mentor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            question,
            topic: currentSession.topic,
            skillLevel: currentSession.skillLevel,
            currentLab: currentSession.currentLab,
            progress: currentSession.progress
          })
        });

        if (!response.ok) {
          throw new Error('Failed to get mentor response');
        }

        const aiResponse = await response.json();

        // Update question with answer
        update(state => ({
          ...state,
          currentSession: state.currentSession ? {
            ...state.currentSession,
            questions: state.currentSession.questions.map(q => 
              q.id === mentorQuestion.id 
                ? { ...q, answer: aiResponse.content, status: 'answered' as const }
                : q
            ),
            lastActive: new Date()
          } : null,
          isLoading: false
        }));

        return aiResponse;
      } catch (error) {
        update(state => ({
          ...state,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Failed to get mentor response'
        }));
        throw error;
      }
    },

    getLabGuidance: async (labName: string, specificQuestion?: string) => {
      update(state => ({ ...state, isLoading: true, error: null }));

      try {
        let currentSession: MentorSession | null;
        subscribe(s => currentSession = s.currentSession)();
        
        if (!currentSession) {
          throw new Error('No active mentor session');
        }

        const response = await fetch('/api/mentor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            question: specificQuestion || `Help me with ${labName}`,
            topic: currentSession.topic,
            skillLevel: currentSession.skillLevel,
            currentLab: labName,
            progress: currentSession.progress
          })
        });

        if (!response.ok) {
          throw new Error('Failed to get lab guidance');
        }

        const aiResponse = await response.json();

        update(state => ({
          ...state,
          currentSession: state.currentSession ? {
            ...state.currentSession,
            currentLab: labName,
            lastActive: new Date()
          } : null,
          isLoading: false
        }));

        return response;
      } catch (error) {
        update(state => ({
          ...state,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Failed to get lab guidance'
        }));
        throw error;
      }
    },

    updateProgress: (progress: string) => {
      update(state => ({
        ...state,
        currentSession: state.currentSession ? {
          ...state.currentSession,
          progress,
          lastActive: new Date()
        } : null
      }));
    },

    addRecommendation: (recommendation: string) => {
      update(state => ({
        ...state,
        currentSession: state.currentSession ? {
          ...state.currentSession,
          recommendations: [...state.currentSession.recommendations, recommendation]
        } : null
      }));
    },

    endSession: () => {
      update(state => ({ ...state, currentSession: null }));
    },

    get: () => {
      let state: MentorState;
      subscribe(s => state = s)();
      return state!;
    }
  };
}

export const mentorStore = createMentorStore();

// Mentor utilities
export const mentorUtils = {
  generateLearningPath: (topic: string, skillLevel: string) => {
    const paths = {
      'Network Security': {
        beginner: ['Network fundamentals', 'Basic protocols', 'Firewall basics'],
        intermediate: ['Network scanning', 'Protocol analysis', 'Advanced firewalls'],
        advanced: ['Network forensics', 'Advanced attacks', 'Defense strategies']
      },
      'Web Application Security': {
        beginner: ['OWASP Top 10 basics', 'Common vulnerabilities', 'Basic testing'],
        intermediate: ['Advanced OWASP', 'Custom payloads', 'Automated testing'],
        advanced: ['Zero-day research', 'Advanced exploitation', 'Secure development']
      }
    };

    return paths[topic as keyof typeof paths]?.[skillLevel as keyof typeof paths[keyof typeof paths]] || [];
  },

  getTopicResources: (topic: string) => {
    const resources = {
      'Network Security': [
        'Wireshark tutorials',
        'Nmap documentation',
        'Network security books'
      ],
      'Web Application Security': [
        'OWASP documentation',
        'Burp Suite tutorials',
        'Web security courses'
      ]
    };

    return resources[topic as keyof typeof resources] || [];
  }
};
