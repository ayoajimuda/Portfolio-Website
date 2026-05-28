<script>
    import { onMount } from 'svelte';
    import '../../styles/components/Bio.css';
</script>

    <section id="main" class="page-active">
      <div class="hero-wrap">
        <div>
          <p class="hero-subtitle">Aspiring Software Engineer</p>
          <h1 class="hero-hello">Hello I'm</h1>
          <h1 class="hero-name">Ayomide<br>Ajimuda</h1>
          <p class="hero-description">IT Specialist &amp; Full-Stack Developer | Pragmatic,<br>
            delivery-oriented | Birmingham City University | UK</p>
          <div class="hero-actions">
            <button class="hero-cv-btn">VIEW CV &rsaquo;</button>
            <div class="social-links">
              <div class="hero-social-icon">
                <a href="https://www.instagram.com/ajims.archives/" target="_blank" rel="noopener"
                  aria-label="Instagram">
                  <i class="ti ti-brand-instagram" aria-hidden="true"></i>
                </a>
              </div>
              <div class="hero-social-icon">
                <i class="ti ti-brand-youtube" aria-hidden="true"></i>
              </div>
              <div class="hero-social-icon">
                <a href="https://linkedin.com/in/ayomide-ajimuda" target="_blank" rel="noopener" aria-label="LinkedIn">
                  <i class="ti ti-brand-linkedin" aria-hidden="true"></i>
                </a>
              </div>
              <div class="hero-social-icon">
                <a href="https://github.com/AZAZ3LTRON" target="_blank" rel="noopener" aria-label="GitHub">
                  <i class="ti ti-brand-github" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-avatar-wrap">
          <div class="hero-avatar-ring">
            <div class="hero-dashes"></div>
            <div class="hero-avatar-inner">
              <img src="..\static\assets\img\your-photo.png" alt="Ayomide Ajimuda">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" aria-hidden="true">
                <ellipse cx="60" cy="72" rx="28" ry="20" fill="#1a1a1a" />
                <circle cx="60" cy="48" r="22" fill="#f0e8d8" />
                <ellipse cx="60" cy="46" rx="14" ry="10" fill="#2a1a0a" opacity="0.85" />
                <circle cx="53" cy="50" r="5" fill="#fff" />
                <circle cx="67" cy="50" r="5" fill="#fff" />
                <circle cx="54" cy="51" r="2.5" fill="#1a1a1a" />
                <circle cx="68" cy="51" r="2.5" fill="#1a1a1a" />
                <path d="M55 60 Q60 64 65 60" stroke="#888" stroke-width="1.5" fill="none" stroke-linecap="round" />
                <ellipse cx="60" cy="90" rx="26" ry="14" fill="#111" />
                <path d="M34 90 Q60 78 86 90" fill="#1a1a1a" />
                <rect x="10" y="55" width="6" height="24" rx="3" fill="#f0e8d8" />
                <rect x="104" y="55" width="6" height="24" rx="3" fill="#f0e8d8" />
                <path d="M38 30 Q45 14 60 18 Q75 14 82 30 Q74 22 60 24 Q46 22 38 30Z" fill="#1a1a1a" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="info-row">
        <div class="hero-stat">
          <span class="hero-stat-num">22</span>
          <span class="hero-stat-lbl">Age</span>
        </div>
        <div class="hero-stat">
          <span class="hero-stat-num">2+</span>
          <span class="hero-stat-lbl">Years of<br>experience</span>
        </div>
        <div class="hero-stat">
          <span class="hero-stat-num">7</span>
          <span class="hero-stat-lbl">Projects<br>worked on</span>
        </div>
        <div class="hero-stat">
          <span class="hero-stat-num">4</span>
          <span class="hero-stat-lbl">Projects<br>Deployed</span>
        </div>
      </div>
    </section>
