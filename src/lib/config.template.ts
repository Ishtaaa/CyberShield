// Configuration template file
// Copy this file to config.ts and add your API keys

export const config = {
  // OpenAI API Configuration
  openai: {
    apiKey: 'your_openai_api_key_here',
    model: 'gpt-3.5-turbo',
    maxTokens: 1000,
    temperature: 0.7
  },
  
  // App Configuration
  app: {
    name: 'CyberShield',
    version: '1.0.0',
    environment: 'development'
  }
};
