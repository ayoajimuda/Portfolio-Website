<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '../lib/components/Header.svelte'
  	import Footer from '../lib/components/Footer.svelte';

	let y;
	let innerHeight = 0
	let innerWidth = 0

	function goTop() {
		document.body.scrollIntoView()
	}

	let { children } = $props();
</script>

<div class="relative flex flex-column max-w-1400px mx-auto w-full text-base sm: min-h-screen">
	<div class="">
		<button>
			<i class="aria-label"/>
		</button>
	</div>
	<Header/>
	<Bio/>
	
	<slot/>
	<Footer/>
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth

{@render children()}
