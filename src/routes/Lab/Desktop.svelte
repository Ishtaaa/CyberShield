<script lang="ts">
	import { draggable } from '$lib/actions/draggable';
	import { onMount } from 'svelte';

	let showTerminal = $state(false);
	let showPhone = $state(false);
	let showBrowser = $state(false);

	// Window positions for better organization
	let terminalPos = $state({ x: 100, y: 20 });
	let phonePos = $state({ x: 100, y: 200 });
	let browserPos = $state({ x: 250, y: 250 });

	function handleTerminalPositionChange(x: number, y: number) {
		terminalPos = { x, y };
	}

	function handlePhonePositionChange(x: number, y: number) {
		phonePos = { x, y };
	}
	
	function handleBrowserPositionChange(x: number, y: number) {
		browserPos = { x, y };
	}

	function resetWindowPositions() {
		terminalPos = { x: 20, y: 20 };
		phonePos = { x: 20, y: 200 };
		browserPos = { x: 250, y: 250 };
	}
	
	let terminalHistory: string[] = [
		'CyberShield Terminal v2.1.0',
		"Type 'help' to see available commands"
	];
	let currentInput: string = "";

	function handleCommand() {
		if (!currentInput.trim()) return;

		terminalHistory = [...terminalHistory, `> ${currentInput}`];

		switch (currentInput.toLowerCase()) {
			case 'help':
				terminalHistory = [...terminalHistory, 'Available commands: help, scan, exploit, clear, nmap, sqlmap'];
				break;
			case 'scan':
				terminalHistory = [...terminalHistory, 'Scanning network...', 'Found 3 vulnerable endpoints', 'Port 80: HTTP Server', 'Port 443: HTTPS Server', 'Port 22: SSH Server'];
				addNextInstruction();
				break;
			case 'nmap':
				terminalHistory = [...terminalHistory, 'Running Nmap scan...', 'Starting Nmap 7.80', 'Nmap scan report for 192.168.1.1', 'Host is up (0.00056s latency)', 'Not shown: 997 closed ports', 'PORT     STATE SERVICE', '22/tcp   open  ssh', '80/tcp   open  http', '443/tcp  open  https'];
				break;
			case 'sqlmap':
				terminalHistory = [...terminalHistory, 'Running SQLMap...', '[*] starting @ 14:33:02', '[*] testing connection to the target URL', '[+] the target URL is stable', '[+] testing for SQL injection on GET parameter', '[+] testing AND boolean-based blind - WHERE or HAVING clause'];
				break;
			case 'run brute force':
				terminalHistory = [...terminalHistory, 'brute force password cracker ran', 'Attempting password combinations...', 'Found weak password: admin123', 'Access granted to system'];
				addNextInstruction();
				break;
			case 'exploit':
				terminalHistory = [
					...terminalHistory,
					'Launching exploit... Success! Gained shell access.',
					'Root access obtained',
					'System compromised'
				];
				addNextInstruction();
				break;
			case 'clear':
				terminalHistory = ['CyberShield Terminal v2.1.0'];
				break;
			default:
				terminalHistory = [...terminalHistory, `Unknown command: ${currentInput}`];
		}

		currentInput = '';
	}

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			handleCommand();
		}
	}

	let instructions: string[] = [
		'Welcome to the lab! Start by scanning the network.',
		'Look for suspicious login attempts on the banking portal.',
		'Investigate exposed API endpoints.',
		'Try SQL injection on the login form.',
		'Great job! You found the vulnerability.'
	];

	let currentAlerts: { id: number; text: string }[] = [];
	let nextId = 0;
	let instructionIndex = 0;

	function addNextInstruction() {
		if (instructionIndex < instructions.length) {
			currentAlerts = [...currentAlerts, { id: nextId++, text: instructions[instructionIndex++] }];
		}
	}

	function closeAlert(id: number) {
		currentAlerts = currentAlerts.filter((a) => a.id !== id);
	}

	// Push new alerts automatically every 7s
	onMount(() => {
		const interval = setInterval(() => {
			addNextInstruction();
		}, 7000);

		return () => clearInterval(interval);
	});
</script>

<div
	class="relative min-h-screen overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-indigo-900"
