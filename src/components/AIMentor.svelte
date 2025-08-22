<script lang="ts">
  import { mentorStore, mentorUtils } from '$lib/ai/mentor';
  import type { MentorSession } from '$lib/ai/mentor';
  
  let selectedTopic = '';
  let selectedSkillLevel: 'beginner' | 'intermediate' | 'advanced' = 'beginner';
  let currentQuestion = '';
  let isStartingSession = false;
  
  $: currentSession = $mentorStore.currentSession;
  $: isLoading = $mentorStore.isLoading;
  $: error = $mentorStore.error;
  $: availableTopics = $mentorStore.availableTopics;
  $: skillLevels = $mentorStore.skillLevels;
  
  async function startMentorSession() {
    if (!selectedTopic) return;
    
    isStartingSession = true;
    try {
      await mentorStore.startSession(selectedTopic, selectedSkillLevel);
    } catch (err) {
      console.error('Failed to start session:', err);
    } finally {
      isStartingSession = false;
    }
  }
  
  async function askMentorQuestion() {
    if (!currentQuestion.trim() || !currentSession) return;
    
    mentorStore.setLoading(true);
    mentorStore.setError(null);
    
    try {
      // Pass the session info directly to avoid type issues
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: `You are a cybersecurity mentor specializing in ${currentSession.topic} for ${currentSession.skillLevel} level students. Provide clear, practical guidance.` },
            { role: 'user', content: currentQuestion.trim() }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const aiResponse = await response.json();
      const answer = aiResponse.content;

      // Add the question and answer to the session
      const mentorQuestion = {
        id: crypto.randomUUID(),
        question: currentQuestion.trim(),
        answer: answer,
        timestamp: new Date(),
        status: 'answered' as const
      };

      // Update the store with the new question
      mentorStore.addQuestion(mentorQuestion);
      currentQuestion = '';
    } catch (err) {
      console.error('Failed to ask question:', err);
      mentorStore.setError(err instanceof Error ? err.message : 'Failed to get response');
    } finally {
      mentorStore.setLoading(false);
    }
  }
  
  function endSession() {
    mentorStore.endSession();
    selectedTopic = '';
    selectedSkillLevel = 'beginner';
  }
  
  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      askMentorQuestion();
    }
  }
</script>

