import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { OpenAIAPI } from '$lib/ai/openai';
import { config } from '$lib/config';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { question, topic, skillLevel, currentLab, progress } = await request.json();
    
    if (!question || !topic || !skillLevel) {
      return json({ error: 'Missing required fields: question, topic, skillLevel' }, { status: 400 });
    }
    
    // Validate skill level
    const validSkillLevels = ['beginner', 'intermediate', 'advanced'];
    if (!validSkillLevels.includes(skillLevel)) {
      return json({ error: 'Invalid skill level' }, { status: 400 });
    }
    
    // Create OpenAI API instance with the key
    const openaiAPI = new OpenAIAPI(config.openai.apiKey);
    
    // Get mentor response
    const response = await openaiAPI.cybersecurityMentor(
      question,
      `Topic: ${topic}, Skill Level: ${skillLevel}, Current Lab: ${currentLab || 'None'}, Progress: ${progress || 'Not specified'}`,
      skillLevel as 'beginner' | 'intermediate' | 'advanced'
    );
    
    return json(response);
  } catch (error) {
    console.error('Mentor API error:', error);
    
    if (error instanceof Error) {
      return json({ error: error.message }, { status: 500 });
    }
    
    return json({ error: 'Internal server error' }, { status: 500 });
  }
};

export const GET: RequestHandler = async () => {
  // Return available topics and skill levels
  return json({
    topics: [
      'Network Security',
      'Web Application Security',
      'Cryptography',
      'Malware Analysis',
      'Incident Response',
      'Digital Forensics',
      'Penetration Testing',
      'Security Architecture',
      'Cloud Security',
      'IoT Security'
    ],
    skillLevels: ['beginner', 'intermediate', 'advanced']
  });
};
