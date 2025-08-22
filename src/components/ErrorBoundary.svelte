<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  export let error: string | null = null;
  export let onRetry: (() => void) | null = null;
  
  const dispatch = createEventDispatcher();
  
  function handleRetry() {
    if (onRetry) {
      onRetry();
    } else {
      dispatch('retry');
    }
  }
  
  function handleDismiss() {
    dispatch('dismiss');
  }
</script>

{#if error}
  <div class="alert alert-error shadow-lg mb-4">
    <div class="flex-1">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div>
        <h3 class="font-bold">Error</h3>
        <div class="text-xs">{error}</div>
      </div>
    </div>
    <div class="flex-none">
      {#if onRetry}
        <button class="btn btn-sm btn-ghost" on:click={handleRetry}>
          Retry
        </button>
      {/if}
      <button class="btn btn-sm btn-ghost" on:click={handleDismiss}>
        Dismiss
      </button>
    </div>
  </div>
{/if}
