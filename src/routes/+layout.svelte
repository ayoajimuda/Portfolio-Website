<script>
	import './layout.css';
	import "$lib/../styles/global.css";
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();
	let scrollY = $state(0);
	let innerHeight = $state(0);
	let innerWidth = $state(0);

	function goTop() {
		document.body.scrollIntoView();
	}
</script>

<svelte:head>
	<meta charset="UTF-8" />

	<meta
		name="viewport"
		content="width=device-width, initial-scale=1.0"
	/>

	<title>Ayomide Ajimuda | CS Student Portfolio</title>

	<meta
		name="description"
		content="My name is Ayomide Ajimuda, an aspiring Software Engineer & Data Analyst; this is my portfolio displaying my skills, projects & competences"
	/>

	<meta
		name="keywords"
		content="Ayomide Ajimuda, portfolio, student, web development, applications, project"
	/>

	<meta name="author" content="Ayomide Ajimuda" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://ayoajimuda.com/" />

	<meta
		property="og:title"
		content="Ayomide Ajimuda's Portfolio | CS Student"
	/>

	<meta
		property="og:description"
		content="My name is Ayomide Ajimuda, an aspiring Software Engineer & Data Analyst; this is my portfolio displaying my skills, projects & competences"
	/>

	<meta
		property="og:url"
		content="https://ayoajimuda.com/"
	/>

	<meta property="og:type" content="website" />

	<link
		rel="preconnect"
		href="https://fonts.googleapis.com"
	/>

	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
	/>

	<link
		href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Pixelify+Sans:wght@400..700&family=VT323&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div id="app-mount">{@render children()}</div>
