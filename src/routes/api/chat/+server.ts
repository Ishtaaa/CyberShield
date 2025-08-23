import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { OpenAIAPI } from '$lib/ai/openai';
import { config, validateConfig } from '$lib/config';

export const POST: RequestHandler = async ({ request }) => {
  try {
    // Validate configuration
    const validation = validateConfig();
    if (!validation.isValid) {
      return json(
        { error: 'Configuration error: ' + validation.errors.join(', ') },
        { status: 500 }
      );
    }

    const { messages } = await request.json();
    
    if (!messages || !Array.isArray(messages)) {
      return json(
        { error: 'Invalid request: messages array is required' },
        { status: 400 }
      );
    }
    
    const openaiAPI = new OpenAIAPI(
      config.openai.apiKey, 
      3, 
      1000, 
      config.openai.baseURL
    );
    const response = await openaiAPI.chatCompletion(messages, config.openai.defaultModel);
    
    return json(response);
  } catch (error) {
    console.error('Chat API error:', error);
    
    // Handle specific Gemini errors
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return json(
          { error: 'Invalid API key configuration' },
          { status: 401 }
        );
      }
      if (error.message.includes('rate limit')) {
        return json(
          { error: 'Rate limit exceeded. Please try again later.' },
          { status: 429 }
        );
      }
    }
    
    return json(
      { error: 'Failed to get response from AI service' },
      { status: 500 }
    );
  }
};
