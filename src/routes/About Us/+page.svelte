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
			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<div class="space-y-6">
					<h2 class="text-4xl font-bold text-primary">Our Mission</h2>
					<p class="text-lg text-base-content/70 leading-relaxed">
						At CyberShield, we believe that cybersecurity education should be accessible, practical, and engaging. 
						Our mission is to bridge the gap between theoretical knowledge and real-world application, 
						empowering individuals to become skilled cybersecurity professionals.
					</p>
					<p class="text-lg text-base-content/70 leading-relaxed">
						We're committed to creating a learning environment that not only teaches the fundamentals 
						of cybersecurity but also instills ethical hacking practices and defensive strategies 
						that protect our digital world.
					</p>
				</div>
				<div class="text-center">
					<div class="text-8xl mb-4">🎯</div>
					<div class="stats shadow">
						<div class="stat">
							<div class="stat-title">Years of Experience</div>
							<div class="stat-value text-primary">5+</div>
						</div>
					</div>
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
						<h3 class="card-title text-2xl mb-4">🛡️ Cybersecurity Fundamentals</h3>
						<p class="text-base-content/70 mb-6">
							Complete guide covering the basics of cybersecurity, including threat vectors, 
							security principles, and best practices for digital protection.
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
						<h3 class="card-title text-2xl mb-4">🔍 Ethical Hacking Guide</h3>
						<p class="text-base-content/70 mb-6">
							Comprehensive manual on ethical hacking methodologies, penetration testing techniques, 
							and vulnerability assessment frameworks.
						</p>
						<div class="card-actions justify-end">
							<button class="btn btn-secondary">
								📥 Download PDF
							</button>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Additional Resources -->
			<div class="bg-base-200 rounded-box p-8">
				<h3 class="text-2xl font-bold mb-6 text-center">Additional Learning Resources</h3>
				<div class="grid md:grid-cols-3 gap-6">
					<div class="text-center space-y-3">
						<div class="text-4xl">📚</div>
						<h4 class="font-semibold">Video Tutorials</h4>
						<p class="text-sm text-base-content/70">Step-by-step video guides for complex topics</p>
					</div>
					<div class="text-center space-y-3">
						<div class="text-4xl">🧪</div>
						<h4 class="font-semibold">Lab Exercises</h4>
						<p class="text-sm text-base-content/70">Hands-on practice with real scenarios</p>
					</div>
					<div class="text-center space-y-3">
						<div class="text-4xl">📊</div>
						<h4 class="font-semibold">Progress Tracking</h4>
						<p class="text-sm text-base-content/70">Monitor your learning journey</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Blog Section -->
	<section id="blog" class="py-20 bg-base-200/50">
		<div class="max-w-6xl mx-auto px-4">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-primary mb-4">Latest Insights</h2>
				<p class="text-xl text-base-content/70 max-w-2xl mx-auto">
					Stay updated with the latest cybersecurity trends, threats, and defense strategies.
				</p>
			</div>
			
			<div class="grid md:grid-cols-3 gap-8">
				<!-- Blog Post 1 -->
				<article class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
					<div class="card-body">
						<div class="badge badge-primary mb-2">Latest</div>
						<h3 class="card-title">Emerging Cyber Threats in 2024</h3>
						<p class="text-base-content/70">
							Explore the latest cybersecurity threats and learn how to protect yourself 
							against sophisticated attacks.
						</p>
						<div class="card-actions justify-end mt-4">
							<button class="btn btn-ghost btn-sm">Read More →</button>
						</div>
					</div>
				</article>
				
				<!-- Blog Post 2 -->
				<article class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
					<div class="card-body">
						<div class="badge badge-secondary mb-2">Guide</div>
						<h3 class="card-title">Password Security Best Practices</h3>
						<p class="text-base-content/70">
							Learn how to create strong passwords and implement multi-factor authentication 
							for enhanced security.
						</p>
						<div class="card-actions justify-end mt-4">
							<button class="btn btn-ghost btn-sm">Read More →</button>
						</div>
					</div>
				</article>
				
				<!-- Blog Post 3 -->
				<article class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
					<div class="card-body">
						<div class="badge badge-accent mb-2">Tutorial</div>
						<h3 class="card-title">Setting Up a Home Security Lab</h3>
						<p class="text-base-content/70">
							Step-by-step guide to building your own cybersecurity lab for hands-on learning 
							and experimentation.
						</p>
						<div class="card-actions justify-end mt-4">
							<button class="btn btn-ghost btn-sm">Read More →</button>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>

	<!-- Team Section -->
	<section class="py-20 bg-base-100">
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

