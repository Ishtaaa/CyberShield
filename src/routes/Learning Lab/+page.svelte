<script lang="ts">
	import { goto } from '$app/navigation';
	
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

	<!-- Learning Paths -->
	<section class="py-20 bg-base-200/50">
		<div class="max-w-6xl mx-auto px-4">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-secondary mb-4">Choose Your Learning Path</h2>
				<p class="text-xl text-base-content/70 max-w-2xl mx-auto">
					Select from our curated learning paths designed for different skill levels and interests.
				</p>
			</div>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				<!-- Beginner Path -->
				<div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
					<div class="card-body text-center">
						<div class="text-6xl mb-4">🌱</div>
						<h3 class="card-title justify-center text-2xl">Beginner</h3>
						<div class="badge badge-primary mb-4">Level 1</div>
						<p class="text-base-content/70 mb-6">
							Perfect for those new to cybersecurity. Learn the fundamentals, basic concepts, 
							and essential security practices.
						</p>
						<div class="space-y-3 mb-6">
							<div class="flex items-center gap-2">
								<div class="w-2 h-2 bg-primary rounded-full"></div>
								<span class="text-sm">Cybersecurity Basics</span>
							</div>
							<div class="flex items-center gap-2">
								<div class="w-2 h-2 bg-primary rounded-full"></div>
								<span class="text-sm">Network Security</span>
							</div>
							<div class="flex items-center gap-2">
								<div class="w-2 h-2 bg-primary rounded-full"></div>
								<span class="text-sm">Password Security</span>
							</div>
						</div>
						<div class="card-actions justify-center">
							<button class="btn btn-primary">Start Learning</button>
						</div>
					</div>
				</div>
				
				<!-- Intermediate Path -->
				<div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-secondary">
					<div class="card-body text-center">
						<div class="text-6xl mb-4">🚀</div>
						<h3 class="card-title justify-center text-2xl">Intermediate</h3>
						<div class="badge badge-secondary mb-4">Level 2</div>
						<p class="text-base-content/70 mb-6">
							For those with basic knowledge. Dive deeper into penetration testing, 
							vulnerability assessment, and defensive strategies.
						</p>
						<div class="space-y-3 mb-6">
							<div class="flex items-center gap-2">
								<div class="w-2 h-2 bg-secondary rounded-full"></div>
								<span class="text-sm">Penetration Testing</span>
							</div>
							<div class="flex items-center gap-2">
								<div class="w-2 h-2 bg-secondary rounded-full"></div>
								<span class="text-sm">Vulnerability Analysis</span>
							</div>
							<div class="flex items-center gap-2">
								<div class="w-2 h-2 bg-secondary rounded-full"></div>
								<span class="text-sm">Incident Response</span>
							</div>
						</div>
						<div class="card-actions justify-center">
							<button class="btn btn-secondary">Continue Learning</button>
						</div>
					</div>
				</div>
				
				<!-- Advanced Path -->
				<div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
					<div class="card-body text-center">
						<div class="text-6xl mb-4">⚡</div>
						<h3 class="card-title justify-center text-2xl">Advanced</h3>
						<div class="badge badge-accent mb-4">Level 3</div>
						<p class="text-base-content/70 mb-6">
							Expert-level content for seasoned professionals. Advanced techniques, 
							research methodologies, and cutting-edge tools.
						</p>
						<div class="space-y-3 mb-6">
							<div class="flex items-center gap-2">
								<div class="w-2 h-2 bg-accent rounded-full"></div>
								<span class="text-sm">Advanced Exploitation</span>
							</div>
							<div class="flex items-center gap-2">
								<div class="w-2 h-2 bg-accent rounded-full"></div>
								<span class="text-sm">Malware Analysis</span>
							</div>
							<div class="flex items-center gap-2">
								<div class="w-2 h-2 bg-accent rounded-full"></div>
								<span class="text-sm">Threat Intelligence</span>
							</div>
						</div>
						<div class="card-actions justify-center">
							<button class="btn btn-accent">Master Level</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Interactive Labs -->
	<section class="py-20 bg-base-100">
		<div class="max-w-6xl mx-auto px-4">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-primary mb-4">Interactive Labs</h2>
				<p class="text-xl text-base-content/70 max-w-2xl mx-auto">
					Practice your skills in our safe, controlled environment with real-world scenarios.
				</p>
			</div>
			
			<div class="grid md:grid-cols-2 gap-8">
				<!-- Lab 1 -->
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<div class="flex items-center gap-3 mb-4">
							<div class="text-3xl">🔐</div>
							<div>
								<h3 class="card-title text-xl">Password Cracking Lab</h3>
								<div class="badge badge-success">Beginner</div>
							</div>
						</div>
						<p class="text-base-content/70 mb-4">
							Learn about password security by practicing various cracking techniques 
							and understanding how to create stronger passwords.
						</p>
						<div class="flex items-center gap-2 mb-4">
							<div class="w-3 h-3 bg-success rounded-full"></div>
							<span class="text-sm text-success">Available</span>
						</div>
						<div class="card-actions justify-end">
							<button class="btn btn-primary btn-sm">Launch Lab</button>
						</div>
					</div>
				</div>
				
				<!-- Lab 2 -->
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<div class="flex items-center gap-3 mb-4">
							<div class="text-3xl">🌐</div>
							<div>
								<h3 class="card-title text-xl">Web Application Security</h3>
								<div class="badge badge-warning">Intermediate</div>
							</div>
						</div>
						<p class="text-base-content/70 mb-4">
							Practice finding and exploiting common web vulnerabilities like SQL injection, 
							XSS, and CSRF attacks.
						</p>
						<div class="flex items-center gap-2 mb-4">
							<div class="w-3 h-3 bg-success rounded-full"></div>
							<span class="text-sm text-success">Available</span>
						</div>
						<div class="card-actions justify-end">
							<button class="btn btn-secondary btn-sm">Launch Lab</button>
						</div>
					</div>
				</div>
				
				<!-- Lab 3 -->
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<div class="flex items-center gap-3 mb-4">
							<div class="text-3xl">🕵️</div>
							<div>
								<h3 class="card-title text-xl">Network Reconnaissance</h3>
								<div class="badge badge-info">Intermediate</div>
							</div>
						</div>
						<p class="text-base-content/70 mb-4">
							Master network scanning techniques, port enumeration, and service identification 
							using industry-standard tools.
						</p>
						<div class="flex items-center gap-2 mb-4">
							<div class="w-3 h-3 bg-success rounded-full"></div>
							<span class="text-sm text-success">Available</span>
						</div>
						<div class="card-actions justify-end">
							<button class="btn btn-info btn-sm">Launch Lab</button>
						</div>
					</div>
				</div>
				
				<!-- Lab 4 -->
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<div class="flex items-center gap-3 mb-4">
							<div class="text-3xl">🦠</div>
							<div>
								<h3 class="card-title text-xl">Malware Analysis</h3>
								<div class="badge badge-error">Advanced</div>
							</div>
						</div>
						<p class="text-base-content/70 mb-4">
							Analyze malicious software in a safe environment. Learn static and dynamic 
							analysis techniques.
						</p>
						<div class="flex items-center gap-2 mb-4">
							<div class="w-3 h-3 bg-warning rounded-full"></div>
							<span class="text-sm text-warning">Coming Soon</span>
						</div>
						<div class="card-actions justify-end">
							<button class="btn btn-disabled btn-sm">Coming Soon</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Progress Tracking -->
	<section class="py-20 bg-base-200/50">
		<div class="max-w-4xl mx-auto px-4">
			<div class="text-center mb-12">
				<h2 class="text-4xl font-bold text-primary mb-4">Track Your Progress</h2>
				<p class="text-xl text-base-content/70">
					Monitor your learning journey and earn achievements as you progress.
				</p>
			</div>
			
			<div class="card bg-base-100 shadow-xl">
				<div class="card-body">
					<div class="grid md:grid-cols-3 gap-8">
						<!-- Current Level -->
						<div class="text-center">
							<div class="text-4xl font-bold text-primary mb-2">2</div>
							<div class="text-base-content/70">Current Level</div>
							<div class="badge badge-secondary mt-2">Intermediate</div>
						</div>
						
						<!-- Modules Completed -->
						<div class="text-center">
							<div class="text-4xl font-bold text-secondary mb-2">12</div>
							<div class="text-base-content/70">Modules Completed</div>
							<div class="badge badge-success mt-2">On Track</div>
						</div>
						
						<!-- Achievements -->
						<div class="text-center">
							<div class="text-4xl font-bold text-accent mb-2">8</div>
							<div class="text-base-content/70">Achievements Unlocked</div>
							<div class="badge badge-warning mt-2">Bronze</div>
						</div>
					</div>
					
					<!-- Progress Bar -->
					<div class="mt-8">
						<div class="flex justify-between mb-2">
							<span class="text-sm font-medium">Level Progress</span>
							<span class="text-sm font-medium">75%</span>
						</div>
						<div class="w-full bg-base-300 rounded-full h-3">
							<div class="bg-gradient-to-r from-primary to-secondary h-3 rounded-full" style="width: 75%"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

</div>