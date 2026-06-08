<script>
  import { onMount } from "svelte";
  import { getExperiences } from "../lib/scripts/experience.js";
  import { loadJourney } from "../lib/scripts/journey.js";
  import { pickRandomProjects, scrollToCard, getClosestCardIndex } from "../lib/scripts/projects.js";

  import "../styles/routes/main-page/bio.css"
  import "../styles/routes/main-page/education.css"
  import "../styles/routes/main-page/skills.css"
  import "../styles/routes/main-page/projects.css"
  import "../styles/routes/main-page/experience.css"
  import "../styles/routes/main-page/journey.css"

  const experiences = getExperiences();

  let entries = $state([]);

  $effect(() => {
    loadJourney("/src/lib/data/journey.json")
      .then((data) => {
        entries = data;
      })
      .catch((err) => console.error(err));
  });

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

<main>
  <!-- Bio Section-->
  <section id="main" class="page-active" aria-label="Bio">
    <div class="hero-wrap">
      <div>
        <p class="hero-subtitle">Aspiring Software Engineer</p>
        <h1 class="hero-hello">Hello I'm</h1>
        <h1 class="hero-name">Ayomide<br />Ajimuda<br /> Akinkunmi</h1>
        <p class="hero-description">
          IT Specialist &amp; Full-Stack Developer | Pragmatic,<br />
          delivery-oriented | Birmingham City University | UK
        </p>
        <div class="hero-actions">
          <button class="hero-cv-btn">VIEW CV &rsaquo;</button>
          <div class="social-links">
            <div class="hero-social-icon">
              <a
                href="https://www.instagram.com/ajims.archives/"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
              >
                <i class="ti ti-brand-instagram" aria-hidden="true"></i>
              </a>
            </div>
            <div class="hero-social-icon">
              <i class="ti ti-brand-youtube" aria-hidden="true"></i>
            </div>
            <div class="hero-social-icon">
              <a
                href="https://linkedin.com/in/ayomide-ajimuda"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <i class="ti ti-brand-linkedin" aria-hidden="true"></i>
              </a>
            </div>
            <div class="hero-social-icon">
              <a
                href="https://github.com/AZAZ3LTRON"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
              >
                <i class="ti ti-brand-github" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-avatar-wrap">
        <div class="hero-avatar-ring">
          <svg
            class="hero-dashes"
            viewBox="0 0 460 460"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle
              cx="230"
              cy="230"
              r="227"
              fill="none"
              stroke="#e03030"
              stroke-width="7.5"
              stroke-dasharray="32 5 0 14 5 4 5 0 5 6 5"
              stroke-linecap="round"
            />
          </svg>
          <div class="hero-avatar-inner">
            <img src="/assets/img/personal-photo.png" alt="Ayomide Ajimuda" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120 120"
              aria-hidden="true"
            >
              <ellipse cx="60" cy="72" rx="28" ry="20" fill="#1a1a1a" />
              <circle cx="60" cy="48" r="22" fill="#f0e8d8" />
              <ellipse
                cx="60"
                cy="46"
                rx="14"
                ry="10"
                fill="#2a1a0a"
                opacity="0.85"
              />
              <circle cx="53" cy="50" r="5" fill="#fff" />
              <circle cx="67" cy="50" r="5" fill="#fff" />
              <circle cx="54" cy="51" r="2.5" fill="#1a1a1a" />
              <circle cx="68" cy="51" r="2.5" fill="#1a1a1a" />
              <path
                d="M55 60 Q60 64 65 60"
                stroke="#888"
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
              />
              <ellipse cx="60" cy="90" rx="26" ry="14" fill="#111" />
              <path d="M34 90 Q60 78 86 90" fill="#1a1a1a" />
              <rect x="10" y="55" width="6" height="24" rx="3" fill="#f0e8d8" />
              <rect
                x="104"
                y="55"
                width="6"
                height="24"
                rx="3"
                fill="#f0e8d8"
              />
              <path
                d="M38 30 Q45 14 60 18 Q75 14 82 30 Q74 22 60 24 Q46 22 38 30Z"
                fill="#1a1a1a"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="info-row">
      <div class="hero-stat">
        <span class="hero-stat-num">20</span>
        <span class="hero-stat-lbl">Age</span>
      </div>
      <div class="hero-stat">
        <span class="hero-stat-num">1+</span>
        <span class="hero-stat-lbl">Years of<br />experience</span>
      </div>
      <div class="hero-stat">
        <span class="hero-stat-num">5</span>
        <span class="hero-stat-lbl">Projects<br />worked on</span>
      </div>
      <div class="hero-stat">
        <span class="hero-stat-num">1</span>
        <span class="hero-stat-lbl">Projects<br />Deployed</span>
      </div>
    </div>
  </section>

  <!--Education Section-->
  <section class="timeline-action" id="education" aria-label="Education">
    <h1 class="education-heading">
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
    </h1>
    <div class="timeline-wrap">
      <article class="t-entry">
        <img src="/assets/img/bcu-logo.jpg" alt="BCU Logo" />
        <p class="t-date">2024 - 2027</p>
        <h3 class="t-title">BSc Computer Science</h3>
        <p class="t-org">Birmingham City University | Birmingham, UK</p>
        <p class="t-desc">Acquired a degree in Computer Science</p>
        <p class="t-results">3.5 GPA</p>
      </article>

      <article class="t-entry">
        <img src="assets/img/cadbury-logo.jpg" alt="Cadbury College Logo" />
        <p class="t-date">2023 - 2024</p>
        <h3 class="t-title">A Levels</h3>
        <p class="t-org">Cadbury College | Birmingham, UK</p>
        <p class="t-desc">Studied 3D Design, Electronics, Computer Science</p>
        <p class="t-results">3.5 GPA</p>
      </article>

      <article class="t-entry">
        <img
          src="assets/img/graceshools-logo.jpg"
          alt="Grace High School Logo"
        />
        <p class="t-date">2017 - 2022</p>
        <h3 class="t-title">WAEC / GCSE</h3>
        <p class="t-org">Grace High School | Nigeria</p>
        <p class="t-desc">Studied basic high school subjects</p>
        <p class="t-results">3.5 GPA</p>
      </article>
    </div>
  </section>

  <!-- Skills Section-->
  <section class="skills-section" id="competences">
    <h1 class="skills-heading">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path
          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"
        />
      </svg>
      My <span class="text-accent"> Skills</span>
    </h1>

    <div class="skills-cards-grid">
      <!-- Frontend -->
      <div class="skill-category-card frontend">
        <div class="card-title">Frontend</div>
        <ul class="skill-list">
          <li class="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
            JavaScript
          </li>
          <li class="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5"
            />
            HTML
          </li>
          <li class="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
              alt="Tailwind CSS"
            />
            Tailwind CSS
          </li>
          <li class="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
            />
            React
          </li>
          <li class="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
              alt="Svelte"
            />
            Svelte.js
          </li>
        </ul>
      </div>

      <!-- Backend -->
      <div class="skill-category-card backend">
        <div class="card-title">Backend</div>
        <ul class="skill-list">
          <li class="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
              alt="Django"
            />
            Python Django
          </li>
          <li class="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              alt="Express.js"
            />
            Express.js
          </li>
          <li class="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
              alt="Laravel"
            />
            Laravel
          </li>
          <li class="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
              alt="Flask"
            />
            Flask
          </li>
        </ul>
      </div>

      <!-- Database -->
      <div class="skill-category-card database">
        <div class="card-title">Database</div>
        <ul class="skill-list">
          <li class="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              alt="PostgreSQL"
            />
            PostgreSQL
          </li>
          <li class="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="MongoDB"
            />
            MongoDB
          </li>
          <li class="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="MySQL"
            />
            MySQL
          </li>
        </ul>
      </div>

      <!-- Technology -->
      <div class="skill-category-card technology">
        <div class="card-title">Technology</div>
        <ul class="skill-list">
          <li class="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python"
            />
            Python
          </li>
          <li class="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt="Java"
            />
            Java
          </li>
          <li class="skill-item">
            <img src="https://cdn.simpleicons.org/sqlite" alt="SQL" />
            SQL
          </li>
          <li class="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
            JavaScript
          </li>
        </ul>
      </div>

      <!-- Tools -->
      <div class="skill-category-card tools">
        <div class="card-title">Tools</div>
        <ul class="skill-list">
          <li class="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git"
            />
            Git / GitHub
          </li>
          <li class="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              alt="Figma"
            />
            Figma
          </li>
          <li class="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              alt="Sass"
            />
            Sass
          </li>
          <li class="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VS Code"
            />
            VS Code
          </li>
        </ul>
      </div>

      <!-- Soft Skills -->
      <div class="skill-category-card soft">
        <div class="card-title">Soft Skills</div>
        <ul class="skill-list">
          <li class="skill-item">
            <img
              src="https://img.icons8.com/fluency/96/checklist.png"
              alt="Methodical"
            />
            Methodical
          </li>
          <li class="skill-item">
            <img
              src="https://img.icons8.com/fluency/96/handshake.png"
              alt="Reliable"
            />
            Reliable
          </li>
          <li class="skill-item">
            <img
              src="https://img.icons8.com/fluency/96/change.png"
              alt="Adaptability"
            />
            Adaptability
          </li>
          <li class="skill-item">
            <img
              src="https://img.icons8.com/fluency/96/scrum.png"
              alt="Agile"
            />
            Agile (Scrum)
          </li>
          <li class="skill-item">
            <img
              src="https://img.icons8.com/fluency/96/chat.png"
              alt="Communication"
            />
            Communication
          </li>
          <li class="skill-item">
            <img
              src="https://img.icons8.com/fluency/96/idea.png"
              alt="Creativity"
            />
            Creativity
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!--Projects section-->
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

    <a class="bouton-all-projects" href="/projects">
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

  <!-- Experience Section -->
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
        <path
          d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9"
        />
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

  <!-- Journey Section -->
<section class="journey-section" id="journey">
  <h1 class="journey-heading">
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
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </svg>
   My  <span class="text-accent">Journey</span>
  </h1>
  <p class="journey-subtitle">I've had the opportunity to develop software across a variety of settings — 
    from small side-jobs to large corporation, mostly building financial systems. 
    Here's my timeline of my journey</p>

  <div class="timeline-wrap-2" id="journey-timeline">
    {#each entries as entry (entry.id)}
      <div class="j-entry">
        <!-- Year label -->
        <div class="j-date">{entry.year}</div>

        <!-- Content -->
        <div class="j-content">
          <p class="j-text">{entry.text}</p>

          {#if entry.images?.some((img) => img.src)}
            <div class="j-image-grid">
              {#each entry.images.filter((img) => img.src) as img}
                <img class="j-image" src={img.src} alt={img.alt} />
              {/each}
            </div>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</section>
</main>
