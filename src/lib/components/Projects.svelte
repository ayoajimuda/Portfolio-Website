<script>
  import { onMount } from "svelte";
  import {
    pickRandomProjects,
    scrollToCard,
    getClosestCardIndex,
  } from "../data/projects.js";
  import "../../styles/components/Projects.css";

  let slideEl = $state(null);
  let selectedProjects = $state([]);
  let activeIndex = $state(0);

  let showModal = $state(false);
  let modalVideoSrc = $state("");
  let modalTitle = $state("");

  function openModal(src, title) {
    modalVideoSrc = src;
    modalTitle = title;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
    modalVideoSrc = "";
    modalTitle = "";
  }

  function handleScrollToCard(index) {
    activeIndex = index;
    scrollToCard(slideEl, index);
  }

  function handleScroll() {
    activeIndex = getClosestCardIndex(slideEl);
  }

  onMount(() => {
    selectedProjects = pickRandomProjects();
  });
</script>

<section class="projects" id="projects" aria-label="Projects">
  <h1 class="projects-heading">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 23 23"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path
        d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
      />
    </svg>
    Personal <span class="text-accent">Experiments</span>
  </h1>

  <div class="projects-slide" bind:this={slideEl} onscroll={handleScroll}>
    {#each selectedProjects as proj (proj.id)}
      <div class="projects-card">
        <!-- Icon buttons (visually hoisted to the top via order: -1 in CSS) -->
        <div class="projects-links">
          {#if proj.links?.demo && proj.links.demo !== "#"}
            <a
              class="projects-link-btn"
              href={proj.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open live demo for {proj.title}"
            >
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          {:else if proj.video}
            <button
              aria-label="Watch demo video for {proj.title}"
              onclick={() => openModal(proj.video, proj.title)}
            >
              <i class="fa-solid fa-play"></i>
            </button>
          {/if}

          {#if proj.links?.github}
            <a
              class="projects-link-btn"
              href={proj.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View {proj.title} on GitHub"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          {/if}
        </div>

        <!-- Screenshot / thumbnail -->
        <div class="projects-img">
          <img src={proj.image} alt={proj.title} />
        </div>

        <!-- Stack tags + description text -->
        <div class="projects-description">
          <div class="projects-stack">
            {#each proj.stack as tech}
              <p><strong>{tech}</strong></p>
            {/each}
          </div>
          <div class="projects-text">
            <p>{proj.description}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="pagination" role="tablist" aria-label="Project navigation">
    {#each selectedProjects as proj, i}
      <div
        class="pagination-cube"
        class:active={i === activeIndex}
        role="tab"
        aria-label="Go to project {i + 1}: {proj.title}"
        aria-selected={i === activeIndex}
        tabindex="0"
        onclick={() => handleScrollToCard(i)}
        onkeydown={(e) =>
          (e.key === "Enter" || e.key === " ") && handleScrollToCard(i)}
      ></div>
    {/each}
  </div>

  <!-- "See all projects" CTA -->
  <a class="bouton-all-projects" href="/projets">
    <p>To see all my projects</p>
    <i class="fa-solid fa-arrow-right"></i>
  </a>
</section>

{#if showModal}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="modal-overlay"
    role="dialog"
    aria-modal="true"
    aria-label="Video demo: {modalTitle}"
    onclick={(e) => {
      if (e.target === e.currentTarget) closeModal();
    }}
    onkeydown={(e) => e.key === "Escape" && closeModal()}
    tabindex="-1"
  >
    <div class="modal-content">
      <div class="modal-header">
        <h3>{modalTitle}</h3>
        <button
          class="modal-close"
          aria-label="Close video modal"
          onclick={closeModal}
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <video src={modalVideoSrc} controls autoplay>
        <track kind="captions" />
      </video>
    </div>
  </div>
{/if}
