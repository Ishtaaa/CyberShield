<script lang="ts">
	import '../app.css';
	import logo from '$lib/assets/logo.svg';
	import Header from './Header.svelte';
	import { theme } from '$lib/theme';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		// Initialize theme from localStorage
		const storedTheme = localStorage.getItem('cybershield-theme');
		if (storedTheme) {
			theme.set(storedTheme as any);
		}
	});
</script>

<Header />
<svelte:head>
	<link rel="icon" href={logo} />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

{@render children?.()}
