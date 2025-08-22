<script lang="ts">
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let text: string = 'Loading...';
  export let showText: boolean = true;
  
  const sizeClasses = {
    sm: 'loading-sm',
    md: 'loading-md', 
    lg: 'loading-lg'
  };
</script>

<div class="flex flex-col items-center justify-center p-4">
  <div class="loading {sizeClasses[size]} loading-spinner text-primary"></div>
  {#if showText && text}
    <p class="mt-2 text-sm text-base-content/70">{text}</p>
  {/if}
</div>
