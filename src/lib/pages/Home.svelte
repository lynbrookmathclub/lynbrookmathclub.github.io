<script lang="ts">
  import MathDisplay from "../components/MathDisplay.svelte";
  import SlideCard from "../components/SlideCard.svelte";
  import VisualFrame from "../components/VisualFrame.svelte";
  import { activities } from "../data/activities";
  import { slides } from "../data/slides";
  import { getActiveProblem } from "../data/potw";

  const potw = getActiveProblem();
  const featuredSlides = slides.slice(0, 3);
  const featuredActivities = activities.slice(0, 4);

  let solutionVisible = false;
  let hintVisible = false;

  function slideHref(id: string): string {
    return `/slides?slide=${encodeURIComponent(id)}`;
  }

  type GalleryImage = {
    label: string;
    alt: string;
    src: string;
    tone: string;
    width: number;
    height: number;
  };

  const meetingImages: GalleryImage[] = [
    {
      label: "BMT 2025",
      alt: "Lynbrook students at the Berkeley Math Tournament, 2025",
      src: "/bmt-2025.png",
      tone: "#1b3a6b",
      width: 2048,
      height: 1536,
    },
    {
      label: "LMO 2026",
      alt: "Photo of the 2026 LMO",
      src: "/lmo-2026.jpg",
      tone: "#4a3010",
      width: 6000,
      height: 4000,
    },
    {
      label: "SMT 2026",
      alt: "Lynbrook students at the Stanfard Math Tournament, 2026",
      src: "/smt-2026.png",
      tone: "#1b3d2a",
      width: 1844,
      height: 1500,
    },
    {
      label: "2026 Last Meeting",
      alt: "Club photo from the 2026 final meeting",
      src: "/final-meeting-2026.jpg",
      tone: "#2d1e50",
      width: 2880,
      height: 2160,
    },
  ];

  type AboutGalleryLayout = {
    columns: [GalleryImage[], GalleryImage[]];
    weights: [number, number];
  };

  function buildAboutGalleryLayout(images: GalleryImage[]): AboutGalleryLayout {
    if (images.length <= 1) {
      return { columns: [images.slice(), []], weights: [1, 1] };
    }

    const scores = images.map((img) => img.height / img.width);
    let bestMask = 1;
    let bestDiff = Number.POSITIVE_INFINITY;
    let bestBalance = Number.POSITIVE_INFINITY;

    for (let mask = 1; mask < (1 << images.length) - 1; mask++) {
      let leftScore = 0;
      let rightScore = 0;
      let leftCount = 0;
      let rightCount = 0;

      for (let i = 0; i < images.length; i++) {
        if (mask & (1 << i)) {
          leftScore += scores[i];
          leftCount++;
        } else {
          rightScore += scores[i];
          rightCount++;
        }
      }

      const scoreDiff = Math.abs(leftScore - rightScore);
      const countDiff = Math.abs(leftCount - rightCount);

      if (
        scoreDiff < bestDiff ||
        (scoreDiff === bestDiff && countDiff < bestBalance)
      ) {
        bestMask = mask;
        bestDiff = scoreDiff;
        bestBalance = countDiff;
      }
    }

    const columns: [GalleryImage[], GalleryImage[]] = [[], []];
    let leftScore = 0;
    let rightScore = 0;

    for (let i = 0; i < images.length; i++) {
      if (bestMask & (1 << i)) {
        columns[0].push(images[i]);
        leftScore += scores[i];
      } else {
        columns[1].push(images[i]);
        rightScore += scores[i];
      }
    }

    return {
      columns,
      weights: [rightScore || 1, leftScore || 1],
    };
  }

  const aboutGallery = buildAboutGalleryLayout(meetingImages);
</script>

<section class="hero">
  <div class="hero-pattern" aria-hidden="true"></div>
  <div class="container hero-inner">
    <div class="hero-content animate-fade-up">
      <h1 class="hero-title">Lynbrook Math Club</h1>
      <p class="hero-subtitle">
        Lynbrook Math Club, also known as Lynbrook Math Honor Society, brings
        together passionate problem solvers to learn, compete, and enjoy
        mathematical thinking together. We meet in Room 022 at lunch on
        Tuesdays.
      </p>
      <div class="hero-ctas">
        <a href="/activities" class="btn btn--accent hero-cta-primary">
          Our Activities
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
            ><path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            /></svg
          >
        </a>
        <a href="/slides" class="btn btn--secondary hero-cta-secondary">
          Meeting Slides
        </a>
      </div>
    </div>
  </div>
