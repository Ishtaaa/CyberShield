import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { OpenAIAPI } from '$lib/ai/openai';
import type { ChatMessage } from '$lib/ai/openai';
import { config } from '$lib/config';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { messages, model = 'gpt-3.5-turbo' } = await request.json();
    
    if (!messages || !Array.isArray(messages)) {
      return json({ error: 'Invalid messages format' }, { status: 400 });
    }
    
    // Validate message format
    for (const message of messages) {
      if (!message.role || !message.content) {
        return json({ error: 'Invalid message format' }, { status: 400 });
      }
    }
    
    // Create OpenAI API instance with the key
    const openaiAPI = new OpenAIAPI(config.openai.apiKey);
    
    // Get response from OpenAI
    const response = await openaiAPI.chatCompletion(messages, model);
    
    return json(response);
  } catch (error) {
    console.error('Chat API error:', error);
    
    if (error instanceof Error) {
      return json({ error: error.message }, { status: 500 });
    }
    
    return json({ error: 'Internal server error' }, { status: 500 });
  }
};
