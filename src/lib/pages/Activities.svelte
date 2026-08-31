<script lang="ts">
  import { activities } from '../data/activities';
  import VisualFrame from '../components/VisualFrame.svelte';

  const prioritized = [...activities].sort((a, b) => {
    const order: Record<string, number> = { lmo: 0, 'summer-camp': 1 };
    return (order[a.id] ?? 99) - (order[b.id] ?? 99);
  });
</script>

<div class="page-header">
  <div class="container page-header-inner animate-fade-up">
    <h1 class="page-header-title text-section-title">Activities & Competitions</h1>
    <p class="page-header-subtitle">
      From national AMC exams to our own student-run Lynbrook Math Open, here's every event and program we're involved in.
    </p>
  </div>
</div>

<div class="container activities-page">
  <div class="activities-grid">
    {#each prioritized as activity, i}
      <article class="activity-card animate-fade-up" style="animation-delay:{i * 60}ms" id={activity.id}>
        <div class="activity-card-top">
          {#if activity.visual.src}
            <div class="activity-card-media">
              <VisualFrame
                src={activity.visual.src}
                alt={activity.visual.alt}
                tone={activity.visual.tone}
                aspectRatio="1 / 1"
              />
            </div>
          {/if}

          <div class="activity-card-body">
            <h2 class="activity-card-short-name">{activity.shortName}</h2>
            <h3 class="activity-card-full-name">{activity.name}</h3>
          </div>
        </div>

        <p class="activity-card-short-desc">{activity.description}</p>

        <div class="activity-card-footer">
          {#if activity.pageHref}
            <a href={activity.pageHref} class="activity-card-link">
              Open page
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M3 8h10" />
                <path d="M8 3l5 5-5 5" />
              </svg>
            </a>
          {/if}
          {#if activity.website}
            <a
              href={activity.website}
              target="_blank"
              rel="noopener noreferrer"
              class="activity-card-link"
            >
              Visit website
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M7 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V9" />
                <polyline points="11,1 15,1 15,5" />
                <line x1="9" y1="7" x2="15" y2="1" />
              </svg>
            </a>
          {/if}
        </div>
      </article>
    {/each}
  </div>
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
    color: rgba(255,255,255,0.6);
    max-width: 560px;
    line-height: var(--leading-relaxed);
  }

  .activities-page {
    padding-top: var(--space-10);
    padding-bottom: var(--space-12);
  }

  .activities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: var(--space-6);
  }

  .activity-card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: var(--space-5);
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    transition: box-shadow var(--transition-base), transform var(--transition-base), border-color var(--transition-base);
  }

  .activity-card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-3px);
    border-color: transparent;
  }

  .activity-card-top {
    display: flex;
    align-items: flex-start;
    gap: var(--space-3);
  }

  .activity-card-media {
    width: 56px;
    flex-shrink: 0;
    border-radius: var(--radius-lg);
    overflow: hidden;
  }

  .activity-card-body {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  .activity-card-short-name {
    font-family: var(--font-display);
    font-size: var(--text-2xl);
    color: var(--color-primary-dark);
    line-height: var(--leading-tight);
  }

  .activity-card-full-name {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    font-weight: var(--weight-regular);
    color: var(--color-text-muted);
    line-height: var(--leading-snug);
  }

  .activity-card-short-desc {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    line-height: var(--leading-relaxed);
    padding-top: var(--space-1);
  }

  .activity-card-footer {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
    margin-top: var(--space-1);
  }

  .activity-card-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
    font-size: var(--text-sm);
    font-weight: var(--weight-medium);
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  .activity-card-link:hover {
    color: var(--color-accent);
  }

  .activity-card-link svg {
    width: 13px;
    height: 13px;
  }

  @media (max-width: 640px) {
    .activities-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