</section>

<section class="section about">
  <div class="container about-inner">
    <div class="about-gallery">
      {#each aboutGallery.columns as column, columnIndex}
        <div
          class="about-column"
          style:flex={aboutGallery.weights[columnIndex]}
        >
          {#each column as img, i}
            <figure
              class="about-photo animate-fade-up animate-fade-up-{i + 1}"
            >
              <img class="about-photo-image" src={img.src} alt={img.alt} />
              <figcaption class="about-photo-caption">{img.alt}</figcaption>
            </figure>
          {/each}
        </div>
      {/each}
    </div>
    <div class="about-text">
      <h2 class="about-heading text-section-title">
        A growing mathematical community.
      </h2>
      <p class="about-body">
        The Lynbrook Math Club is one of our most active academic clubs at
        Lynbrook. We meet every Tuesday at lunch in Room 022. During meetings,
        we explore topics from AMC-level problem-solving techniques to prep to
        more general and abstract topics, such as using physics for mathematical
        problems. We also compete at regional and national tournaments
        throughout the year, as well as host our own!
      </p>
      <p class="about-body">
        Whether you're just starting out or comfortable with competition
        problems, there's a place for you here. We are an inclusive community
        that learns from each other, pushes each other, and celebrates growth
        together.
      </p>
      <a href="/activities" class="btn btn--primary about-cta">
        See All Activities
      </a>
    </div>
  </div>
</section>

<section class="summer-camp">
  <div class="container summer-camp-inner">
    <VisualFrame
      className="summer-camp-visual"
      src="/media/summer-camp-2026.jpg"
      alt="Math Honor Society Summer Camp"
      label="Summer Camp"
      tone="#0f1a3d"
      aspectRatio="4 / 3"
    />
    <div class="summer-camp-text">
      <h2 class="summer-camp-title">Math Honor Society Summer Camp</h2>
      <p class="summer-camp-desc">
        A week-long math camp for middle schoolers covering Algebra, Number
        Theory, Geometry, and Combinatorics at the AMC 8 and MATHCOUNTS level.
      </p>
      <p class="summer-camp-meta">
        August 3–7, 2026 · 8am–4pm · Lynbrook High School · $400
      </p>
      <div class="summer-camp-actions">
        <a href="/summer-camp" class="btn btn--secondary summer-camp-cta">
          View camp page
        </a>
        <a
          href="mailto:lynbrookmath@gmail.com"
          class="btn btn--accent summer-camp-cta"
        >
          Sign Up · Email Us
        </a>
      </div>
    </div>
  </div>
</section>

<section class="section recent-slides">
  <div class="container">
    <div class="section-header">
      <h2 class="text-section-title">Recent Meeting Slides</h2>
      <a href="/slides" class="btn btn--ghost">View All Slides</a>
    </div>
    <div class="recent-slides-grid">
      {#each featuredSlides as slide, i}
        <SlideCard
          {slide}
          href={slideHref(slide.id)}
          className={`animate-fade-up animate-fade-up-${i + 1}`}
        />
      {/each}
    </div>
  </div>
</section>

<section class="section activities-teaser">
  <div class="container">
    <div class="section-header">
      <h2 class="text-section-title">Competitions & Programs</h2>
      <a href="/activities" class="btn btn--ghost">All Activities</a>
    </div>
    <div class="activities-teaser-grid">
      {#each featuredActivities as activity, i}
        <a
          href="/activities"
          class="activity-teaser-card animate-fade-up animate-fade-up-{i + 1}"
        >
          <VisualFrame
            className="activity-teaser-card-media"
            src={activity.visual.src}
            alt={activity.visual.alt}
            label={activity.visual.label}
            tone={activity.visual.tone}
            aspectRatio="1 / 1"
          />
          <div class="activity-teaser-card-content">
            <div class="activity-teaser-card-name-row">
              <h3 class="activity-teaser-card-name">{activity.shortName}</h3>
            </div>
            <p class="activity-teaser-card-desc">{activity.description}</p>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<section class="section potw">
  <div class="container potw-inner">
    <div class="potw-header">
      <h2 class="text-section-title">Problem of the Week</h2>
      <p class="potw-meta-line">
        <span class="potw-meta-week">{potw.weekOf}</span>
        <span class="potw-meta-sep">·</span>
        <span class="potw-meta-diff">{potw.difficulty}</span>
        {#if potw.source}
          <span class="potw-meta-sep">·</span>
          <span class="potw-meta-src">{potw.source}</span>
        {/if}
      </p>
    </div>

    <div class="potw-card">
      <div class="potw-problem">
        <MathDisplay content={potw.statement} />
      </div>
      <div class="potw-actions">
        {#if potw.hint}
          <button
            class="btn btn--ghost"
            on:click={() => (hintVisible = !hintVisible)}
          >
            {hintVisible ? "Hide Hint" : "Show Hint"}
          </button>
        {/if}
        <button
          class="btn btn--primary"
          on:click={() => (solutionVisible = !solutionVisible)}
        >
          {solutionVisible ? "Hide Solution" : "Reveal Solution"}
        </button>
      </div>
      {#if hintVisible && potw.hint}
        <div class="potw-hint">
          <span class="potw-hint-label">Hint</span>
          <div class="potw-hint-math">
            <MathDisplay content={potw.hint} />
          </div>
        </div>
      {/if}
      {#if solutionVisible}
        <div class="potw-solution">
          <div class="potw-solution-header">
            <span class="potw-solution-label">Solution</span>
          </div>
          <div class="potw-solution-body">
            <MathDisplay content={potw.solution} />
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    background: var(--color-primary);
    overflow: hidden;
    min-height: 560px;
    display: flex;
    align-items: center;
  }

  .hero-pattern {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      circle,
      rgba(201, 164, 48, 0.12) 1px,
      transparent 1px
    );
    background-size: 28px 28px;
    pointer-events: none;
  }

  .hero-inner {
    position: relative;
    z-index: 1;
    padding-top: var(--space-16);
    padding-bottom: var(--space-16);
    display: flex;
    flex-direction: column;
    gap: var(--space-10);
  }

  .hero-title {
    font-family: var(--font-display);
    font-size: var(--text-hero);
    font-weight: var(--weight-semibold);
    color: white;
    line-height: var(--leading-tight);
    letter-spacing: -0.02em;
    max-width: 680px;
  }

  .hero-subtitle {
    font-size: var(--text-lg);
    color: rgba(255, 255, 255, 0.65);
    max-width: 520px;
    line-height: var(--leading-relaxed);
  }

  .hero-ctas {
    display: flex;
    gap: var(--space-3);
    flex-wrap: wrap;
    margin-top: var(--space-3);
  }

  .hero-cta-primary {
    font-size: var(--text-base);
    padding: var(--space-4) var(--space-6);
  }

  .hero-cta-primary svg {
    width: 16px;
    height: 16px;
  }

  .hero-cta-secondary {
    font-size: var(--text-base);
    padding: var(--space-4) var(--space-6);
    color: rgba(255, 255, 255, 0.8);
    border-color: rgba(255, 255, 255, 0.25);
  }

  .hero-cta-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    color: white;
  }

  .hero-sym {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    color: var(--color-accent);
    animation: fadeInUp 0.6s ease-out both;
  }

  .about-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-16);
    align-items: center;
  }

  .about-gallery {
    display: flex;
    gap: var(--space-3);
    align-items: flex-start;
  }

  .about-column {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    min-width: 0;
  }

  .about-photo {
    position: relative;
    width: 100%;
    border-radius: var(--radius-lg);
    overflow: hidden;
    background: var(--color-surface);
    box-shadow: var(--shadow-md);
  }

  .about-photo-image {
    width: 100%;
    height: auto;
    display: block;
  }

  .about-photo-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: var(--space-3);
    font-size: var(--text-xs);
    color: rgba(255, 255, 255, 0.6);
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
    text-align: center;
  }

  .about-heading {
    margin-bottom: var(--space-5);
  }
  .about-body {
    color: var(--color-text-muted);
    margin-bottom: var(--space-4);
  }

  .summer-camp {
    background: var(--color-primary);
    border-top: 1px solid rgba(201, 164, 48, 0.2);
    border-bottom: 1px solid rgba(201, 164, 48, 0.2);
  }

  .summer-camp-inner {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    align-items: center;
    padding-top: var(--space-12);
    padding-bottom: var(--space-12);
    gap: var(--space-8);
  }

  .summer-camp-visual {
    border-radius: var(--radius-xl);
  }

  .summer-camp-title {
    font-family: var(--font-display);
    font-size: var(--text-3xl);
    font-weight: var(--weight-semibold);
    color: white;
    line-height: var(--leading-snug);
    margin-bottom: var(--space-4);
    letter-spacing: -0.01em;
  }

  .summer-camp-desc {
    font-size: var(--text-base);
    color: rgba(255, 255, 255, 0.7);
    line-height: var(--leading-relaxed);
    margin-bottom: var(--space-3);
  }

  .summer-camp-meta {
    font-size: var(--text-sm);
    color: rgba(255, 255, 255, 0.55);
    margin-bottom: var(--space-6);
    line-height: var(--leading-relaxed);
  }

  .summer-camp-actions {
    display: flex;
    gap: var(--space-3);
    flex-wrap: wrap;
  }

  .summer-camp-actions .btn--secondary {
    background: rgba(255, 255, 255, 0.06);
    color: white;
    border-color: rgba(255, 255, 255, 0.28);
  }

  .summer-camp-actions .btn--secondary:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(255, 255, 255, 0.5);
    color: white;
  }
  .section-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: var(--space-8);
    gap: var(--space-4);
  }

  .recent-slides-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-5);
  }

  .activities-teaser {
    background: var(--color-surface-alt);
  }

  .activities-teaser-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }

  .activity-teaser-card {
    display: flex;
    align-items: flex-start;
    gap: var(--space-4);
    padding: var(--space-5) var(--space-6);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    text-decoration: none;
    transition:
      box-shadow var(--transition-base),
      border-color var(--transition-base);
  }

  .activity-teaser-card:hover {
    box-shadow: var(--shadow-md);
    border-color: var(--color-primary);
  }

  .activity-teaser-card-media {
    width: 56px;
    flex-shrink: 0;
    border-radius: var(--radius-md);
    overflow: hidden;
  }

  .activity-teaser-card-content {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .activity-teaser-card-name-row {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    flex-shrink: 0;
  }

  .activity-teaser-card-name {
    font-size: var(--text-lg);
    color: var(--color-primary-dark);
    font-weight: var(--weight-semibold);
  }

  .activity-teaser-card-desc {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    line-height: var(--leading-relaxed);
  }

  .potw-inner {
    max-width: 800px;
    margin: 0 auto;
  }
  .potw-header {
    margin-bottom: var(--space-6);
  }

  .potw-meta-line {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    flex-wrap: wrap;
    margin-top: var(--space-3);
    font-size: var(--text-sm);
    color: var(--color-text-muted);
  }

  .potw-meta-week {
    font-weight: var(--weight-medium);
  }
  .potw-meta-diff {
    font-weight: var(--weight-semibold);
    color: var(--color-primary);
  }
  .potw-meta-sep {
    color: var(--color-border);
  }
  .potw-meta-src {
    font-style: italic;
  }

  .potw-card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: var(--space-8);
  }

  .potw-problem {
    font-size: var(--text-lg);
    color: var(--color-text);
    margin-bottom: var(--space-6);
    line-height: var(--leading-relaxed);
  }

  .potw-actions {
    display: flex;
    gap: var(--space-3);
    flex-wrap: wrap;
  }

  .potw-hint {
    margin-top: var(--space-5);
    padding: var(--space-4) var(--space-5);
    background: rgba(201, 164, 48, 0.06);
    border: 1px solid rgba(201, 164, 48, 0.2);
    border-radius: var(--radius-md);
  }

  .potw-hint-label {
    display: block;
    font-size: var(--text-xs);
    font-weight: var(--weight-semibold);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: var(--space-2);
  }

  .potw-hint-math {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    line-height: var(--leading-relaxed);
  }

  .potw-solution {
    margin-top: var(--space-6);
    border-top: 1px solid var(--color-border-light);
    padding-top: var(--space-6);
  }

  .potw-solution-header {
    margin-bottom: var(--space-3);
  }

  .potw-solution-label {
    font-size: var(--text-xs);
    font-weight: var(--weight-semibold);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-accent);
  }

  .potw-solution-body {
    font-size: var(--text-base);
    line-height: var(--leading-relaxed);
  }

  @media (max-width: 900px) {
    .about-inner {
      grid-template-columns: 1fr;
    }
    .about-gallery {
      flex-direction: column;
    }
    .recent-slides-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .summer-camp-inner {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .hero-title {
      letter-spacing: -0.01em;
    }
    .recent-slides-grid,
    .activities-teaser-grid {
      grid-template-columns: 1fr;
    }
    .section-header {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
