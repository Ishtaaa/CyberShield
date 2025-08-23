import OpenAI from 'openai';
import { RateLimiter, withRetry } from './config';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatResponse {
  content: string;
  role: 'assistant';
}

export class OpenAIAPI {
  private client: OpenAI;
  private rateLimiter: RateLimiter;
  private maxRetries: number;

  constructor(apiKey: string, maxRetries: number = 3, rateLimitDelay: number = 1000, baseURL?: string) {
    if (!apiKey) {
      throw new Error('Gemini API key is required');
    }

    this.client = new OpenAI({
      apiKey: apiKey,
      baseURL: baseURL || 'https://generativelanguage.googleapis.com/v1beta/openai/',
    });
    
    this.maxRetries = maxRetries;
    this.rateLimiter = new RateLimiter(rateLimitDelay);
  }

  async chatCompletion(messages: ChatMessage[], model: string = 'gemini-2.0-flash'): Promise<ChatResponse> {
    return withRetry(async () => {
      await this.rateLimiter.waitForNextRequest();
      
      const response = await this.client.chat.completions.create({
        model,
        messages: messages as any, // OpenAI SDK types are compatible
        max_tokens: 1000,
        temperature: 0.7,
      });

      if (!response.choices || !response.choices[0] || !response.choices[0].message) {
        throw new Error('Invalid response format from Gemini API');
      }
      
      return {
        content: response.choices[0].message.content || '',
        role: 'assistant',
      };
    }, this.maxRetries);
  }

  async cybersecurityMentor(
    userQuery: string, 
    context: string = '', 
    skillLevel: 'beginner' | 'intermediate' | 'advanced' = 'beginner'
  ): Promise<ChatResponse> {
    const systemPrompt = `You are an expert cybersecurity mentor and instructor. 
    Provide clear, practical guidance for ${skillLevel} level students.
    Focus on hands-on learning, real-world applications, and security best practices.
    Always emphasize ethical hacking and responsible disclosure.
    Context: ${context}`;

    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userQuery }
    ];

    return this.chatCompletion(messages, 'gemini-2.0-flash');
  }

  async labGuidance(
    labName: string,
    userProgress: string,
    specificQuestion?: string
  ): Promise<ChatResponse> {
    const systemPrompt = `You are a cybersecurity lab instructor guiding students through practical exercises.
    Lab: ${labName}
    Student Progress: ${userProgress}
    
    Provide step-by-step guidance, explain security concepts, and help troubleshoot issues.
    Encourage critical thinking and security mindset.`;

    const userQuery = specificQuestion || 
      `I'm working on the ${labName} lab. Can you help me understand what I should focus on next?`;

    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userQuery }
    ];

    return this.chatCompletion(messages, 'gemini-2.0-flash');
  }

  async codeReview(code: string, language: string = 'python'): Promise<ChatResponse> {
    const systemPrompt = `You are a cybersecurity expert performing a security code review.
    Analyze the provided ${language} code for:
    - Security vulnerabilities
    - Best practices
    - Potential improvements
    - Security implications
    
    Provide specific, actionable recommendations.`;

    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `Please review this ${language} code for security issues:\n\n${code}` }
    ];

    return this.chatCompletion(messages, 'gemini-2.0-flash');
  }
}
