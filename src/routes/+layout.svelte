<script>
  import '$lib/../styles/global.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();

  let scrollY = $state(0);
  let innerHeight = $state(0);
  let innerWidth = $state(0);

  function goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<svelte:window
  bind:scrollY
  bind:innerHeight
  bind:innerWidth
/>

<svelte:head>
  <link rel="icon" href="../src/lib/assets/favicon.svg" />
</svelte:head>

<div class="app-wrap">
  <button class="go-top" onclick={goTop} aria-label="Back to top">
    <i class="fa-solid fa-arrow-up"></i>
  </button>

  <Header />

  {@render children()}

  <Footer />
</div>