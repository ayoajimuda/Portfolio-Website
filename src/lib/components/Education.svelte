<script>
  import { onMount } from "svelte";
  import "../../styles/components/Education.css";
</script>

<!-- Education Timeline (Horizontal) -->
<section class="timeline-action" id="timeline">
  <h2 class="education-heading">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="58"
      height="58"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path
        d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
      />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
      Education
  </h2>
  <div class="timeline-wrap">
    <article class="t-entry">
      <img src="#" alt="BCU Logo" />
      <p class="t-date">2024 - 2027</p>
      <h3 class="t-title">BSc Computer Science</h3>
      <p class="t-org">Birmingham City University | Birmingham, UK</p>
      <p class="t-desc">Acquired a degree in Computer Science</p>
      <p class="t-results">3.5 GPA</p>
    </article>

    <article class="t-entry">
      <img src="#" alt="Cadbury College Logo" />
      <p class="t-date">2023 - 2024</p>
      <h3 class="t-title">A Levels</h3>
      <p class="t-org">Cadbury College | Birmingham, UK</p>
      <p class="t-desc">Studied 3D Design, Electronics, Computer Science</p>
      <p class="t-results">3.5 GPA</p>
    </article>

    <article class="t-entry">
      <img src="#" alt="Grace High School Logo" />
      <p class="t-date">2017 - 2022</p>
      <h3 class="t-title">WAEC / GCSE</h3>
      <p class="t-org">Grace High School | Nigeria</p>
      <p class="t-desc">Studied basic high school subjects</p>
      <p class="t-results">3.5 GPA</p>
    </article>
  </div>
</section>
