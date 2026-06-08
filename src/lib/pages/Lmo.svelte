<script lang="ts">
  import { activities } from "../data/activities";

  const lmo = activities.find((activity) => activity.id === "lmo");

  if (!lmo) {
    throw new Error("Code 1434: Activity data was missing.");
  }
</script>

<div class="page-header">
  <div class="container page-header-inner animate-fade-up">
    <h1 class="page-header-title text-section-title">Lynbrook Math Open</h1>
    <p class="page-header-subtitle">
      Our student-run tournament for middle school and high school teams across
      the Bay Area.
    </p>
  </div>
</div>

<div class="container detail-page">
  <section class="detail-hero">
    <div class="detail-hero-media detail-hero-media--logo">
      <img class="detail-hero-logo" src={lmo.visual.src} alt={lmo.visual.alt} />
    </div>

    <div class="detail-hero-body">
      <h2 class="detail-hero-title">The club's flagship competition</h2>
      <p class="detail-hero-text">
        LMO is organized entirely by Lynbrook Math Club officers and members,
        open to all students of the Fremont Union High School District. The
        difficulty level spans from AMCs-level to AIME-level. The
        problem-writing, logistics, and public relations are handled by
        students.
      </p>

      <div class="detail-hero-actions">
        <a
          href={lmo.website}
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--primary"
        >
          Visit official site
        </a>
        <a href="/activities" class="btn btn--secondary">
          Back to activities
        </a>
      </div>
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
    max-width: 640px;
    line-height: var(--leading-relaxed);
  }

  .detail-page {
    padding-top: var(--space-10);
    padding-bottom: var(--space-12);
  }

  .detail-hero {
    display: grid;
    grid-template-columns: minmax(180px, 260px) minmax(0, 1fr);
    gap: var(--space-8);
    align-items: start;
    margin-bottom: var(--space-12);
  }

  .detail-hero-media {
    border-radius: var(--radius-xl);
    overflow: hidden;
  }

  .detail-hero-media--logo {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: start;
    width: min(100%, 260px);
    aspect-ratio: 1 / 1;
    padding: var(--space-8);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
  }

  .detail-hero-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
  }

  .detail-hero-body {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    padding-top: var(--space-2);
  }

  .detail-hero-title {
    font-family: var(--font-display);
    font-size: var(--text-4xl);
    color: var(--color-primary-dark);
  }

  .detail-hero-text {
    font-size: var(--text-base);
    color: var(--color-text-muted);
    line-height: var(--leading-relaxed);
  }

  .detail-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
  }

  @media (max-width: 800px) {
    .detail-hero {
      grid-template-columns: 1fr;
    }

    .detail-hero-media--logo {
      width: min(100%, 320px);
    }
  }
</style>
