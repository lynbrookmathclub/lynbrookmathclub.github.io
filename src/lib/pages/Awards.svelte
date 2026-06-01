<script lang="ts">
  import { results } from "../data/awards";

  const tournaments = results.filter(r => r.category === 'tournament');
  const programs = results.filter(r => r.category === 'program');
</script>

<div class="page-header">
  <div class="container page-header-inner animate-fade-up">
    <h1 class="page-header-title text-section-title">Awards & Accolades</h1>
    <p class="page-header-subtitle">
      Lynbrook Math Club's competitive results and program milestones for the 2025–26 year.
    </p>
  </div>
</div>

<div class="container awards-page">

  <section class="awards-section">
    <h2 class="awards-section-title text-section-title">Competition Results</h2>
    <div class="awards-grid">
      {#each tournaments as result, i}
        <article class="award-card animate-fade-up" style="animation-delay:{i * 60}ms">
          <div class="award-card-header">
            <h3 class="award-card-competition">{result.competition}</h3>
            {#if result.placement}
              <p class="award-card-placement">{result.placement}</p>
            {/if}
          </div>
          <p class="award-card-summary">{result.summary}</p>
          {#if result.highlights?.length}
            <ul class="award-card-list">
              {#each result.highlights as item}
                <li>{item}</li>
              {/each}
            </ul>
          {/if}
        </article>
      {/each}
    </div>
  </section>

  <hr class="divider" />

  <section class="awards-section">
    <h2 class="awards-section-title text-section-title">Programs & Outreach</h2>
    <div class="programs-grid">
      {#each programs as result, i}
        <article class="program-card animate-fade-up" style="animation-delay:{i * 60}ms">
          <div class="program-card-header">
            <h3 class="program-card-title">{result.competition}</h3>
            {#if result.placement}
              <p class="program-card-placement">{result.placement}</p>
            {/if}
          </div>
          <p class="program-card-summary">{result.summary}</p>
          {#if result.highlights?.length}
            <ul class="program-card-list">
              {#each result.highlights as item}
                <li>{item}</li>
              {/each}
            </ul>
          {/if}
        </article>
      {/each}
    </div>
  </section>

</div>

<style>
  .page-header {
    background: var(--color-primary);
    padding: var(--space-16) 0 var(--space-12);
  }

  .page-header-title {
    color: white;
    margin-bottom: var(--space-3);
  }

  .page-header-subtitle {
    font-size: var(--text-lg);
    color: rgba(255, 255, 255, 0.6);
    max-width: 560px;
    line-height: var(--leading-relaxed);
  }

  .awards-page {
    padding-top: var(--space-12);
    padding-bottom: var(--space-16);
  }

  .awards-section {
    margin-bottom: var(--space-12);
  }

  .awards-section-title {
    margin-bottom: var(--space-8);
  }

  .awards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: var(--space-5);
  }

  .award-card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: var(--space-6);
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .award-card-header {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    padding-bottom: var(--space-3);
    border-bottom: 1px solid var(--color-border-light);
  }

  .award-card-competition {
    font-size: var(--text-lg);
    color: var(--color-primary-dark);
  }

  .award-card-placement {
    font-size: var(--text-sm);
    font-weight: var(--weight-semibold);
    color: var(--color-accent);
  }

  .award-card-summary {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    line-height: var(--leading-relaxed);
  }

  .award-card-list {
    display: grid;
    gap: var(--space-2);
    padding-left: var(--space-5);
    list-style: disc;
  }

  .award-card-list li {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    line-height: var(--leading-relaxed);
  }
  
  .programs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: var(--space-5);
  }

  .program-card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: var(--space-6);
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .program-card-header {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    padding-bottom: var(--space-3);
    border-bottom: 1px solid var(--color-border-light);
  }

  .program-card-title {
    font-size: var(--text-lg);
    color: var(--color-primary-dark);
  }

  .program-card-placement {
    font-size: var(--text-sm);
    font-weight: var(--weight-semibold);
    color: var(--color-accent);
  }

  .program-card-summary {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    line-height: var(--leading-relaxed);
  }

  .program-card-list {
    display: grid;
    gap: var(--space-2);
    padding-left: var(--space-5);
    list-style: disc;
  }

  .program-card-list li {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    line-height: var(--leading-relaxed);
  }

  .divider {
    border: none;
    border-top: 1px solid var(--color-border);
    margin-bottom: var(--space-12);
  }

  @media (max-width: 640px) {
    .awards-grid,
    .programs-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
