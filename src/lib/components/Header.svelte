<script>
    import { onMount } from 'svelte';
    import '../../styles/components/Header.css'
</script>

<header>
    <div class="logo-text">Ajimuda<span class="logo-dot">.</span></div>
    <nav aria-label="Primary navigation">
      <ul>
        <li><a href="#timeline" class="nav-link" data-section="timeline">About</a></li>
        <li><a href="#competences" class="nav-link" data-section="competences">Skills</a></li>
        <li><a href="#projects" class="nav-link" data-section="projects">Web Gallery</a></li>
        <li><a href="#contact" class="nav-link" data-section="contact">Contact</a></li>
        <li><a href="#journey" class="nav-link" data-section="journey">Journey</a></li>
      </ul>
    </nav>
</header>