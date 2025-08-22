<script lang="ts">
	import { goto } from '$app/navigation';
	
	function navigateTo(path: string) {
		goto(path);
	}
</script>

<svelte:head>
	<title>CyberShield - Your Cybersecurity Learning Platform</title>
	<meta name="description" content="Learn cybersecurity fundamentals, ethical hacking, and digital defense with our comprehensive learning platform.">
</svelte:head>

<!-- Hero Section -->
<section class="hero min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
	<div class="hero-content text-center max-w-4xl mx-auto px-4">
		<div class="space-y-8">
			<div class="space-y-4">
				<h1 class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
					🛡️ CyberShield
				</h1>
				<p class="text-xl md:text-2xl text-base-content/80 max-w-2xl mx-auto">
					Hack the Hackers!
				</p>
			</div>
			
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<button 
					class="btn btn-primary btn-lg"
					on:click={() => navigateTo('/Learning Lab')}
				>
					Start Hacking Now!
				</button>
				<button 
					class="btn btn-outline btn-lg"
					on:click={() => navigateTo('/About Us')}
				>
					📚 Learn More
				</button>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section class="py-20 bg-base-200/50">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold mb-4">Why Choose CyberShield?</h2>
			<p class="text-xl text-base-content/70 max-w-2xl mx-auto">
				Our platform combines cutting-edge technology with proven learning methodologies
			</p>
		</div>
		
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			<!-- Feature 1 -->
			<div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
				<div class="card-body text-center">
					<div class="text-4xl mb-4">🔒</div>
					<h3 class="card-title justify-center">Secure Learning</h3>
					<p class="text-base-content/70">
						Learn in a safe, controlled environment with real-world scenarios and hands-on labs.
					</p>
				</div>
			</div>
			
			<!-- Feature 2 -->
			<div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
				<div class="card-body text-center">
					<div class="text-4xl mb-4">🎯</div>
					<h3 class="card-title justify-center">Practical Skills</h3>
					<p class="text-base-content/70">
						Master real cybersecurity techniques through interactive challenges and simulations.
					</p>
				</div>
			</div>
			
			<!-- Feature 3 -->
			<div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
				<div class="card-body text-center">
					<div class="text-4xl mb-4">📈</div>
					<h3 class="card-title justify-center">Progress Tracking</h3>
					<p class="text-base-content/70">
						Monitor your learning journey with detailed analytics and achievement badges.
					</p>
				</div>
			</div>
			
			<!-- Feature 4 -->
			<div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
				<div class="card-body text-center">
					<div class="text-4xl mb-4">🌐</div>
					<h3 class="card-title justify-center">Community</h3>
					<p class="text-base-content/70">
						Connect with fellow cybersecurity enthusiasts and industry professionals.
					</p>
				</div>
			</div>
			
			<!-- Feature 5 -->
			<div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
				<div class="card-body text-center">
					<div class="text-4xl mb-4">⚡</div>
					<h3 class="card-title justify-center">Latest Updates</h3>
					<p class="text-base-content/70">
						Stay current with the latest threats, tools, and defense strategies.
					</p>
				</div>
			</div>
			
			<!-- Feature 6 -->
			<div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
				<div class="card-body text-center">
					<div class="text-4xl mb-4">🏆</div>
					<h3 class="card-title justify-center">Certification Ready</h3>
					<p class="text-base-content/70">
						Prepare for industry-recognized cybersecurity certifications and exams.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>


