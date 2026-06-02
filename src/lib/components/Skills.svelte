<script>
    import {onMount} from 'svelte'
    import '../../styles/components/Skills.css'
</script>

    <section class="skills-section" id="competences">
      <h2 class="skills-heading">MY SKILLS</h2>

      <div class="skills-cards-grid">

        <!-- Frontend -->
        <div class="skill-category-card frontend">
          <div class="card-title">Frontend</div>
          <ul class="skill-list">
            <li class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript">
              JavaScript
            </li>
            <li class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5">
              HTML
            </li>
            <li class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                alt="Tailwind CSS">
              Tailwind CSS
            </li>
            <li class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React">
              React
            </li>
            <li class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="Svelte">
              Svelte.js
            </li>
          </ul>
        </div>

        <!-- Backend -->
        <div class="skill-category-card backend">
          <div class="card-title">Backend</div>
          <ul class="skill-list">
            <li class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django">
              Python Django
            </li>
            <li class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                alt="Express.js">
              Express.js
            </li>
            <li class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel">
              Laravel
            </li>
            <li class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask">
              Flask
            </li>
          </ul>
        </div>

        <!-- Database -->
        <div class="skill-category-card database">
          <div class="card-title">Database</div>
          <ul class="skill-list">
            <li class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                alt="PostgreSQL">
              PostgreSQL
            </li>
            <li class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB">
              MongoDB
            </li>
            <li class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL">
              MySQL
            </li>
          </ul>
        </div>

        <!-- Technology -->
        <div class="skill-category-card technology">
          <div class="card-title">Technology</div>
          <ul class="skill-list">
            <li class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python">
              Python
            </li>
            <li class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java">
              Java
            </li>
            <li class="skill-item">
              <img src="https://cdn.simpleicons.org/sqlite" alt="SQL">
              SQL
            </li>
            <li class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript">
              JavaScript
            </li>
          </ul>
        </div>

        <!-- Tools -->
        <div class="skill-category-card tools">
          <div class="card-title">Tools</div>
          <ul class="skill-list">
            <li class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git">
              Git / GitHub
            </li>
            <li class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma">
              Figma
            </li>
            <li class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass">
              Sass
            </li>
            <li class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code">
              VS Code
            </li>
          </ul>
        </div>

        <!-- Soft Skills -->
        <div class="skill-category-card soft">
          <div class="card-title">Soft Skills</div>
          <ul class="skill-list">
            <li class="skill-item">
              <img src="https://img.icons8.com/fluency/96/checklist.png" alt="Methodical">
              Methodical
            </li>
            <li class="skill-item">
              <img src="https://img.icons8.com/fluency/96/handshake.png" alt="Reliable">
              Reliable
            </li>
            <li class="skill-item">
              <img src="https://img.icons8.com/fluency/96/change.png" alt="Adaptability">
              Adaptability
            </li>
            <li class="skill-item">
              <img src="https://img.icons8.com/fluency/96/scrum.png" alt="Agile">
              Agile (Scrum)
            </li>
            <li class="skill-item">
              <img src="https://img.icons8.com/fluency/96/chat.png" alt="Communication">
              Communication
            </li>
            <li class="skill-item">
              <img src="https://img.icons8.com/fluency/96/idea.png" alt="Creativity">
              Creativity
            </li>
          </ul>
        </div>

      </div>
    </section>