<div class="max-w-4xl mx-auto p-6">
  {#if !currentSession}
    <!-- Start Mentor Session -->
    <div class="bg-base-100 rounded-lg shadow-lg p-6 border border-base-300">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-primary mb-4">🎓 AI Cybersecurity Mentor</h2>
        <p class="text-lg text-base-content/80">
          Get personalized guidance from an AI expert in cybersecurity. 
          Choose your topic and skill level to begin your learning journey.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Topic Selection -->
        <div class="space-y-4">
          <div class="form-control">
            <div class="label">
              <span class="label-text font-semibold">Choose Your Topic</span>
            </div>
            <select 
              bind:value={selectedTopic}
              class="select select-bordered w-full"
            >
              <option value="">Select a topic...</option>
              {#each availableTopics as topic}
                <option value={topic}>{topic}</option>
              {/each}
            </select>
          </div>
          
          <div class="form-control">
            <div class="label">
              <span class="label-text font-semibold">Skill Level</span>
            </div>
            <select 
              bind:value={selectedSkillLevel}
              class="select select-bordered w-full"
            >
              {#each skillLevels as level}
                <option value={level}>{level.charAt(0).toUpperCase() + level.slice(1)}</option>
              {/each}
            </select>
          </div>
          
          <button
            class="btn btn-primary w-full"
            on:click={startMentorSession}
            disabled={!selectedTopic || isStartingSession}
          >
            {#if isStartingSession}
              <span class="loading loading-spinner loading-sm"></span>
              Starting Session...
            {:else}
              🚀 Start Learning Session
            {/if}
          </button>
        </div>
        
        <!-- Learning Path Preview -->
        <div class="space-y-4">
          <h3 class="font-semibold text-lg">Learning Path Preview</h3>
          {#if selectedTopic}
            <div class="bg-base-200 rounded-lg p-4">
              <h4 class="font-medium mb-3">{selectedTopic} - {selectedSkillLevel}</h4>
              <ul class="space-y-2">
                {#each mentorUtils.generateLearningPath(selectedTopic, selectedSkillLevel) as step}
                  <li class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-primary rounded-full"></div>
                    <span class="text-sm">{step}</span>
                  </li>
                {/each}
              </ul>
              
              <div class="mt-4 pt-4 border-t border-base-300">
                <h5 class="font-medium mb-2">Recommended Resources:</h5>
                <ul class="space-y-1">
                  {#each mentorUtils.getTopicResources(selectedTopic) as resource}
                    <li class="text-sm text-base-content/70">📚 {resource}</li>
                  {/each}
                </ul>
              </div>
            </div>
          {:else}
            <div class="bg-base-200 rounded-lg p-4 text-center text-base-content/60">
              Select a topic to see your learning path
            </div>
          {/if}
        </div>
      </div>
    </div>
  {:else}
    <!-- Active Mentor Session -->
    <div class="space-y-6">
      <!-- Session Header -->
      <div class="bg-primary text-primary-content rounded-lg p-6">
        <div class="flex justify-between items-start">
          <div>
            <h2 class="text-2xl font-bold mb-2">🎓 {currentSession.topic}</h2>
            <p class="text-primary-content/90">
              Skill Level: <span class="font-semibold">{currentSession.skillLevel}</span>
            </p>
            <p class="text-primary-content/80 mt-2">
              Session started: {currentSession.createdAt.toLocaleDateString()}
            </p>
          </div>
          <button
            class="btn btn-ghost text-primary-content"
            on:click={endSession}
          >
            End Session
          </button>
        </div>
      </div>
      
      <!-- Progress Update -->
      <div class="bg-base-100 rounded-lg p-4 border border-base-300">
        <div class="form-control">
          <div class="label">
            <span class="label-text font-semibold">Update Your Progress</span>
          </div>
          <input
            type="text"
            placeholder="e.g., Completed network scanning, working on firewall configuration..."
            class="input input-bordered w-full"
            value={currentSession.progress}
            on:input={(e) => mentorStore.updateProgress(e.currentTarget.value)}
          />
        </div>
      </div>
      
      <!-- Ask Questions -->
      <div class="bg-base-100 rounded-lg p-4 border border-base-300">
        <h3 class="font-semibold mb-4">Ask Your Mentor</h3>
        <div class="flex gap-2">
          <input
            type="text"
            placeholder="Ask about concepts, get lab guidance, or request explanations..."
            class="input input-bordered flex-1"
            bind:value={currentQuestion}
            on:keypress={handleKeyPress}
            disabled={isLoading}
          />
          <button
            class="btn btn-primary"
            on:click={askMentorQuestion}
            disabled={!currentQuestion.trim() || isLoading}
          >
            {#if isLoading}
              <span class="loading loading-spinner loading-sm"></span>
            {:else}
              Ask
            {/if}
          </button>
        </div>
      </div>
      
      <!-- Question History -->
      <div class="bg-base-100 rounded-lg p-4 border border-base-300">
        <h3 class="font-semibold mb-4">Learning History</h3>
        {#if currentSession.questions.length > 0}
          <div class="space-y-4">
            {#each currentSession.questions as question}
              <div class="border-l-4 border-primary pl-4">
                <div class="flex justify-between items-start mb-2">
                  <p class="font-medium text-sm">{question.question}</p>
                  <span class="badge badge-sm {question.status === 'answered' ? 'badge-success' : 'badge-warning'}">
                    {question.status}
                  </span>
                </div>
                {#if question.answer}
                  <div class="bg-base-200 rounded-lg p-3">
                    <p class="text-sm whitespace-pre-wrap">{question.answer}</p>
                  </div>
                {/if}
                <p class="text-xs text-base-content/60 mt-2">
                  {question.timestamp.toLocaleTimeString()}
                </p>
              </div>
            {/each}
          </div>
        {:else}
          <p class="text-base-content/60 text-center py-8">No questions asked yet. Start by asking your first question!</p>
        {/if}
      </div>
      
      <!-- Recommendations -->
      {#if currentSession.recommendations.length > 0}
        <div class="bg-base-100 rounded-lg p-4 border border-base-300">
          <h3 class="font-semibold mb-4">💡 Mentor Recommendations</h3>
          <ul class="space-y-2">
            {#each currentSession.recommendations as recommendation}
              <li class="flex items-start gap-2">
                <div class="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                <span class="text-sm">{recommendation}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  {/if}
  
  {#if error}
    <div class="alert alert-error mt-4">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{error}</span>
    </div>
  {/if}
</div>
