<script lang="ts">
	import { goto } from '$app/navigation';
	import AIMentor from '../../components/AIMentor.svelte';
	
	let activeTab = 'lab';
	
	function navigateTo(path: string) {
		goto(path);
	}
</script>

<svelte:head>
	<title>Lab - CyberShield</title>
	<meta name="description" content="Secure cybersecurity lab environment with AI-powered guidance for hands-on training.">
</svelte:head>

<div class="min-h-screen bg-base-100">
	<!-- Hero Section -->
	<section class="hero bg-gradient-to-br from-secondary/10 via-base-100 to-accent/10 py-20">
		<div class="hero-content text-center max-w-4xl mx-auto px-4">
					<div class="space-y-6">
			<h1 class="text-5xl font-bold text-secondary">Lab</h1>
			<p class="text-xl text-base-content/70 max-w-2xl mx-auto">
				Secure cybersecurity lab environment with AI-powered guidance for hands-on training.
			</p>
		</div>
		</div>
	</section>

	<!-- Navigation Tabs -->
	<div class="container mx-auto px-4 py-8">
		<div class="tabs tabs-boxed justify-center mb-8">
			<button 
				class="tab {activeTab === 'lab' ? 'tab-active' : ''}"
				on:click={() => activeTab = 'lab'}
			>
				💻 Lab
			</button>
			<button 
				class="tab {activeTab === 'mentor' ? 'tab-active' : ''}"
				on:click={() => activeTab = 'mentor'}
			>
				🎓 AI Mentor
			</button>
		</div>

		<!-- Content based on active tab -->
		{#if activeTab === 'lab'}
			<!-- Lab Section with Laptop Mockup -->
			<div class="flex flex-col items-center justify-center py-12">
				<!-- Laptop Mockup -->
				<div class="mockup-window border bg-base-300 mb-8">
					<div class="flex justify-center px-4 py-16 bg-base-200">
						<div class="text-center">
							<div class="text-6xl mb-4">🛡️</div>
							<h2 class="text-2xl font-bold text-primary mb-4">CyberShield Lab Environment</h2>
							<p class="text-base-content/70 mb-6 max-w-md">
								Your secure cybersecurity learning environment is ready. 
								Connect to start your hands-on training.
							</p>
							<div class="flex gap-4 justify-center">
								<button class="btn btn-primary" on:click={() => navigateTo("/Lab")}>
									🚀 Launch Lab
								</button>
								<button class="btn btn-outline">
									📖 View Tutorial
								</button>
							</div>
						</div>
					</div>
				</div>

				
				
			</div>
		{:else if activeTab === 'mentor'}
			<!-- AI Mentor Section -->
			<AIMentor />
		{/if}
	</div>
</div>