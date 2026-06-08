<script lang="ts">
  import {
    currentOfficers,
    formatGradYearRange,
    pastOfficers,
    groupByGradYear,
  } from "../data/officers";

  const groupedAlumni = groupByGradYear(pastOfficers);

  const ROLE_ORDER = [
    "President",
    "Vice President",
    "Secretary",
    "Treasurer",
    "Problem Writer",
    "Historian",
    "Webmaster",
    "Officer",
  ];

  function sortOfficers(officers: typeof currentOfficers) {
    return [...officers].sort((a, b) => {
      const ia = ROLE_ORDER.findIndex((r) => a.role.includes(r));
      const ib = ROLE_ORDER.findIndex((r) => b.role.includes(r));
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });
  }

  const sorted = sortOfficers(currentOfficers);

  function nameToHue(name: string): number {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % 360;
  }
</script>

<div class="page-header">
  <div class="container page-header-inner animate-fade-up">
    <h1 class="page-header-title text-section-title">Our Officers</h1>
    <p class="page-header-subtitle">
      Meet the student team that helps run Math Club, organize and coordinate
      competitions and events.
    </p>
  </div>
</div>

<div class="container officers-page">
  <section class="officers-section">
    <div class="officers-section-header">
      <h2 class="officers-section-title text-section-title">
        Current Officers
      </h2>
    </div>

    <div class="officers-grid">
      {#each sorted as officer, i}
        {@const hue = nameToHue(officer.name)}
        <article
          class="officer-card animate-fade-up"
          style="animation-delay:{i * 50}ms"
        >
          {#if officer.photoUrl}
            <img
              class="officer-card-photo"
              src={officer.photoUrl}
              alt={officer.name}
            />
          {:else}
            <div
              class="officer-card-avatar"
              style="background: hsl({hue}, 35%, 22%); color: hsl({hue}, 60%, 75%);"
              aria-hidden="true"
            >
              {officer.name.trim()[0] ?? "?"}
            </div>
          {/if}
          <div class="officer-card-info">
            <div class="officer-card-name-row">
              <h3 class="officer-card-name">{officer.name}</h3>
            </div>
            <span class="officer-card-role">{officer.role}</span>

            {#if officer.bio}
              <p class="officer-card-bio">{officer.bio}</p>
            {/if}

            {#if officer.email}
              <a href="mailto:{officer.email}" class="officer-card-email">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  aria-hidden="true"
                >
                  <rect x="1" y="3" width="14" height="10" rx="1.5" />
                  <polyline points="1,3 8,9 15,3" />
                </svg>
                {officer.email}
              </a>
            {/if}
          </div>
        </article>
      {/each}
    </div>
  </section>

  <hr class="divider" />

  <section class="officers-section">
    <div class="officers-section-header">
      <h2 class="officers-section-title text-section-title">Past Officers</h2>
      <p class="officers-section-subtitle">
        Thank you to every officer who helped build Math Club into what it is
        today.
      </p>
    </div>

    {#each [...groupedAlumni.entries()] as [year, group]}
      <div class="alumni-year-group animate-fade-up">
        <h3 class="alumni-year-group-year">{formatGradYearRange(year)}</h3>
        <div class="alumni-year-group-list">
          {#each group as alumnus}
            <div class="alumni-card">
              <span class="alumni-card-name">{alumnus.name}</span>
              <span class="alumni-card-role">{alumnus.role}</span>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </section>

  {#if false}
    <div class="join-cta animate-fade-up">
      <div class="join-cta-content">
        <h2 class="join-cta-heading">Want to be an officer?</h2>
        <p class="join-cta-text">
          Fill out the form to apply for an officer position. Applicants will
          undergo an informal interview.
        </p>
      </div>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn--accent join-cta-btn"
      >
        Open Form
      </a>
    </div>
  {/if}
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

  .officers-page {
    padding-top: var(--space-12);
    padding-bottom: var(--space-12);
  }

  .officers-section {
    margin-bottom: var(--space-16);
  }

  .officers-section-header {
    margin-bottom: var(--space-8);
  }

  .officers-section-title {
    margin-bottom: var(--space-2);
  }

  .officers-section-subtitle {
    font-size: var(--text-base);
    color: var(--color-text-muted);
    max-width: 560px;
  }
  .officers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: var(--space-5);
  }

  .officer-card {
    display: flex;
    gap: var(--space-4);
    padding: var(--space-5) var(--space-6);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    align-items: flex-start;
    transition:
      box-shadow var(--transition-base),
      transform var(--transition-base);
  }

  .officer-card:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }

  .officer-card-avatar {
    width: 52px;
    height: 52px;
    border-radius: var(--radius-full);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-size: var(--text-2xl);
    font-weight: var(--weight-semibold);
    flex-shrink: 0;
  }

  .officer-card-photo {
    width: 52px;
    height: 52px;
    border-radius: var(--radius-full);
    object-fit: cover;
    display: block;
    flex-shrink: 0;
    border: 1px solid var(--color-border);
  }

  .officer-card-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }

  .officer-card-name-row {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    flex-wrap: wrap;
  }

  .officer-card-name {
    font-size: var(--text-lg);
    color: var(--color-primary-dark);
    font-weight: var(--weight-semibold);
  }

  .officer-card-role {
    font-size: var(--text-sm);
    font-weight: var(--weight-semibold);
    color: var(--color-accent);
    display: block;
  }

  .officer-card-bio {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    line-height: var(--leading-relaxed);
    margin-top: var(--space-2);
  }

  .officer-card-email {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
    font-size: var(--text-xs);
    color: var(--color-text-muted);
    margin-top: var(--space-2);
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  .officer-card-email:hover {
    color: var(--color-primary);
  }
  .officer-card-email svg {
    width: 13px;
    height: 13px;
  }

  .alumni-year-group {
    margin-bottom: var(--space-8);
  }

  .alumni-year-group-year {
    font-family: var(--font-display);
    font-size: var(--text-2xl);
    color: var(--color-primary-dark);
    margin-bottom: var(--space-4);
    padding-bottom: var(--space-2);
    border-bottom: 2px solid var(--color-accent);
    display: inline-block;
  }

  .alumni-year-group-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: var(--space-3);
  }

  .alumni-card {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: var(--space-3) var(--space-4);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
  }

  .alumni-card-name {
    font-size: var(--text-sm);
    font-weight: var(--weight-semibold);
    color: var(--color-primary-dark);
  }

  .alumni-card-role {
    font-size: var(--text-xs);
    color: var(--color-text-muted);
  }

  .join-cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-8);
    padding: var(--space-10);
    background: var(--color-primary);
    border-radius: var(--radius-xl);
    flex-wrap: wrap;
  }

  .join-cta-heading {
    font-size: var(--text-3xl);
    color: white;
    margin-bottom: var(--space-3);
  }

  .join-cta-text {
    font-size: var(--text-base);
    color: rgba(255, 255, 255, 0.65);
    max-width: 480px;
    line-height: var(--leading-relaxed);
  }

  .join-cta-btn {
    font-size: var(--text-base);
    padding: var(--space-4) var(--space-8);
    flex-shrink: 0;
  }

  @media (max-width: 640px) {
    .officers-grid {
      grid-template-columns: 1fr;
    }

    .join-cta {
      flex-direction: column;
      text-align: center;
      padding: var(--space-8) var(--space-6);
    }
  }
</style>
