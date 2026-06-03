<script>
  import "../../styles/components/Experience.css";
  import { getExperiences } from "../data/experience.js";

  const experiences = getExperiences();
</script>

<section class="experience-section" id="experience">
  <h1 class="experience-heading">
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="50"
  height="50"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#FFFFFF"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-label="Experience icon"
  role="img"
>
  <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9" />
  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
  <path d="M12 12l0 .01" />
  <path d="M3 13a20 20 0 0 0 18 0" />
</svg>
My <span class="text-accent">Experience</span>
  </h1>

  <div id="experience-grid">
    {#each experiences as exp}
      <button>
        <div class="exp-card">
          <img
            src={exp.icon}
            alt={exp.title}
            class="exp-card-icon"
            width="110"
            height="110"
            loading="lazy"
            decoding="async"
          />
          <div class="exp-card-body">
            <h2 class="exp-card-title">{exp.title}</h2>
            <p class="exp-card-desc">{exp.desc}</p>
          </div>
        </div>
      </button>
    {/each}
  </div>
</section>