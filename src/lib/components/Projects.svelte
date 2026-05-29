<script>
  import '../../styles/components/Projects.css';
  import {
    CARDS_PER_VIEW,
    loadProjects,
    getTotalSlides,
    navigateTo,
    getThumbWidthPct,
    getThumbOffsetPct,
    getTranslatePct,
    startDrag,
    moveDrag,
    endDrag,
  } from '../data/projects.js';

  // ── State ──────────────────────────────────────────────────────────────────
  let projects     = $state([]);
  let currentIndex = $state(0);
  let dragState    = $state({ isDragging: false, dragStartX: 0, dragStartIndex: 0 });
  let trackEl      = $state(null);

  // ── Derived ────────────────────────────────────────────────────────────────
  let totalSlides    = $derived(getTotalSlides(projects.length, CARDS_PER_VIEW));
  let clampedIndex   = $derived(navigateTo(currentIndex, totalSlides));
  let thumbWidthPct  = $derived(getThumbWidthPct(totalSlides));
  let thumbOffsetPct = $derived(getThumbOffsetPct(clampedIndex, totalSlides, thumbWidthPct));
  let translatePct   = $derived(getTranslatePct(clampedIndex, CARDS_PER_VIEW));

  $effect(() => {
    loadProjects('/src/lib/data/projects.json')
      .then(data => { projects = data; })
      .catch(err => console.error(err));
  });

  function goTo(index) {
    currentIndex = navigateTo(index, totalSlides);
  }

  function onThumbPointerDown(e) {
    dragState = startDrag(e, clampedIndex);
  }

  function onThumbPointerMove(e) {
    currentIndex = moveDrag(e, dragState, trackEl, totalSlides, currentIndex);
  }

  function onThumbPointerUp(e) {
    dragState = endDrag(e);
  }
</script>

<section class="projects-section" id="projects">
  <h2 class="section-heading">Personal Experiments</h2>

  <!-- ── Carousel viewport ── -->
  <div class="projects-viewport">
    <div
      class="projects-track"
      style="transform: translateX(-{translatePct}%)"
    >
      {#each projects as project (project.id)}
        <div class="projects-card">

          <!-- Action buttons -->
          <div class="projects-actions">
            {#if project.links?.demo}
              <a
                class="projects-icon-btn"
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
              >
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            {/if}

            {#if project.links?.github}
              <a
                class="projects-icon-btn"
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            {/if}
          </div>

          <!-- Preview image -->
          <div class="projects-preview">
            {#if project.image}
              <img src={project.image} alt="{project.title} preview" />
            {:else}
              <div class="projects-preview-placeholder">
                <i class="fa-regular fa-image"></i>
                <span>No preview</span>
              </div>
            {/if}
          </div>

          <!-- Stack + description -->
          <div class="projects-info">
            <div class="projects-stack-col">
              {#each project.stack as tech}
                <span class="projects-stack-badge">{tech}</span>
              {/each}
            </div>

            <p class="projects-desc">{project.description}</p>
          </div>

        </div>
      {/each}
    </div>
  </div>

  <!-- ── Custom scrollbar ── -->
  <div class="projects-scrollbar-wrap">
    <div class="projects-scrollbar-track" bind:this={trackEl}>
      <div
        class="projects-scrollbar-thumb"
        style="width: {thumbWidthPct}%; left: {thumbOffsetPct}%"
        role="scrollbar"
        aria-controls="projects-track"
        aria-valuenow={clampedIndex}
        aria-valuemin={0}
        aria-valuemax={totalSlides - 1}
        aria-label="Projects carousel scrollbar"
        tabindex="0"
        onpointerdown={onThumbPointerDown}
        onpointermove={onThumbPointerMove}
        onpointerup={onThumbPointerUp}
        onpointercancel={onThumbPointerUp}
      ></div>
    </div>
  </div>

  <!-- ── Dot indicators ── -->
  <div class="projects-dots">
    {#each Array(totalSlides) as _, i}
      <button
        class="projects-dot {i === clampedIndex ? 'active' : ''}"
        aria-label="Go to slide {i + 1}"
        onclick={() => goTo(i)}
      ></button>
    {/each}
  </div>

  <!-- ── CTA ── -->
  <div class="projects-cta-wrap">
    <a class="projects-cta" href="./html/projects.html">
      To see all of my projects <i class="fa-solid fa-arrow-right"></i>
    </a>
  </div>
</section>