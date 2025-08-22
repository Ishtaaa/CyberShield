import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { OpenAIAPI } from '$lib/ai/openai';
import { config } from '$lib/config';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { messages } = await request.json();
    
    const openaiAPI = new OpenAIAPI(config.openai.apiKey);
    const response = await openaiAPI.chatCompletion(messages);
    
    return json(response);
  } catch (error) {
    console.error('Chat API error:', error);
    return json(
      { error: 'Failed to get response' },
      { status: 500 }
    );
  }
};
