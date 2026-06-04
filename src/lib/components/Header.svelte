<script>
    import { onMount } from 'svelte';
    import '../../styles/layout/Header.css';

    let menuOpen = $state(false);

    function toggleMenu() {
        menuOpen = !menuOpen;
    }

    function closeMenu() {
        menuOpen = false;
    }

    onMount(() => {
        const handleClick = (e) => {
            if (!e.target.closest('header')) closeMenu();
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    });
</script>

<header>
    <div class="logo-text">Ajimuda<span class="logo-dot">.</span></div>

    <button
        class="hamburger"
        class:open={menuOpen}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onclick={toggleMenu}
    >
        <span></span>
        <span></span>
        <span></span>
    </button>

    {#if menuOpen}
        <div class="nav-overlay" onclick={closeMenu} aria-hidden="true"></div>
    {/if}

    <nav aria-label="Primary navigation" class:open={menuOpen}>
        <div class="nav-logo">Ajimuda<span class="logo-dot">.</span></div>
        <ul>
            <li><a href="#bio"    class="nav-link" data-section="bio"    onclick={closeMenu}>Bio</a></li>
            <li><a href="#education"    class="nav-link" data-section="education"    onclick={closeMenu}>Education</a></li>
            <li><a href="#competences" class="nav-link" data-section="competences" onclick={closeMenu}>Skills</a></li>
            <li><a href="#projects"    class="nav-link" data-section="projects"    onclick={closeMenu}>Projects</a></li>
            <li><a href="#experience"     class="nav-link" data-section="experience"     onclick={closeMenu}>Experience</a></li>
            <li><a href="#journey"     class="nav-link" data-section="journey"     onclick={closeMenu}>Journey</a></li>
        </ul>
    </nav>
</header>