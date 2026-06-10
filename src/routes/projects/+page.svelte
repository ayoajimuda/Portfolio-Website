<script>
  import FallingPattern from '$lib/components/FallingPattern.svelte';
  import '../../styles/global.css';
  import { createStore } from './projects.svelte.js'
  import '../../styles/routes/projects-page/projects-page.css';

 const s = createStore();
</script>

<style>
  :global(html), :global(body) {
    margin: 0;
    padding: 0;
    background: #000;
  }

  :global(.pg-bg) {
    position: fixed;
    inset: 0;
    z-index: 0;
    background: #000;
  }

  :global(.pg-wrap) {
    position: relative;
    z-index: 1;
    min-height: 100vh;
  }

  /* Lock header into normal flow — cannot be overridden */
  :global(.page-header) {
    position: static !important;
    display: block !important;
    background-color: transparent;
  }

  :global(.toolbar) {
    display: grid !important;
    grid-template-columns: 1fr !important;
    gap: 12px;
    padding: 12px 0;
  }

  @media (min-width: 760px) {
    :global(.toolbar) {
      grid-template-columns: 1fr auto !important;
    }
  }

  :global(.filters) {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 10px;
  }

  :global(.grid) {
    display: grid !important;
    gap: 16px;
    padding-block: 20px 48px;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }

  :global(.container) {
    max-width: min(1200px, calc(100% - 80px));
    margin-inline: auto;
  }
</style>

<svelte:head>
  <title>Projects — Ayomide Ajimuda</title>
  <meta name="description" content="All my projects with filters and links." />
  <meta name="author" content="Ayomide Ajimuda" />
  <meta name="robots" content="index, follow" />
  <link rel="preload" href="/fonts/DepartureMono-1.500/DepartureMono-Regular.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <link href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Pixelify+Sans:wght@400..700&family=VT323&display=swap" rel="stylesheet" />
</svelte:head>

<div class="pg-bg">
  <FallingPattern color="#FF2E2E" backgroundColor="#000000" duration={80} blurIntensity="0.1rem" density={1} />
</div>

<div class="pg-wrap" style="display:{s.ready ? 'block' : 'none'}">

  <a class="back-link" href="/" aria-label="Back to home">
    <i class="fa-solid fa-arrow-left" aria-hidden="true"></i><span>Welcome</span>
  </a>

  <header class="page-header container">
    <h1 class="title">Personal Experiments</h1>
    <p class="subtitle">List of all personal projects &amp; achievements.</p>
    <div class="toolbar">
      <div class="filters" role="tablist" aria-label="Category Filter">
        {#each s.categories as cat}
          <button class="filter-btn" type="button" role="tab"
            aria-selected={cat === s.activeCat}
            onclick={() => s.activeCat = cat}>
            {cat === 'all' ? 'All' : cat}
          </button>
        {/each}
      </div>
      <div class="tools">
        <label class="sr-only" for="q">Search</label>
        <input id="q" class="search" type="search"
          placeholder="Search for a project" autocomplete="off"
          bind:value={s.q} />
        <select id="sort" class="sort" aria-label="Project Sort" bind:value={s.sort}>
          <option value="id-asc"># ascending</option>
          <option value="id-desc"># descending</option>
          <option value="title-asc">Title A→Z</option>
          <option value="title-desc">Title Z→A</option>
          <option value="status">Status (Completed)</option>
        </select>
      </div>
    </div>
  </header>

  <main class="container">
    {#if s.error}
      <p style="color:#fff;padding:2rem 0">Unable to load projects.</p>
    {:else}
      <section class="grid" aria-live="polite">
        {#each s.filtered as p (p.id)}
          {@const done = p.status?.toLowerCase().includes('finished')}
          <article class="card">
            <div class="card__media">
              {#if p.image}<img src={p.image} alt={p.title} loading="lazy" />{/if}
            </div>
            <div class="card__body">
              <h3 class="card__title">{p.id}. {p.title}</h3>
              <p class="card__desc">{p.description || ''}</p>
              <div class="tags">
                {#each (p.stack || []) as tag}
                  <span class="tag">{tag}</span>
                {/each}
              </div>
            </div>
            <div class="card__footer">
              <span class="status">
                <span class="dot {done ? 'dot--done' : 'dot--progress'}"></span>
                {p.status || ''}
              </span>
              <span class="links">
                {#if p.links?.demo}
                  <a class="icon-btn" href={p.links.demo} target="_blank" rel="noopener" aria-label="View demo">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                {:else if p.video}
                  <button class="icon-btn" onclick={() => s.openVideo(p.video, p.title)} aria-label="Watch video">
                    <i class="fa-solid fa-play"></i>
                  </button>
                {/if}
                {#if p.links?.github}
                  <a class="icon-btn" href={p.links.github} target="_blank" rel="noopener" aria-label="GitHub">
                    <i class="fa-brands fa-github"></i>
                  </a>
                {/if}
              </span>
            </div>
          </article>
        {/each}
      </section>
    {/if}
  </main>

  <dialog bind:this={s.dialogEl} class="modal"
    onclick={e => {
      const r = s.dialogEl.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
        s.closeVideo();
    }}>
    <button class="modal-close" onclick={s.closeVideo} aria-label="Close">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <h2 class="modal-title">{s.modalVideoTitle}</h2>
    <video bind:this={s.videoEl} src={s.modalVideoSrc} controls playsinline preload="metadata"></video>
  </dialog>
</div>

