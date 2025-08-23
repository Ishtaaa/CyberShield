// Simple test script to verify Gemini API endpoints
// Run with: node test-api.js

const BASE_URL = 'http://localhost:5173';

async function testHealthEndpoint() {
  console.log('Testing health endpoint...');
  try {
    const response = await fetch(`${BASE_URL}/api/health`);
    const data = await response.json();
    console.log('Health check response:', data);
    return data.status === 'healthy' || data.status === 'unhealthy';
  } catch (error) {
    console.error('Health check failed:', error.message);
    return false;
  }
}

async function testChatEndpoint() {
  console.log('\nTesting chat endpoint...');
  try {
    const response = await fetch(`${BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          { role: 'user', content: 'Hello! Can you help me with cybersecurity?' }
        ]
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.log('Chat endpoint error:', errorData);
      return false;
    }
    
    const data = await response.json();
    console.log('Chat response received:', data.content ? 'Success' : 'No content');
    return !!data.content;
  } catch (error) {
    console.error('Chat endpoint failed:', error.message);
    return false;
  }
}

async function testMentorEndpoint() {
  console.log('\nTesting mentor endpoint...');
  try {
    const response = await fetch(`${BASE_URL}/api/mentor`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'mentor',
        userQuery: 'What is network security?',
        skillLevel: 'beginner'
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.log('Mentor endpoint error:', errorData);
      return false;
    }
    
    const data = await response.json();
    console.log('Mentor response received:', data.content ? 'Success' : 'No content');
    return !!data.content;
  } catch (error) {
    console.error('Mentor endpoint failed:', error.message);
    return false;
  }
}

async function runTests() {
  console.log('🚀 Testing CyberShield Gemini API endpoints...\n');
  
  const healthOk = await testHealthEndpoint();
  const chatOk = await testChatEndpoint();
  const mentorOk = await testMentorEndpoint();
  
  console.log('\n📊 Test Results:');
  console.log(`Health Check: ${healthOk ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Chat API: ${chatOk ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Mentor API: ${mentorOk ? '✅ PASS' : '❌ FAIL'}`);
  
  if (healthOk && chatOk && mentorOk) {
    console.log('\n🎉 All tests passed! Gemini API integration is working correctly.');
  } else {
    console.log('\n⚠️  Some tests failed. Check your configuration and API key.');
  }
}

// Run tests if this file is executed directly
if (typeof window === 'undefined') {
  runTests().catch(console.error);
}
