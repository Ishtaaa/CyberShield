// AI Configuration and Settings
export interface AIModelConfig {
  name: string;
  maxTokens: number;
  temperature: number;
  description: string;
}

export interface AIServiceConfig {
  openai: {
    apiKey: string;
    baseURL?: string;
    models: {
      [key: string]: AIModelConfig;
    };
    defaultModel: string;
  };
  app: {
    maxRetries: number;
    timeoutMs: number;
    rateLimitDelay: number;
  };
}

// Available AI Models
export const AI_MODELS: { [key: string]: AIModelConfig } = {
  'gemini-2.0-flash': {
    name: 'Gemini 2.0 Flash',
    maxTokens: 1000,
    temperature: 0.7,
    description: 'Fast and efficient Gemini model for general cybersecurity guidance'
  },
  'gemini-2.0-pro': {
    name: 'Gemini 2.0 Pro',
    maxTokens: 2000,
    temperature: 0.7,
    description: 'Advanced Gemini model for complex security analysis'
  },
  'gemini-1.5-flash': {
    name: 'Gemini 1.5 Flash',
    maxTokens: 1000,
    temperature: 0.7,
    description: 'Fast Gemini model with good reasoning capabilities'
  }
};

// Default configuration
export const DEFAULT_AI_CONFIG: AIServiceConfig = {
  openai: {
    apiKey: '',
    baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai/',
    models: AI_MODELS,
    defaultModel: 'gemini-2.0-flash'
  },
  app: {
    maxRetries: 3,
    timeoutMs: 30000,
    rateLimitDelay: 1000
  }
};

// AI Service utilities
export class AIServiceManager {
  private config: AIServiceConfig;
  
  constructor(config: AIServiceConfig) {
    this.config = config;
  }
  
  getModelConfig(modelName: string): AIModelConfig | null {
    return this.config.openai.models[modelName] || null;
  }
  
  getDefaultModel(): string {
    return this.config.openai.defaultModel;
  }
  
  getApiKey(): string {
    return this.config.openai.apiKey;
  }
  
  getBaseURL(): string {
    return this.config.openai.baseURL || 'https://generativelanguage.googleapis.com/v1beta/openai/';
  }
  
  getAppConfig() {
    return this.config.app;
  }
  
  validateConfig(): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (!this.config.openai.apiKey) {
      errors.push('Gemini API key is required');
    }
    
    if (!this.config.openai.defaultModel) {
      errors.push('Default model is required');
    }
    
    if (!this.config.openai.models[this.config.openai.defaultModel]) {
      errors.push('Default model configuration not found');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

// Rate limiting utility
export class RateLimiter {
  private lastRequestTime: number = 0;
  private delay: number;
  
  constructor(delayMs: number = 1000) {
    this.delay = delayMs;
  }
  
  async waitForNextRequest(): Promise<void> {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;
    
    if (timeSinceLastRequest < this.delay) {
      const waitTime = this.delay - timeSinceLastRequest;
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
    
    this.lastRequestTime = Date.now();
  }
}

// Retry utility
export async function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> {
  let lastError: Error;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      if (attempt === maxRetries) {
        throw lastError;
      }
      
      // Exponential backoff
      const waitTime = delay * Math.pow(2, attempt - 1);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }
  
  throw lastError!;
}
