<script>
  import { onMount } from 'svelte';
  import '../../styles/routes/projects-page/page-layout.css'
  import '../../styles/routes/projects-page/projects-page.css';

  onMount(async () => {
    const { init } = await import('./projects.js');
    init();
  });
</script>

<svelte:head>
  <title>Projects — Ayomide Ajimuda</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <link href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Pixelify+Sans:wght@400..700&family=VT323&display=swap" rel="stylesheet" />
</svelte:head>

  <a class="back-link" href="/" aria-label="Back to home">
    <i class="fa-solid fa-arrow-left" aria-hidden="true"></i><span>Welcome</span>
  </a>

  <header class="page-header container">
    <h1 class="title">Personal Experiments</h1>
    <p class="subtitle">List of all personal projects & achievements.</p>

    <div class="toolbar">
      <div class="filters" id="filters" role="tablist" aria-label="Category Filter">
      </div>

      <div class="tools">
        <label class="sr-only" for="q">Search</label>
        <input id="q" class="search" type="search" placeholder="Search for a project" autocomplete="off" />
        <select id="sort" class="sort" aria-label="Project Sort">
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
    <section id="grid" class="grid" aria-live="polite">
    </section>
  </main>

    <dialog id="videoModal" class="modal" aria-label="Démonstration vidéo">
    <button class="modal-close" id="closeModal" aria-label="Fermer la vidéo">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <h2 class="modal-title" id="modalTitle"></h2>
    <video id="modalVideo" controls playsinline preload="metadata"></video>
  </dialog>

