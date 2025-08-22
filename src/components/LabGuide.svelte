<script lang="ts">
  import { mentorStore } from '$lib/ai/mentor';
  
  let currentLab = '';
  let userProgress = '';
  let specificQuestion = '';
  let isLoading = false;
  let guidance = '';
  let error = '';
  
  const availableLabs = [
    'Password Cracking Lab',
    'Web Application Security',
    'Network Reconnaissance',
    'Malware Analysis',
    'Incident Response',
    'Digital Forensics'
  ];
  
  async function getLabGuidance() {
    if (!currentLab || !userProgress.trim()) return;
    
    isLoading = true;
    error = '';
    guidance = '';
    
          try {
        const response = await fetch('/api/mentor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            question: specificQuestion || `Help me with ${currentLab}`,
            topic: 'Lab Guidance',
            skillLevel: 'beginner',
            currentLab,
            progress: userProgress
          })
        });

        if (!response.ok) {
          throw new Error('Failed to get lab guidance');
        }

        const aiResponse = await response.json();
        guidance = aiResponse.content;
      } catch (err) {
        error = err instanceof Error ? err.message : 'Failed to get lab guidance';
      } finally {
        isLoading = false;
      }
  }
  
  function clearGuidance() {
    guidance = '';
    error = '';
    specificQuestion = '';
  }
</script>

<div class="max-w-4xl mx-auto p-6">
  <div class="bg-base-100 rounded-lg shadow-lg p-6 border border-base-300">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-primary mb-4">🔬 AI Lab Guide</h2>
      <p class="text-lg text-base-content/80">
        Get personalized guidance for your cybersecurity lab exercises. 
        Describe your progress and get step-by-step assistance from AI.
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-6">
      <!-- Lab Selection and Progress -->
      <div class="space-y-4">
        <label class="form-control">
          <div class="label">
            <span class="label-text font-semibold">Select Your Lab</span>
          </div>
          <select 
            bind:value={currentLab}
            class="select select-bordered w-full"
          >
            <option value="">Choose a lab...</option>
            {#each availableLabs as lab}
              <option value={lab}>{lab}</option>
            {/each}
          </select>
        </label>
        
        <label class="form-control">
          <div class="label">
            <span class="label-text font-semibold">Describe Your Progress</span>
          </div>
          <textarea
            bind:value={userProgress}
            placeholder="e.g., I've completed the initial setup, scanned the target network, and found open ports 22, 80, and 443. I'm now trying to understand what services are running on these ports..."
            class="textarea textarea-bordered w-full h-24"
          ></textarea>
        </label>
        
        <label class="form-control">
          <div class="label">
            <span class="label-text font-semibold">Specific Question (Optional)</span>
          </div>
          <input
            type="text"
            bind:value={specificQuestion}
            placeholder="e.g., How do I identify the web server version?"
            class="input input-bordered w-full"
          />
        </label>
        
        <button
          class="btn btn-primary w-full"
          on:click={getLabGuidance}
          disabled={!currentLab || !userProgress.trim() || isLoading}
        >
          {#if isLoading}
            <span class="loading loading-spinner loading-sm"></span>
            Getting Guidance...
          {:else}
            🚀 Get AI Guidance
          {/if}
        </button>
        
        {#if guidance || error}
          <button
            class="btn btn-outline w-full"
            on:click={clearGuidance}
          >
            Clear Guidance
          </button>
        {/if}
      </div>
      
      <!-- AI Guidance Display -->
      <div class="space-y-4">
        <h3 class="font-semibold text-lg">AI Lab Guidance</h3>
        
        {#if isLoading}
          <div class="bg-base-200 rounded-lg p-6 text-center">
            <div class="loading loading-spinner loading-lg"></div>
            <p class="mt-4 text-base-content/70">AI is analyzing your lab progress...</p>
          </div>
        {:else if error}
          <div class="alert alert-error">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        {:else if guidance}
          <div class="bg-base-200 rounded-lg p-4">
            <div class="prose prose-sm max-w-none">
              <div class="whitespace-pre-wrap text-sm leading-relaxed">{guidance}</div>
            </div>
          </div>
          
          <!-- Action Items -->
          <div class="bg-primary/10 rounded-lg p-4 border border-primary/20">
            <h4 class="font-semibold text-primary mb-3">💡 Next Steps</h4>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-primary rounded-full"></div>
                <span class="text-sm">Review the guidance above</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-primary rounded-full"></div>
                <span class="text-sm">Apply the suggested techniques</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-primary rounded-full"></div>
                <span class="text-sm">Update your progress and ask follow-up questions</span>
              </div>
            </div>
          </div>
        {:else}
          <div class="bg-base-200 rounded-lg p-6 text-center text-base-content/60">
            <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <p>Select a lab and describe your progress to get AI guidance</p>
          </div>
        {/if}
      </div>
    </div>
    
    <!-- Lab Tips -->
    <div class="mt-8 bg-base-200 rounded-lg p-4">
      <h3 class="font-semibold mb-3">💡 Lab Best Practices</h3>
      <div class="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <h4 class="font-medium mb-2">Documentation</h4>
          <ul class="space-y-1 text-base-content/70">
            <li>• Keep detailed notes of each step</li>
            <li>• Screenshot important findings</li>
            <li>• Record command outputs</li>
          </ul>
        </div>
        <div>
          <h4 class="font-medium mb-2">Methodology</h4>
          <ul class="space-y-1 text-base-content/70">
            <li>• Follow systematic approach</li>
            <li>• Test assumptions</li>
            <li>• Validate results</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
