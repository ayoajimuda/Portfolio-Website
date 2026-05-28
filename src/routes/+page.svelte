<script>
    import Header from '../lib/components/Header.svelte';
    import Bio from '../lib/components/Bio.svelte'
    import Education from '../lib/components/Education.svelte';
    import Skills from '../lib/components/Skills.svelte';
    import Projects from '../lib/components/Projects.svelte';
    import Journey from '../lib/components/Journey.svelte';
    import Contact from '../lib/components/Contact.svelte';
    import Footer from '../lib/components/Footer.svelte'
</script>

<svelte:head>
<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ayomide Ajimuda | CS Student Portfolio</title>

  <meta name="description" content="My name is Ayomide Ajimuda, an aspiring Software Engineer & Data Analyst; this is my portfolio displaying my skills, projects & competences">
  <meta name="keywords" content="Ayomide Ajimuda, portfolio, student, web development, applications, project">
  <meta name="author" content="Ayomide Ajimuda">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://ayoajimuda.com/">

  <meta property="og:title" content="Ayomide Ajimuda's Portfolio | CS Student">
  <meta property="og:description" content="My name is Ayomide Ajimuda, an aspiring Software Engineer & Data Analyst; this is my portfolio displaying my skills, projects & competences">
  <meta property="og:url" content="https://ayoajimuda.com/">
  <meta property="og:type" content="website">
</svelte:head>

<Header/>

<main>
    <Bio/>
    <Education/>
    <Skills/>
    <Projects/>
    <Journey/>
    <Contact/>
</main>

<Footer/>

<style>
    main {
    display: flex;
    flex-direction: column;
  } 
</style>
