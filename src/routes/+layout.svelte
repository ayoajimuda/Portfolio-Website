<script>
  import "../styles/layout/layout.css";
import Header from "$lib/components/Header.svelte";
import Footer from "$lib/components/Footer.svelte";
import FallingPattern from "$lib/components/FallingPattern.svelte";

  let { children } = $props();
  let scrollY = $state(0);

</script>

<svelte:window bind:scrollY />

<svelte:head>
  <title>Ayomide Ajimuda</title>
  <meta name="description" content="..." />
  <meta name="keywords" content="..." />
  <meta name="author" content="Ayomide Ajimuda" />
  <meta name="robots" content="index, follow" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <link href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Pixelify+Sans:wght@400..700&family=VT323&display=swap" rel="stylesheet" />
</svelte:head>

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