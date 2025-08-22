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

	<!-- Documentation Section -->
	<section id="documentation" class="py-20 bg-base-100">
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
							<div class="bg-primary text-primary-content rounded-full w-24 text-center">
								<span class="text-4xl"><br/>👩‍💻</span>
							</div>
						</div>
						<h3 class="card-title justify-center">Ishta Mahadew</h3>
						<p class="text-base-content/70">University of Kwazulu-Natal</p>
						<p class="text-sm text-base-content/60 mt-2">
							2nd Year Computer Science Student
						</p>
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
					</div>
				</div>
				
				
			</div>
		</div>
	</section>

</div>

