<script lang="ts">
  import { onMount } from 'svelte';
  import { chatStore } from '$lib/ai/chat';
  import { cybersecurityContext } from '$lib/ai/chat';
  import ErrorBoundary from './ErrorBoundary.svelte';
  import LoadingSpinner from './LoadingSpinner.svelte';
  
  let chatInput: HTMLInputElement;
  let chatContainer: HTMLDivElement;
  
  $: messages = $chatStore.messages;
  $: isOpen = $chatStore.isOpen;
  $: isLoading = $chatStore.isLoading;
  $: error = $chatStore.error;
  
  function toggleChat() {
    chatStore.toggleChat();
    if (isOpen) {
      setTimeout(() => chatInput?.focus(), 100);
    }
  }
  
  async function sendMessage() {
    if (!chatInput.value.trim() || isLoading) return;
    
    const message = chatInput.value.trim();
    chatInput.value = '';
    
    try {
      await chatStore.sendMessage(message);
    } catch (err) {
      console.error('Failed to send message:', err);
    }
  }
  
  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }
  
  function clearChat() {
    chatStore.clearChat();
  }
  
  function handleErrorRetry() {
    // Clear the error and retry the last action
    if (error) {
      // Reset error state
      chatStore.clearError();
    }
  }
  
  function handleErrorDismiss() {
    chatStore.clearError();
  }
  
  onMount(() => {
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  });
  
  $: if (chatContainer && messages.length > 0) {
    setTimeout(() => {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 100);
  }
</script>

<!-- Floating Chat Button -->
<button
  class="fixed bottom-6 right-6 w-16 h-16 bg-primary text-primary-content rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
  on:click={toggleChat}
  aria-label="Toggle AI Chat"
>
  {#if isOpen}
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  {:else}
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  {/if}
</button>

<!-- Chat Interface -->
{#if isOpen}
  <div class="fixed bottom-24 right-6 w-96 h-[500px] bg-base-100 rounded-lg shadow-2xl border border-base-300 z-40 flex flex-col">
    <!-- Chat Header -->
    <div class="bg-primary text-primary-content p-4 rounded-t-lg flex justify-between items-center">
      <h3 class="font-semibold">🤖 AI Cybersecurity Assistant</h3>
      <div class="flex gap-2">
        <button
          class="btn btn-ghost btn-sm text-primary-content"
          on:click={clearChat}
          title="Clear Chat"
          aria-label="Clear chat history"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
        <button
          class="btn btn-ghost btn-sm text-primary-content"
          on:click={toggleChat}
          title="Close Chat"
          aria-label="Close chat window"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Error Display -->
    <ErrorBoundary 
      error={error} 
      onRetry={handleErrorRetry}
      on:dismiss={handleErrorDismiss}
    />
    
    <!-- Chat Messages -->
    <div 
      bind:this={chatContainer}
      class="flex-1 overflow-y-auto p-4 space-y-4 bg-base-200"
    >
      {#each messages as message}
        <div class="flex {message.role === 'user' ? 'justify-end' : 'justify-start'}">
          <div class="max-w-[80%] {message.role === 'user' ? 'bg-primary text-primary-content' : 'bg-base-100'} rounded-lg px-3 py-2 shadow-sm">
            <p class="text-sm whitespace-pre-wrap">{message.content}</p>
          </div>
        </div>
      {/each}
      
      {#if isLoading}
        <div class="flex justify-start">
          <div class="bg-base-100 rounded-lg px-3 py-2 shadow-sm">
            <div class="flex items-center gap-2">
              <div class="loading loading-dots loading-sm"></div>
              <span class="text-sm text-base-content">AI is thinking...</span>
            </div>
          </div>
        </div>
      {/if}
      
      {#if error}
        <div class="flex justify-start">
          <div class="bg-error text-error-content rounded-lg px-3 py-2 shadow-sm">
            <p class="text-sm">Error: {error}</p>
          </div>
        </div>
      {/if}
    </div>
    
    <!-- Chat Input -->
    <div class="p-4 border-t border-base-300 bg-base-100 rounded-b-lg">
      <div class="flex gap-2">
        <input
          bind:this={chatInput}
          type="text"
          placeholder="Ask about cybersecurity..."
          class="input input-bordered flex-1"
          on:keypress={handleKeyPress}
          disabled={isLoading}
        />
        <button
          class="btn btn-primary"
          on:click={sendMessage}
          disabled={isLoading}
          aria-label="Send message"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
      
      <!-- Quick Topics -->
      <div class="mt-3 flex flex-wrap gap-2">
        {#each cybersecurityContext.topics.slice(0, 4) as topic}
          <button
            class="btn btn-xs btn-outline"
            on:click={() => chatStore.sendMessage(`Tell me about ${topic}`)}
            disabled={isLoading}
          >
            {topic}
          </button>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  .loading-dots {
    --loading-dots-size: 0.5rem;
  }
  
  /* Custom scrollbar for chat container */
  .overflow-y-auto::-webkit-scrollbar {
    width: 6px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .overflow-y-auto::-webkit-scrollbar-thumb {
    background: hsl(var(--bc) / 0.3);
    border-radius: 3px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: hsl(var(--bc) / 0.5);
  }
</style>
