<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>About Us - CyberShield</title>
	<meta name="description" content="Learn about CyberShield's mission, team, and comprehensive cybersecurity documentation.">
</svelte:head>

<div class="min-h-screen bg-base-100">
	<!-- Hero Section -->
	<section class="hero bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 py-20">
		<div class="hero-content text-center max-w-4xl mx-auto px-4">
			<div class="space-y-6">
				<h1 class="text-5xl font-bold text-primary">About CyberShield</h1>
				<p class="text-xl text-base-content/70 max-w-2xl mx-auto">
					Empowering the next generation of cybersecurity professionals through innovative learning and cutting-edge technology.
				</p>
			</div>
		</div>
	</section>

	<!-- Mission Section -->
	<section id="mission" class="py-20 bg-base-200/50">
		<div class="max-w-6xl mx-auto px-4">
			<div class="card  items-center">
				<div class="space-y-6">
					<h2 class="text-4xl font-bold text-primary text-center">Our Mission</h2>
					<p class="text-lg text-base-content/70 leading-relaxed">
						Africa's FinTech revolution is booming, from mobile money to digital banking — but with rapid innovation comes 
						rising cyber threats. Phishing, SIM swaps, and fraud attacks erode trust and put financial inclusion at risk. 
						We wanted to future-proof Africa's digital economy by creating a fun, accessible way to teach cybersecurity 
						while showcasing how AI can adapt to evolving threats.
						
						
					</p>
					<p class="text-lg text-base-content/70 leading-relaxed">
						At CyberShield, we believe that cybersecurity education should be accessible, practical, and engaging. 
						Our mission is to bridge the gap between theoretical knowledge and real-world application, 
						empowering individuals to become skilled cybersecurity professionals. 
						Our goal is to make cybersecurity fun and accessible to everyone, from students to professionals.
					</p>
					<p class="text-lg text-base-content/70 leading-relaxed">
						We're committed to creating a learning environment that not only teaches the fundamentals 
						of cybersecurity but also instills ethical hacking practices and defensive strategies 
						that protect our digital world.
					</p>
				</div>
				
			</div>
		</div>
	</section>

	<!-- AI Features Section -->
	<section id="ai-features" class="py-20 bg-base-100">
		<div class="max-w-6xl mx-auto px-4">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-primary mb-4">🤖 AI-Powered Features</h2>
				<p class="text-xl text-base-content/70 max-w-2xl mx-auto">
					Experience the future of cybersecurity education with our advanced AI integration.
				</p>
			</div>
			
			<div class="grid md:grid-cols-2 gap-8 mb-12">
				<!-- AI Chatbot -->
				<div class="card bg-gradient-to-br from-primary/10 to-primary/5 shadow-xl border border-primary/20">
					<div class="card-body text-center">
						<div class="text-4xl mb-4">💬</div>
						<h3 class="card-title text-xl justify-center">AI Cybersecurity Assistant</h3>
						<p class="text-base-content/70 mb-4">
							Always-accessible floating chatbot providing instant cybersecurity guidance, 
							code review, and threat analysis powered by OpenAI GPT.
						</p>
						<div class="badge badge-primary">Real-time</div>
					</div>
				</div>
				
				<!-- AI Mentor -->
				<div class="card bg-gradient-to-br from-secondary/10 to-secondary/5 shadow-xl border border-secondary/20">
					<div class="card-body text-center">
						<div class="text-4xl mb-4">🎓</div>
						<h3 class="card-title text-xl justify-center">AI Cybersecurity Mentor</h3>
						<p class="text-base-content/70 mb-4">
							Personalized learning paths and interactive guidance tailored to your skill level 
							and learning objectives.
						</p>
						<div class="badge badge-secondary">Adaptive</div>
					</div>
				</div>
				
				
			</div>
		</div>
	</section>

	<!-- Documentation Section -->
	<section id="documentation" class="py-20 bg-base-200/50">
		<div class="max-w-6xl mx-auto px-4">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-primary mb-4">Documentation & Resources</h2>
				<p class="text-xl text-base-content/70 max-w-2xl mx-auto">
					Access our comprehensive cybersecurity documentation, guides, and learning resources.
				</p>
			</div>
			
			<div class="grid md:grid-cols-2 gap-8 mb-12">
				<!-- Documentation Card 1 -->
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<h3 class="card-title text-2xl mb-4">🛡️ User Guide</h3>
						<p class="text-base-content/70 mb-6">
							Complete guide covering the basics of CyberShield, how to use it and get the most out of it.
							Learn how to use the different features of CyberShield to protect yourself and your data.
						</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">
								📥 Download PDF
							</button>
						</div>
					</div>
				</div>
				
				<!-- Documentation Card 2 -->
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<h3 class="card-title text-2xl mb-4">🔍 Technical Documentation</h3>
						<p class="text-base-content/70 mb-6">
							Comprehensive manual on how CyberShield was built and how it works.
						</p>
						<div class="card-actions justify-end">
							<button class="btn btn-secondary">
								📥 Download PDF
							</button>
						</div>
					</div>
				</div>
			</div>
			
			</div>
	</section>

	<!-- Team Section -->
	<section id= "blog"class="py-20 bg-base-100">
		<div class="max-w-6xl mx-auto px-4">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-primary mb-4">Our Team</h2>
				<p class="text-xl text-base-content/70 max-w-2xl mx-auto">
					Meet the cybersecurity experts and educators behind CyberShield.
				</p>
			</div>
			
			<div class="grid lg:grid-cols-2 gap-8">
				<!-- Team Member 1 -->
				<div class="card bg-base-200 shadow-xl text-center">
					<div class="card-body">
						<div class="avatar placeholder mb-4 flex justify-center">
							<div class="bg-primary text-secondary-content rounded-full w-24 text-center">
								<span class="text-4xl"><br/>👩‍💻</span>
							</div>
						</div>
						<h3 class="card-title justify-center">Ishta Mahadew</h3>
						<p class="text-base-content/70">University of Kwazulu-Natal</p>
						<p class="text-sm text-base-content/60 mt-2">
							2nd Year Computer Science Student
						</p>
						<div class="flex justify-center items-center mt-8">
							<a class="flex items-center gap-2 bg-darkgreen-500 text-beige-500 px-6 py-3 rounded-lg hover:bg-sage-500 hover:text-white p-10 transition-all duration-300 hover:animate-bounce" href="https://www.github.com/Ishtaaa" target="_blank" rel="noopener noreferrer"> 
								<span class="font-semibold">GitHub</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
									<mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0">
										<g fill="#fff">
											<ellipse cx="9.5" cy="9" rx="1.5" ry="1" />
											<ellipse cx="14.5" cy="9" rx="1.5" ry="1" />
										</g>
									</mask>
									<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
										<path stroke-dasharray="32" stroke-dashoffset="32" d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3">
											<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0" />
										</path>
										<path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5">
											<animate attributeName="d" dur="3s" repeatCount="indefinite" values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5" />
											<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0" />
										</path>
									</g>
									<rect width="8" height="4" x="8" y="11" fill="currentColor" mask="url(#lineMdGithubLoop0)">
										<animate attributeName="y" dur="10s" keyTimes="0;0.45;0.46;0.54;0.55;1" repeatCount="indefinite" values="11;11;7;7;11;11" />
									</rect>
								</svg>
							</a>
						</div>
					</div>
				</div>
				
				<!-- Team Member 2 -->
				<div class="card bg-base-200 shadow-xl text-center">
					<div class="card-body">
						<div class="avatar placeholder mb-4 flex justify-center">
							<div class="bg-secondary text-secondary-content rounded-full w-24 text-center">
								<span class="text-4xl"><br/>👩‍💻</span>
							</div>
						</div>
						<h3 class="card-title justify-center">Keemiya Chetty</h3>
						<p class="text-base-content/70">University of Kwazulu-Natal</p>
						<p class="text-sm text-base-content/60 mt-2">
							2nd Year Data Science Student
						</p>
						<div class="flex justify-center items-center mt-8">
							<a class="flex items-center gap-2  text-beige-500 px-6 py-3 rounded-lg hover:bg-sage-500 hover:text-white p-10 transition-all duration-300 hover:animate-bounce" href="https://www.github.com/Ishtaaa" target="_blank" rel="noopener noreferrer"> 
								<span class="font-semibold">GitHub</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
									<mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0">
										<g fill="#fff">
											<ellipse cx="9.5" cy="9" rx="1.5" ry="1" />
											<ellipse cx="14.5" cy="9" rx="1.5" ry="1" />
										</g>
									</mask>
									<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
										<path stroke-dasharray="32" stroke-dashoffset="32" d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3">
											<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0" />
										</path>
										<path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5">
											<animate attributeName="d" dur="3s" repeatCount="indefinite" values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5" />
											<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0" />
										</path>
									</g>
									<rect width="8" height="4" x="8" y="11" fill="currentColor" mask="url(#lineMdGithubLoop0)">
										<animate attributeName="y" dur="10s" keyTimes="0;0.45;0.46;0.54;0.55;1" repeatCount="indefinite" values="11;11;7;7;11;11" />
									</rect>
								</svg>
							</a>
						</div>
					</div>
				</div>
				
				
			</div>
		</div>
	</section>

</div>

