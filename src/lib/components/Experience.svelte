<script>
  import "../../styles/components/Experience.css";
  import { getExperiences } from "../data/experience.js";

  const experiences = getExperiences();
</script>

<section class="experience-section" id="experience">
  <h1 class="experience-heading">
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