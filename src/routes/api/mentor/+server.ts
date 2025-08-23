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

    const { 
      type, 
      userQuery, 
      context = '', 
      skillLevel = 'beginner',
      labName,
      userProgress,
      specificQuestion,
      code,
      language = 'python'
    } = await request.json();
    
    if (!type || !userQuery) {
      return json(
        { error: 'Invalid request: type and userQuery are required' },
        { status: 400 }
      );
    }
    
    const openaiAPI = new OpenAIAPI(
      config.openai.apiKey, 
      3, 
      1000, 
      config.openai.baseURL
    );
    let response;
    
    switch (type) {
      case 'mentor':
        response = await openaiAPI.cybersecurityMentor(userQuery, context, skillLevel);
        break;
      case 'lab_guidance':
        if (!labName || !userProgress) {
          return json(
            { error: 'Invalid request: labName and userProgress are required for lab guidance' },
            { status: 400 }
          );
        }
        response = await openaiAPI.labGuidance(labName, userProgress, specificQuestion);
        break;
      case 'code_review':
        if (!code) {
          return json(
            { error: 'Invalid request: code is required for code review' },
            { status: 400 }
          );
        }
        response = await openaiAPI.codeReview(code, language);
        break;
      default:
        return json(
          { error: 'Invalid request type. Supported types: mentor, lab_guidance, code_review' },
          { status: 400 }
        );
    }
    
    return json(response);
  } catch (error) {
    console.error('Mentor API error:', error);
    
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
