<script>
  import { onMount } from 'svelte';
import "../../styles/layout/layout.css";
  import '../../styles/routes/projects-page/projects-page.css';
</script>

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

