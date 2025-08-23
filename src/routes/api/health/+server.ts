import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { config, validateConfig } from '$lib/config';

export const GET: RequestHandler = async () => {
  try {
    const validation = validateConfig();
    
    const healthStatus = {
      status: validation.isValid ? 'healthy' : 'unhealthy',
      timestamp: new Date().toISOString(),
      config: {
        hasApiKey: !!config.openai.apiKey,
        defaultModel: config.openai.defaultModel,
        environment: process.env.NODE_ENV || 'development'
      },
      errors: validation.errors
    };

    return json(healthStatus, {
      status: validation.isValid ? 200 : 503
    });
  } catch (error) {
    console.error('Health check error:', error);
    return json({
      status: 'error',
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
};
