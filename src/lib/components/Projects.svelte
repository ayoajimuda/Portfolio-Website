<script>
    import {onMount} from 'svelte'
    import '../../styles/components/Projects.css'
</script>

    <section class="projects-section" id="projects">
      <h2 class="section-heading">Personal Expirements</h2>

      <div class="projects-viewport">
        <div class="projects-track" id="projects-track"></div>
      </div>

      <div class="projects-scrollbar-wrap">
        <div class="projects-scrollbar-track" id="projects-sb-track">
          <div class="projects-scrollbar-thumb" id="projects-sb-thumb"></div>
        </div>
      </div>

      <div class="projects-dots" id="projects-dots"></div>

      <div class="projects-cta-wrap">
        <a class="projects-cta" href="./html/projects.html">
          To see all of my projects <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </section>
