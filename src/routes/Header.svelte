<script lang="ts">
	import { navigation } from '$lib/navigation';
	import { theme, themes } from '$lib/theme';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let isMobileMenuOpen = false;

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}

	function navigateTo(href: string) {
		goto(href);
		closeMobileMenu();
	}
</script>

<header class="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-300">
	<div class="navbar max-w-7xl mx-auto px-4">
		<!-- Mobile menu button -->
		<div class="navbar-start lg:hidden">
			<button 
				class="btn btn-ghost btn-sm" 
				on:click={toggleMobileMenu}
				aria-label="Toggle mobile menu"
			>
				{#if isMobileMenuOpen}
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				{/if}
			</button>
		</div>

		<!-- Logo -->
		<div class="navbar-start">
			<a 
				href="/" 
				class="btn btn-ghost text-xl font-bold text-primary"
				on:click={() => navigateTo('/')}
			>
				🛡️ CyberShield
			</a>
		</div>

		<!-- Desktop Navigation -->
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1 gap-2">
				{#each navigation as item}
					{#if item.children}
						<li>
							<details>
								<summary class="font-medium">{item.label}</summary>
								<ul class="p-2 bg-base-100 rounded-box shadow-lg border border-base-300">
									{#each item.children as child}
										<li>
											<a 
												href={child.href}
												on:click={() => navigateTo(child.href)}
												class="hover:bg-base-200"
											>
												{child.label}
											</a>
										</li>
									{/each}
								</ul>
							</details>
						</li>
					{:else}
						<li>
							<a 
								href={item.href}
								on:click={() => navigateTo(item.href)}
								class="font-medium hover:bg-base-200"
								class:active={$page.url.pathname === item.href}
							>
								{item.label}
							</a>
						</li>
					{/if}
				{/each}
			</ul>
		</div>

		<!-- Theme Switcher and Actions -->
		<div class="navbar-end gap-2">
			<!-- Theme Toggle -->
			<label class="swap swap-rotate">
				<!-- this hidden checkbox controls the state -->
				<input 
					type="checkbox" 
					class="theme-controller" 
					value="synthwave"
					checked={$theme === themes.cyberpunk}
					on:change={(e) => {
						const target = e.target as HTMLInputElement;
						const newTheme = target.checked ? themes.cyberpunk : themes.valentine;
						theme.set(newTheme);
					}}
				/>

				<!-- sun icon (valentine theme) -->
				<svg
					class="swap-off h-6 w-6 fill-current"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24">
					<path
						d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
				</svg>

				<!-- moon icon (cyberpunk theme) -->
				<svg
					class="swap-on h-6 w-6 fill-current"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24">
					<path
						d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.07,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
				</svg>
			</label>

			
		
		</div>
	</div>

	<!-- Mobile Navigation Menu -->
	{#if isMobileMenuOpen}
		<div class="lg:hidden bg-base-100 border-t border-base-300">
			<ul class="menu p-4 space-y-2">
				{#each navigation as item}
					{#if item.children}
						<li>
							<details>
								<summary class="font-medium">{item.label}</summary>
								<ul class="pl-4 space-y-1">
									{#each item.children as child}
										<li>
											<a 
												href={child.href}
												on:click={() => navigateTo(child.href)}
												class="hover:bg-base-200 rounded"
											>
												{child.label}
											</a>
										</li>
									{/each}
								</ul>
							</details>
						</li>
					{:else}
						<li>
							<a 
								href={item.href}
								on:click={() => navigateTo(item.href)}
								class="font-medium hover:bg-base-200 rounded"
								class:active={$page.url.pathname === item.href}
							>
								{item.label}
							</a>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	{/if}
</header>