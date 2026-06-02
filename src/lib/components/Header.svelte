<script>
    import { onMount } from 'svelte';
    import '../../styles/components/Header.css';

    let menuOpen = $state(false);

    function toggleMenu() {
        menuOpen = !menuOpen;
    }

    function closeMenu() {
        menuOpen = false;
    }

    // Close menu on outside click
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

    <!-- Hamburger button (visible on mobile only) -->
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

    <!-- Overlay backdrop -->
    {#if menuOpen}
        <div class="nav-overlay" onclick={closeMenu} aria-hidden="true"></div>
    {/if}

    <nav aria-label="Primary navigation" class:open={menuOpen}>
        <div class="nav-logo">Ajimuda<span class="logo-dot">.</span></div>
        <ul>
            <li><a href="#timeline"    class="nav-link" data-section="timeline"    onclick={closeMenu}>About</a></li>
            <li><a href="#competences" class="nav-link" data-section="competences" onclick={closeMenu}>Skills</a></li>
            <li><a href="#projects"    class="nav-link" data-section="projects"    onclick={closeMenu}>Web Gallery</a></li>
            <li><a href="#contact"     class="nav-link" data-section="contact"     onclick={closeMenu}>Contact</a></li>
            <li><a href="#journey"     class="nav-link" data-section="journey"     onclick={closeMenu}>Journey</a></li>
        </ul>
    </nav>
</header>