<script>
  import '../../styles/components/Journey.css';
  import { loadJourney } from '/src/lib/data/journey.js';

  // ── State ──────────────────────────────────────────────────────────────────
  let entries = $state([]);

  // ── Load data ──────────────────────────────────────────────────────────────
  $effect(() => {
    loadJourney('/src/lib/data/journey.json')
      .then(data => { entries = data; })
      .catch(err => console.error(err));
  });
</script>

<!-- Journey Section -->
<section class="journey-section" id="journey">
  <h2 class="journey-heading">My Journey</h2>
  <p class="journey-subtitle"></p>

  <div class="timeline-wrap-2" id="journey-timeline">
    {#each entries as entry (entry.id)}
      <div class="j-entry">

        <!-- Year label -->
        <div class="j-date">{entry.year}</div>

        <!-- Content -->
        <div class="j-content">
          <p class="j-text">{entry.text}</p>

          {#if entry.images?.some(img => img.src)}
            <div class="j-image-grid">
              {#each entry.images.filter(img => img.src) as img}
                <img class="j-image" src={img.src} alt={img.alt} />
              {/each}
            </div>
          {/if}
        </div>

      </div>
    {/each}
  </div>
</section>