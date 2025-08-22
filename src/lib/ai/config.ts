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
  'gpt-3.5-turbo': {
    name: 'GPT-3.5 Turbo',
    maxTokens: 1000,
    temperature: 0.7,
    description: 'Fast and efficient for general cybersecurity guidance'
  },
  'gpt-4': {
    name: 'GPT-4',
    maxTokens: 2000,
    temperature: 0.7,
    description: 'Advanced reasoning for complex security analysis'
  },
  'gpt-4-turbo': {
    name: 'GPT-4 Turbo',
    maxTokens: 4000,
    temperature: 0.7,
    description: 'Latest model with extended context for detailed analysis'
  }
};

// Default configuration
export const DEFAULT_AI_CONFIG: AIServiceConfig = {
  openai: {
    apiKey: '',
    models: AI_MODELS,
    defaultModel: 'gpt-3.5-turbo'
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
  
  getAppConfig() {
    return this.config.app;
  }
  
  validateConfig(): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (!this.config.openai.apiKey) {
      errors.push('OpenAI API key is required');
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
