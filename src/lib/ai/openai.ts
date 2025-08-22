export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatResponse {
  content: string;
  role: 'assistant';
}

export class OpenAIAPI {
  private apiKey: string;
  private baseURL = 'https://api.openai.com/v1';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    if (!this.apiKey) {
      throw new Error('OpenAI API key is required');
    }
  }

  async chatCompletion(messages: ChatMessage[], model: string = 'gpt-3.5-turbo'): Promise<ChatResponse> {
    try {
      const response = await fetch(`${this.baseURL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model,
          messages,
          max_tokens: 1000,
          temperature: 0.7,
          stream: false,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return {
        content: data.choices[0].message.content,
        role: 'assistant',
      };
    } catch (error) {
      console.error('OpenAI API error:', error);
      throw new Error('Failed to get response from OpenAI');
    }
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

    return this.chatCompletion(messages, 'gpt-4');
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

    return this.chatCompletion(messages, 'gpt-4');
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

    return this.chatCompletion(messages, 'gpt-4');
  }
}

// OpenAIAPI instances will be created as needed with proper API keys