>
	<!-- Background pattern -->
	<div class="absolute inset-0 opacity-10">
		<svg class="h-full w-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
					<path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5" />
				</pattern>
			</defs>
			<rect width="100" height="100" fill="url(#grid)" class="text-pink-300" />
		</svg>
	</div>

	<!-- Left sidebar with collapsible panels -->
	<div class="absolute top-4 left-2 z-10 flex flex-col gap-4 text-xs text-pink-200">
		<button
			class="btn-ml aria-label btn rounded-2xl"
			onclick={() => (showTerminal = !showTerminal)}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<rect width="24" height="24" fill="none" />
				<path
					fill="#000"
					d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M8.53 8.47a.75.75 0 0 0-1.06 1.06L9.94 12l-2.47 2.47a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06zM13 14.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"
				/>
			</svg>
			<span class="ml-2">Terminal</span>
		</button>

		<button class="btn-ml aria-label btn rounded-2xl" onclick={() => (showPhone = !showPhone)}>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<rect width="24" height="24" fill="none" />
				<path
					fill="#000"
					d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4z"
				/>
			</svg>
			<span class="ml-2">Phone</span>
		</button>

		<button class="btn-ml aria-label btn rounded-2xl" onclick={() => (showBrowser = !showBrowser)}>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<rect width="24" height="24" fill="none" />
				<g fill="none" stroke="#000" stroke-width="1">
					<path
						stroke-linecap="round"
						stroke-width="1.5"
						d="M20.998 13q.002-.705.002-1.5c0-4.478 0-6.718-1.391-8.109S15.979 2 11.5 2C7.022 2 4.782 2 3.391 3.391S2 7.021 2 11.5c0 4.478 0 6.718 1.391 8.109S7.021 21 11.5 21q.795 0 1.5-.002"
					/>
					<path
						stroke-linejoin="round"
						stroke-width="1.5"
						d="m18.5 15l.258.697c.338.914.507 1.371.84 1.704c.334.334.791.503 1.705.841L22 18.5l-.697.258c-.914.338-1.371.507-1.704.84c-.334.334-.503.791-.841 1.705L18.5 22l-.258-.697c-.338-.914-.507-1.371-.84-1.704c-.334-.334-.791-.503-1.705-.841L15 18.5l.697-.258c.914-.338 1.371-.507 1.704-.84c.334-.334.503-.791.841-1.705zM2 9h19"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.1"
						d="M6.5 5.5h.009m3.991 0h.009"
					/>
				</g>
			</svg>
			<span class="ml-2">Browser</span>
		</button>

		<button
			class="btn-ml aria-label btn rounded-2xl"
			onclick={resetWindowPositions}
			title="Reset Window Positions"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
				<rect width="32" height="32" fill="none" />
				<path
					fill="primary"
					d="M18 28A12 12 0 1 0 6 16v6.2l-3.6-3.6L1 20l6 6l6-6l-1.4-1.4L8 22.2V16a10 10 0 1 1 10 10Z"
				/>
			</svg>
			<span class="ml-2">Reset</span>
		</button>
	</div>

	<!-- Main lab area - spans full screen except header -->
	<div class="absolute top-4 right-0 bottom-0 left-20 overflow-auto p-4">
		<!-- Terminal window -->
		{#if showTerminal}
			<div
				use:draggable={{
					handleSelector: '.window-bar',
					onPositionChange: handleTerminalPositionChange
				}}
				class="absolute w-[45%] rounded-xl bg-black/80 text-green-400 shadow-2xl ring-2 ring-green-500/50"
				style="left: {terminalPos.x}px; top: {terminalPos.y}px; z-index: 1000;"
			>
				<div
					class="window-bar flex cursor-move items-center justify-between rounded-t-xl bg-black/90 px-3 py-2 text-green-200"
				>
					<span class="font-medium">Terminal</span>
					<button 
						class="text-green-300 hover:text-white text-lg transition-colors" 
						onclick={() => (showTerminal = false)}
					>
						✕
					</button>
				</div>
				<div class="space-y-2 p-3 text-sm max-h-96 overflow-y-auto">
					<div class="space-y-1">
						{#each terminalHistory as line, i}
							<div class="text-xs">{line}</div>
						{/each}
					</div>
					<div class="flex items-center">
						<span class="text-green-400 mr-2">$</span>
						<input
							type="text"
							bind:value={currentInput}
							class="flex-1 border-none bg-transparent text-xs text-green-400 outline-none"
							placeholder="Enter command..."
							onkeydown={handleKeyPress}
						/>
					</div>
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
				class="absolute w-80 bg-transparent text-gray-800"
				style="left: {phonePos.x}px; top: {phonePos.y}px; z-index: 1000;"
			>
				<div class="p-4">
					<div class="mockup-phone border-primary">
						<div class="mockup-phone-camera"></div>
						<div
							class="mockup-phone-display flex flex-col space-y-4 overflow-y-auto border-primary bg-base-300 p-2 p-10 text-white"
						>
							{#each [{ id: 1, title: 'Weak Passwords', desc: "User uses '123456' for banking login." }, { id: 2, title: 'Phishing Susceptibility', desc: 'User clicked on fake invoice email.' }, { id: 3, title: 'Unpatched App', desc: 'User\'s FinTech app is 2 years out of date.' }] as vuln (vuln.id)}
								<div class="card rounded-xl bg-base-200 p-3 text-black shadow-md">
									<h2 class="text-sm font-bold">{vuln.title}</h2>
									<p class="text-xs">{vuln.desc}</p>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		{/if}

		<!-- Enhanced Browser window -->
		{#if showBrowser}
			<div
				use:draggable={{
					handleSelector: '.window-bar',
					onPositionChange: handleBrowserPositionChange
				}}
				class="absolute w-[60%] h-[70%] rounded-xl bg-white shadow-2xl ring-2 ring-blue-500/50"
				style="left: {browserPos.x}px; top: {browserPos.y}px; z-index: 1000;"
			>
				<div class="window-bar flex cursor-move items-center justify-between rounded-t-xl bg-gray-100 px-4 py-2 border-b">
					<div class="flex items-center space-x-2">
						<div class="w-3 h-3 bg-red-500 rounded-full"></div>
						<div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
						<div class="w-3 h-3 bg-green-500 rounded-full"></div>
					</div>
					<div class="flex-1 mx-4">
						<div class="flex items-center bg-white rounded-lg border px-3 py-1">
							<svg class="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
							</svg>
							<input type="text" value="https://github.com/cybersecurity-tools" class="flex-1 text-sm outline-none" readonly />
						</div>
					</div>
					<button 
						class="text-gray-500 hover:text-gray-700 text-lg transition-colors" 
						onclick={() => (showBrowser = false)}
					>
						✕
					</button>
				</div>
				
				<div class="p-6 h-full overflow-y-auto bg-gray-50">
					<!-- Browser Content -->
					<div class="max-w-4xl mx-auto">
						<!-- Header -->
						<div class="bg-white rounded-lg shadow-sm p-6 mb-6">
							<h1 class="text-2xl font-bold text-gray-800 mb-2">🔒 Cybersecurity Tools Repository</h1>
							<p class="text-gray-600">A comprehensive collection of ethical hacking and security testing tools</p>
						</div>

						<!-- Tools Grid -->
						<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<!-- Tool Card 1 -->
							<div class="bg-white rounded-lg shadow-sm p-4 border-l-4 border-red-500 hover:shadow-md transition-shadow">
								<div class="flex items-center mb-3">
									<div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
										🔓
									</div>
									<h3 class="font-semibold text-gray-800">Password Cracker</h3>
								</div>
								<p class="text-sm text-gray-600 mb-3">Advanced brute force password cracking tool with dictionary attacks</p>
								<div class="flex items-center justify-between">
									<span class="text-xs text-gray-500">Downloads: 1.2k</span>
									<button class="btn btn-sm btn-primary">Download</button>
								</div>
							</div>

							<!-- Tool Card 2 -->
							<div class="bg-white rounded-lg shadow-sm p-4 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
								<div class="flex items-center mb-3">
									<div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
										🌐
									</div>
									<h3 class="font-semibold text-gray-800">Network Scanner</h3>
								</div>
								<p class="text-sm text-gray-600 mb-3">Comprehensive network vulnerability scanner and port analyzer</p>
								<div class="flex items-center justify-between">
									<span class="text-xs text-gray-500">Downloads: 856</span>
									<button class="btn btn-sm btn-primary">Download</button>
								</div>
							</div>

							<!-- Tool Card 3 -->
							<div class="bg-white rounded-lg shadow-sm p-4 border-l-4 border-green-500 hover:shadow-md transition-shadow">
								<div class="flex items-center mb-3">
									<div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
										💉
									</div>
									<h3 class="font-semibold text-gray-800">SQL Injector</h3>
								</div>
								<p class="text-sm text-gray-600 mb-3">Automated SQL injection testing and exploitation framework</p>
								<div class="flex items-center justify-between">
									<span class="text-xs text-gray-500">Downloads: 2.1k</span>
									<button class="btn btn-sm btn-primary">Download</button>
								</div>
							</div>

							<!-- Tool Card 4 -->
							<div class="bg-white rounded-lg shadow-sm p-4 border-l-4 border-purple-500 hover:shadow-md transition-shadow">
								<div class="flex items-center mb-3">
									<div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
										🎣
									</div>
									<h3 class="font-semibold text-gray-800">Phishing Kit</h3>
								</div>
								<p class="text-sm text-gray-600 mb-3">Complete phishing simulation toolkit for security awareness</p>
								<div class="flex items-center justify-between">
									<span class="text-xs text-gray-500">Downloads: 743</span>
									<button class="btn btn-sm btn-primary">Download</button>
								</div>
							</div>

							<!-- Tool Card 5 -->
							<div class="bg-white rounded-lg shadow-sm p-4 border-l-4 border-orange-500 hover:shadow-md transition-shadow">
								<div class="flex items-center mb-3">
									<div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
										🦠
									</div>
									<h3 class="font-semibold text-gray-800">Malware Analyzer</h3>
								</div>
								<p class="text-sm text-gray-600 mb-3">Advanced malware analysis and reverse engineering tools</p>
								<div class="flex items-center justify-between">
									<span class="text-xs text-gray-500">Downloads: 567</span>
									<button class="btn btn-sm btn-primary">Download</button>
								</div>
							</div>

							<!-- Tool Card 6 -->
							<div class="bg-white rounded-lg shadow-sm p-4 border-l-4 border-teal-500 hover:shadow-md transition-shadow">
								<div class="flex items-center mb-3">
									<div class="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
										🛡️
									</div>
									<h3 class="font-semibold text-gray-800">Firewall Bypass</h3>
								</div>
								<p class="text-sm text-gray-600 mb-3">Advanced firewall evasion and penetration testing suite</p>
								<div class="flex items-center justify-between">
									<span class="text-xs text-gray-500">Downloads: 1.8k</span>
									<button class="btn btn-sm btn-primary">Download</button>
								</div>
							</div>
						</div>

						<!-- Security Notice -->
						<div class="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
							<div class="flex items-center">
								<svg class="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
								</svg>
								<h3 class="font-semibold text-yellow-800">Security Notice</h3>
							</div>
							<p class="text-sm text-yellow-700 mt-2">
								These tools are for educational and authorized security testing purposes only. 
								Always ensure you have proper authorization before testing any system.
							</p>
						</div>
					</div>
				</div>
			</div>
		{/if}

		<div class="absolute right-6 bottom-24 z-50 flex w-80 flex-col gap-2">
			{#each currentAlerts as alert (alert.id)}
				<div class="relative alert alert-info shadow-lg">
					<span>{alert.text}</span>
					<button
						class="absolute top-1 right-2 text-sm text-gray-700 hover:text-black"
						onclick={() => closeAlert(alert.id)}
					>
						✕
					</button>
				</div>
			{/each}
		</div>

		<!-- Welcome message when no windows are open -->
		{#if !showTerminal && !showPhone && !showBrowser}
			<div class="flex h-full items-center justify-center">
				<div class="text-center text-white/80">
					<div class="mb-4 text-4xl">🛡️</div>
					<div class="mb-2 text-2xl font-bold">Welcome to CyberShield Africa</div>
					<div class="mb-6 text-lg">
						Your interactive cybersecurity learning journey starts here
					</div>
					<div class="text-sm opacity-70">
						Click the buttons on the left to open different tools and begin learning
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
