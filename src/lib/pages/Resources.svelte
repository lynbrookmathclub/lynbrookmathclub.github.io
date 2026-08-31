<script lang="ts">
  type Handout = {
    code: string;
    title: string;
    file: string;
  };

  type Subject = {
    name: string;
    handouts: Handout[];
  };

  const subjects: Subject[] = [
    {
      name: "Algebra",
      handouts: [
        { code: "A1", title: "Algebra Manipulations", file: "A1.pdf" },
        { code: "A2", title: "Number Sense", file: "A2.pdf" },
        { code: "A3", title: "Word Problems", file: "A3.pdf" },
        { code: "A4", title: "Sequences and Series", file: "A4.pdf" },
        { code: "A5", title: "Quadratics and Vieta's Formulas", file: "A5.pdf" },
      ],
    },
    {
      name: "Combinatorics",
      handouts: [
        { code: "C1", title: "Permutations and Combinations", file: "C1.pdf" },
        { code: "C2", title: "Counting Techniques, Part 1", file: "C2.pdf" },
        { code: "C3", title: "Counting Techniques, Part 2", file: "C3.pdf" },
        { code: "C4", title: "Probability Applications", file: "C4.pdf" },
        { code: "C5", title: "Expected Value", file: "C5.pdf" },
      ],
    },
    {
      name: "Geometry",
      handouts: [
        { code: "G1", title: "Angle Chasing", file: "G1.pdf" },
        { code: "G2", title: "Special Triangles", file: "G2.pdf" },
        { code: "G3", title: "Similarity and Congruence", file: "G3.pdf" },
        { code: "G4", title: "Area Techniques in Geometry", file: "G4.pdf" },
        { code: "G5", title: "Coordinates and 3D", file: "G5.pdf" },
      ],
    },
    {
      name: "Number Theory",
      handouts: [
        { code: "N1", title: "Prime Factorization", file: "N1.pdf" },
        { code: "N2", title: "Divisibility", file: "N2.pdf" },
        { code: "N3", title: "GCD and LCM", file: "N3.pdf" },
        { code: "N4", title: "Base Systems", file: "N4.pdf" },
        { code: "N5", title: "Modular Arithmetic", file: "N5.pdf" },
      ],
    },
  ];

  const resourcePath = "/resources/lmsc-2026";
</script>

<svelte:head>
  <title>Resources | Lynbrook Math Honor Society</title>
  <meta
    name="description"
    content="LMSC 2026 study handouts covering the foundations of AMC 8 and MathCounts competition math."
  />
</svelte:head>

<div class="page-header">
  <div class="container page-header-inner animate-fade-up">
    <h1 class="page-header-title text-section-title">Resources</h1>
    <p class="page-header-subtitle">
      View various handouts and resources from the Lynbrook Math Club.
    </p>
  </div>
</div>

<div class="container resources-page">
  <section class="resources-section animate-fade-up" aria-label="LMSC 2026 handouts">
    <h2 class="resources-title text-section-title">LMSC 2026 Handouts</h2>
    <p class="resources-copy">
      Here are some abridged handouts from LMSC 2026 which go over the basics
      for AMC 8 and MathCounts. Use these as a starting point to guide your
      studies, as they will expose you to the general themes and concepts. It
      is recommended that you Google more about these topics to learn them in
      greater depth, and find related practice problems to test your skills.
      Treat this as an extended study guide.
    </p>

    <div class="handout-matrix">
      {#each subjects as subject, columnIndex}
        <section class="subject-column" aria-labelledby={`subject-${columnIndex}`}>
          <h2 id={`subject-${columnIndex}`} class="subject-name">
            {subject.name}
          </h2>

          <div class="subject-handouts">
            {#each subject.handouts as handout}
              <a
                class="handout-link"
                href={`${resourcePath}/${handout.file}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${handout.code}: ${handout.title} (PDF)`}
              >
                <span class="handout-code">{handout.code}</span>
                <span class="handout-title">{handout.title}</span>
              </a>
            {/each}
          </div>
        </section>
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
    max-width: 640px;
    font-size: var(--text-lg);
    line-height: var(--leading-relaxed);
    color: rgba(255, 255, 255, 0.6);
  }

  .resources-page {
    padding-top: var(--space-12);
    padding-bottom: var(--space-16);
  }

  .resources-title {
    margin-bottom: var(--space-5);
  }

  .resources-copy {
    max-width: 880px;
    margin-bottom: var(--space-10);
    font-size: var(--text-lg);
    color: var(--color-text-muted);
    line-height: var(--leading-relaxed);
  }

  .handout-matrix {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--space-5);
    align-items: start;
  }

  .subject-column {
    min-width: 0;
  }

  .subject-name {
    margin-bottom: 0;
    padding-bottom: var(--space-3);
    font-size: var(--text-xl);
    color: var(--color-primary-dark);
    border-bottom: 2px solid var(--color-primary);
  }

  .subject-handouts {
    display: flex;
    flex-direction: column;
  }

  .handout-link {
    display: grid;
    grid-template-columns: 28px minmax(0, 1fr);
    align-items: center;
    gap: var(--space-2);
    min-height: 40px;
    padding: var(--space-2) 0;
    color: var(--color-text);
    border-bottom: 1px solid var(--color-border);
    transition: color var(--transition-fast);
  }

  .handout-link:last-child {
    border-bottom: none;
  }

  .handout-link:hover {
    color: var(--color-primary);
    text-decoration: underline;
    text-decoration-color: var(--color-accent);
    text-underline-offset: 3px;
  }

  .handout-code {
    font-size: var(--text-xs);
    font-weight: var(--weight-semibold);
    line-height: var(--leading-snug);
    color: var(--color-text-light);
  }

  .handout-title {
    min-width: 0;
    font-size: var(--text-sm);
    font-weight: var(--weight-semibold);
    line-height: var(--leading-snug);
  }

  @media (max-width: 1020px) {
    .handout-matrix {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 680px) {
    .resources-page {
      padding-top: var(--space-10);
    }

    .resources-copy {
      font-size: var(--text-base);
    }

    .handout-matrix {
      grid-template-columns: 1fr;
    }
  }
</style>
