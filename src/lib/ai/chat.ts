import { writable, type Writable } from 'svelte/store';
import type { ChatMessage, ChatResponse } from './openai';

export interface ChatState {
  messages: ChatMessage[];
  isOpen: boolean;
  isLoading: boolean;
  error: string | null;
}

function createChatStore() {
  const { subscribe, set, update }: Writable<ChatState> = writable({
    messages: [
      {
        role: 'system',
        content: 'Hello! I\'m your AI cybersecurity assistant. I can help you with learning materials, lab guidance, code review, and general cybersecurity questions. How can I assist you today?'
      }
    ],
    isOpen: false,
    isLoading: false,
    error: null
  });

  return {
    subscribe,
    toggleChat: () => update(state => ({ ...state, isOpen: !state.isOpen })),
    openChat: () => update(state => ({ ...state, isOpen: true })),
    closeChat: () => update(state => ({ ...state, isOpen: false })),
    
    addMessage: (message: ChatMessage) => update(state => ({
      ...state,
      messages: [...state.messages, message]
    })),

    sendMessage: async (content: string) => {
      const userMessage: ChatMessage = { role: 'user', content };
      
      update(state => ({
        ...state,
        messages: [...state.messages, userMessage],
        isLoading: true,
        error: null
      }));

      try {
        // Call OpenAI API directly
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [userMessage]
          })
        });

        if (!response.ok) {
          throw new Error('Failed to get AI response');
        }

        const aiResponse = await response.json();
        const answer = aiResponse.content;

        const assistantMessage: ChatMessage = { role: 'assistant', content: answer };
        
        update(state => ({
          ...state,
          messages: [...state.messages, assistantMessage],
          isLoading: false
        }));
      } catch (error) {
        update(state => ({
          ...state,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Failed to get response'
        }));
      }
    },

    clearChat: () => update(state => ({
      ...state,
      messages: [
        {
          role: 'system',
          content: 'Hello! I\'m your AI cybersecurity assistant. I can help you with learning materials, lab guidance, code review, and general cybersecurity questions. How can I assist you today?'
        }
      ],
      error: null
    })),
    
    clearError: () => update(state => ({
      ...state,
      error: null
    })),

    get: () => {
      let state: ChatState;
      subscribe(s => state = s)();
      return state!;
    }
  };
}

export const chatStore = createChatStore();

// Chat context for cybersecurity topics
export const cybersecurityContext = {
  topics: [
    'Network Security',
    'Web Application Security',
    'Cryptography',
    'Malware Analysis',
    'Penetration Testing',
    'Security Architecture'
  ],
  
  skillLevels: ['beginner', 'intermediate', 'advanced'],
  
  getContextualPrompt: (topic: string, skillLevel: string) => 
    `You are a cybersecurity expert specializing in ${topic}. 
     Provide guidance appropriate for ${skillLevel} level students. 
     Include practical examples and real-world applications.`
};
