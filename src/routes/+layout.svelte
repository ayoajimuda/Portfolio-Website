<script>
  import "../app.css";
  import "../styles/routes/layout.css";
  import "../styles/global.css";
  import FallingPattern from "../lib/components/FallingPattern.svelte";
  import Header from "../lib/components/Header.svelte";
  import Footer from "../lib/components/Footer.svelte";

  let { children } = $props();
  let scrollY = $state(0);
  let innerHeight = $state(0);
  let innerWidth = $state(0);

  function goTop() {
    document.body.scrollIntoView({ behavior: "smooth" });
  }
</script>

<svelte:window bind:scrollY bind:innerHeight bind:innerWidth />

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
  <meta property="og:url" content="https://ayoajimuda.com/" />
  <meta property="og:type" content="website" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Pixelify+Sans:wght@400..700&family=VT323&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<svelte:body/>

<div class="background-layer">
  <FallingPattern
    color="#FF2E2E"
    backgroundColor="var(--background, #0a0a0a)"
    duration={80}
    blurIntensity="0.1rem"
    density={1}
  />
</div>

<div class="content-layer" id="app-mount">
  <Header />
  {@render children()}
  <Footer />
</div>

<style>
  :global(body) {
    margin: 0;
    background-color: var(--background, #0a0a0a);
  }

  /* Fixed background that stays behind everything */
  .background-layer {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }

  /*
	  Radial mask that fades the pattern toward the edges —
	  matches the demo's [mask-image:radial-gradient(ellipse_at_center,...)] class.
	*/
  :global(.mask-radial) {
    -webkit-mask-image: radial-gradient(
      ellipse at center,
      transparent 0%,
      var(--background, #0a0a0a) 80%
    );
    mask-image: radial-gradient(
      ellipse at center,
      transparent 0%,
      var(--background, #0a0a0a) 80%
    );
  }

  /* Scrollable content sits above the fixed background */
  .content-layer {
    position: relative;
    z-index: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }


</style>
