<script lang="ts">
	import { goto } from '$app/navigation';
	import AIMentor from '../../components/AIMentor.svelte';
	import LabGuide from '../../components/LabGuide.svelte';
	
	let activeTab = 'labs';
	
	function navigateTo(path: string) {
		goto(path);
	}
</script>

<svelte:head>
	<title>Learning Lab - CyberShield</title>
	<meta name="description" content="Interactive cybersecurity learning modules, labs, and hands-on exercises to master digital defense.">
</svelte:head>

<div class="min-h-screen bg-base-100">
	<!-- Hero Section -->
	<section class="hero bg-gradient-to-br from-secondary/10 via-base-100 to-accent/10 py-20">
		<div class="hero-content text-center max-w-4xl mx-auto px-4">
			<div class="space-y-6">
				<h1 class="text-5xl font-bold text-secondary">Learning Lab</h1>
				<p class="text-xl text-base-content/70 max-w-2xl mx-auto">
					Master cybersecurity through interactive labs, real-world scenarios, and hands-on exercises.
				</p>
			</div>
		</div>
	</section>

	<!-- Navigation Tabs -->
	<div class="container mx-auto px-4 py-8">
		<div class="tabs tabs-boxed justify-center mb-8">
			<button 
				class="tab {activeTab === 'labs' ? 'tab-active' : ''}"
				on:click={() => activeTab = 'labs'}
			>
				🔬 Labs
			</button>
			<button 
				class="tab {activeTab === 'mentor' ? 'tab-active' : ''}"
				on:click={() => activeTab = 'mentor'}
			>
				🎓 AI Mentor
			</button>
			<button 
				class="tab {activeTab === 'guide' ? 'tab-active' : ''}"
				on:click={() => activeTab = 'guide'}
			>
				🤖 Lab Guide
			</button>
		</div>

		<!-- Content based on active tab -->
		{#if activeTab === 'labs'}
			<!-- Labs Section -->
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				<!-- Password Cracking Lab -->
				<div class="card bg-base-100 shadow-lg border border-base-300">
					<div class="card-body">
						<h3 class="card-title text-primary">🔐 Password Cracking Lab</h3>
						<p class="text-base-content/70">
							Learn password security fundamentals and practice cracking techniques in a safe environment.
						</p>
						<div class="card-actions justify-end mt-4">
							<button class="btn btn-primary btn-sm">Start Lab</button>
						</div>
					</div>
				</div>

				<!-- Web Application Security -->
				<div class="card bg-base-100 shadow-lg border border-base-300">
					<div class="card-body">
						<h3 class="card-title text-secondary">🌐 Web Application Security</h3>
						<p class="text-base-content/70">
							Practice OWASP Top 10 vulnerabilities and learn secure coding practices.
						</p>
						<div class="card-actions justify-end mt-4">
							<button class="btn btn-secondary btn-sm">Start Lab</button>
						</div>
					</div>
				</div>

				<!-- Network Reconnaissance -->
				<div class="card bg-base-100 shadow-lg border border-base-300">
					<div class="card-body">
						<h3 class="card-title text-accent">🌐 Network Reconnaissance</h3>
						<p class="text-base-content/70">
							Master network scanning, enumeration, and information gathering techniques.
						</p>
						<div class="card-actions justify-end mt-4">
							<button class="btn btn-accent btn-sm">Start Lab</button>
						</div>
					</div>
				</div>

				<!-- Malware Analysis -->
				<div class="card bg-base-100 shadow-lg border border-base-300">
					<div class="card-body">
						<h3 class="card-title text-error">🦠 Malware Analysis</h3>
						<p class="text-base-content/70">
							Analyze and reverse engineer malicious software in a controlled environment.
						</p>
						<div class="card-actions justify-end mt-4">
							<button class="btn btn-error btn-sm">Coming Soon</button>
						</div>
					</div>
				</div>

				<!-- Incident Response -->
				<div class="card bg-base-100 shadow-lg border border-base-300">
					<div class="card-body">
						<h3 class="card-title text-warning">🚨 Incident Response</h3>
						<p class="text-base-content/70">
							Handle cybersecurity incidents with AI guidance and real-time assistance.
						</p>
						<div class="card-actions justify-end mt-4">
							<button class="btn btn-warning btn-sm">Coming Soon</button>
						</div>
					</div>
				</div>

				<!-- Digital Forensics -->
				<div class="card bg-base-100 shadow-lg border border-base-300">
					<div class="card-body">
						<h3 class="card-title text-info">🔍 Digital Forensics</h3>
						<p class="text-base-content/70">
							Learn evidence collection, analysis, and preservation techniques.
						</p>
						<div class="card-actions justify-end mt-4">
							<button class="btn btn-info btn-sm">Coming Soon</button>
						</div>
					</div>
				</div>
			</div>
		{:else if activeTab === 'mentor'}
			<!-- AI Mentor Section -->
			<AIMentor />
		{:else if activeTab === 'guide'}
			<!-- Lab Guide Section -->
			<LabGuide />
		{/if}
	</div>
</div>