<script>
  import { onMount } from 'svelte';
  import FallingPattern from '$lib/components/FallingPattern.svelte';
  import '../../styles/routes/projects-page/projects-page.css';

  let projects = $state([]);
  let activeCat = $state('all');
  let q = $state('');
  let sort = $state('id-asc');
  let loading = $state(true);
  let error = $state(false);

  let dialogEl = $state(null);
  let videoEl = $state(null);
  let modalVideoTitle = $state('');
  let modalVideoSrc = $state('');

  let categories = $derived.by(() => {
    const cats = new Set();
    projects.forEach(p => (p.category || []).forEach(c => cats.add(c)));
    return ['all', ...[...cats].sort((a, b) => a.localeCompare(b))];
  });

  let filtered = $derived.by(() => {
    const search = q.trim().toLowerCase();
    let list = projects.filter(p => {
      const catOk = activeCat === 'all' || (p.category || []).includes(activeCat);
      if (!catOk) return false;
      if (!search) return true;
      const hay = `${p.title} ${p.description || ''} ${(p.stack || []).join(' ')}`.toLowerCase();
      return hay.includes(search);
    });

    const sorted = [...list];
    switch (sort) {
      case 'id-desc':  sorted.sort((a, b) => String(b.id).localeCompare(String(a.id), undefined, { numeric: true })); break;
      case 'title-asc': sorted.sort((a, b) => a.title.localeCompare(b.title)); break;
      case 'title-desc': sorted.sort((a, b) => b.title.localeCompare(a.title)); break;
      case 'status':
        sorted.sort((a, b) => {
          const aDone = a.status?.toLowerCase().includes('finished') ? 0 : 1;
          const bDone = b.status?.toLowerCase().includes('finished') ? 0 : 1;
          return aDone - bDone || a.title.localeCompare(b.title);
        });
        break;
      default: sorted.sort((a, b) => String(a.id).localeCompare(String(b.id), undefined, { numeric: true }));
    }
    return sorted;
  });

  function openVideo(src, title) {
    modalVideoSrc = src;
    modalVideoTitle = title;
    if (dialogEl?.showModal) dialogEl.showModal();
  }

  function closeVideo() {
    if (videoEl) { videoEl.pause(); videoEl.src = ''; }
    if (dialogEl?.close) dialogEl.close();
  }

  onMount(async () => {
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeVideo(); });
    try {
      const r = await fetch('/data/projects.json');
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      projects = await r.json();
    } catch (err) {
      console.error('Error loading projects:', err);
      error = true;
    } finally {
      loading = false;
    }
  });
</script>

<svelte:head>
  <title>Projects — Ayomide Ajimuda</title>
  <meta name="description" content="All my projects with filters and links." />
  <meta name="author" content="Ayomide Ajimuda" />
  <meta name="robots" content="index, follow" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <link href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Pixelify+Sans:wght@400..700&family=VT323&display=swap" rel="stylesheet" />
</svelte:head>

<div class="background-layer">
  <FallingPattern
    color="#FF2E2E"
    backgroundColor="#000000"
    duration={80}
    blurIntensity="0.1rem"
    density={1}
  />
</div>

<div class="content-layer">
  <a class="back-link" href="/" aria-label="Back to home">
    <i class="fa-solid fa-arrow-left" aria-hidden="true"></i><span>Welcome</span>
  </a>

  <header class="page-header container">
    <h1 class="title">Personal Experiments</h1>
    <p class="subtitle">List of all personal projects & achievements.</p>

    <div class="toolbar">
      <div class="filters" role="tablist" aria-label="Category Filter">
        {#each categories as cat}
          <button
            class="filter-btn"
            type="button"
            role="tab"
            aria-selected={cat === activeCat}
            onclick={() => activeCat = cat}
          >
            {cat === 'all' ? 'All' : cat}
          </button>
        {/each}
      </div>

      <div class="tools">
        <label class="sr-only" for="q">Search</label>
        <input id="q" class="search" type="search" placeholder="Search for a project"
               autocomplete="off" bind:value={q} />
        <select id="sort" class="sort" aria-label="Project Sort" bind:value={sort}>
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
    {#if loading}
      <p class="loading-msg">Loading projects...</p>
    {:else if error}
      <p>Unable to load projects.</p>
    {:else}
      <section class="grid" aria-live="polite">
        {#each filtered as p (p.id)}
          {@const done = p.status?.toLowerCase().includes('finished')}
          <article class="card">
            <div class="card__media">
              {#if p.image}
                <img src={p.image} alt={p.title} loading="lazy" />
              {/if}
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
                  <button class="icon-btn" onclick={() => openVideo(p.video, p.title)} aria-label="Watch video">
                    <i class="fa-solid fa-play"></i>
                  </button>
                {/if}
                {#if p.links?.github}
                  <a class="icon-btn" href={p.links.github} target="_blank" rel="noopener" aria-label="View on GitHub">
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

  <dialog bind:this={dialogEl} class="modal" aria-label="Video demo"
    onclick={(e) => {
      const rect = dialogEl.getBoundingClientRect();
      if (e.clientX < rect.left || e.clientX > rect.right ||
          e.clientY < rect.top  || e.clientY > rect.bottom) closeVideo();
    }}>
    <button class="modal-close" onclick={closeVideo} aria-label="Close">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <h2 class="modal-title">{modalVideoTitle}</h2>
  </dialog>
</div>