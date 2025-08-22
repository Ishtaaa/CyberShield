import { writable, type Writable } from 'svelte/store';

export interface MentorSession {
  id: string;
  topic: string;
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
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
    
    startSession: (topic: string, skillLevel: 'beginner' | 'intermediate' | 'advanced') => {
      const session: MentorSession = {
        id: crypto.randomUUID(),
        topic,
        skillLevel,
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

    setLoading: (loading: boolean) => {
      update(state => ({ ...state, isLoading: loading }));
    },

    setError: (error: string | null) => {
      update(state => ({ ...state, error }));
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

    addQuestion: (question: MentorQuestion) => {
      update(state => ({
        ...state,
        currentSession: state.currentSession ? {
          ...state.currentSession,
          questions: [...state.currentSession.questions, question],
          lastActive: new Date()
        } : null
      }));
    },

    endSession: () => {
      update(state => ({ ...state, currentSession: null }));
    }
  };
}

export const mentorStore = createMentorStore();

// Mentor utilities
export const mentorUtils = {
  generateLearningPath: (topic: string, skillLevel: string) => {
    const paths: Record<string, Record<string, string[]>> = {
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

    return paths[topic]?.[skillLevel] || [];
  },

  getTopicResources: (topic: string) => {
    const resources: Record<string, string[]> = {
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

    return resources[topic] || [];
  }
};
