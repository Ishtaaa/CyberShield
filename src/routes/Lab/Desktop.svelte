<script lang="ts">
  import { draggable } from '$lib/actions/draggable';

  let showTerminal = $state(false);
  let showPhone = $state(false);

  // Window positions for better organization
  let terminalPos = $state({ x: 20, y: 20 });
  let phonePos = $state({ x: 20, y: 200 });
  

  function handleTerminalPositionChange(x: number, y: number) {
    terminalPos = { x, y };
  }

  function handlePhonePositionChange(x: number, y: number) {
    phonePos = { x, y };
  }


  function resetWindowPositions() {
    terminalPos = { x: 20, y: 20 };
    phonePos = { x: 20, y: 200 };
    
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 relative overflow-hidden rounded-3xl">
  <!-- Background pattern -->
  <div class="absolute inset-0 opacity-10">
    <svg class="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5"/>
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#grid)" class="text-pink-300"/>
    </svg>
  </div>

  <!-- Left sidebar with collapsible panels -->
  <div class="absolute left-2 top-4 flex flex-col gap-4 text-pink-200 text-xs z-10">
    <button class="btn btn-sm btn-circle btn-outline" onclick={() => (showTerminal = !showTerminal)}>
      <span class="text-lg">></span>
      <span class="ml-2">Terminal</span>
    </button>
    <button class="btn btn-sm btn-circle btn-outline" onclick={() => (showPhone = !showPhone)}>
      <span class="text-lg">📞</span>
      <span class="ml-2">Phone</span>
    </button>
    <button class="btn btn-sm btn-circle btn-outline" onclick={resetWindowPositions} title="Reset Window Positions">
      <span class="text-lg">🔄</span>
      <span class="ml-2">Reset</span>
    </button>
  </div>

  <!-- Main lab area - spans full screen except header -->
  <div class="absolute left-20 top-4 right-0 bottom-0 p-4 overflow-auto">
    <!-- Terminal window -->
    {#if showTerminal}
      <div 
        use:draggable={{ 
          handleSelector: '.window-bar',
          onPositionChange: handleTerminalPositionChange
        }} 
        class="absolute w-[45%] bg-black/80 text-green-400 ring-2 ring-green-500/50 rounded-xl shadow-2xl"
        style="left: {terminalPos.x}px; top: {terminalPos.y}px; z-index: 1000;"
      >
        <div class="window-bar px-3 py-2 text-green-200 bg-black/90 rounded-t-xl cursor-move flex justify-between items-center">
          <span class="font-medium">Terminal</span>
          <button class="text-green-300 hover:text-white text-lg transition-colors" onclick={() => (showTerminal = false)}>✕</button>
        </div>
        <div class="p-3 text-sm space-y-2">
          <div class="text-xs opacity-80">CyberShield Terminal v2.1.0</div>
          <div class="space-y-1">
           
          </div>
          <input type="text" class="bg-transparent border-none text-xs w-full" placeholder="Enter text..." />
        </div>
      </div>
    {/if}

    <!-- Phone window -->
    {#if showPhone}
      <div 
        use:draggable={{ 
          handleSelector: '.window-bar',
          onPositionChange: handlePhonePositionChange
        }} 
        class="absolute w-80 bg-trabsparent text-gray-800 "
        style="left: {phonePos.x}px; top: {phonePos.y}px; z-index: 1000;"
      >
        
        <div class="p-4">
          <div class="mockup-phone bg-transparent h-half">
            <div class="mockup-phone-camera"></div>
            <div class="mockup-phone-display text-white grid place-content-center">
              <div role="alert" class="alert alert-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Firstly, You will need to download the software from the browser and set it up on your device</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}

    

    <!-- Welcome message when no windows are open -->
    {#if !showTerminal && !showPhone }
      <div class="flex items-center justify-center h-full">
        <div class="text-center text-white/80">
          <div class="text-4xl mb-4">🛡️</div>
          <div class="text-2xl font-bold mb-2">Welcome to CyberShield Africa</div>
          <div class="text-lg mb-6">Your interactive cybersecurity learning journey starts here</div>
          <div class="text-sm opacity-70">
            Click the buttons on the left to open different tools and begin learning
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>


