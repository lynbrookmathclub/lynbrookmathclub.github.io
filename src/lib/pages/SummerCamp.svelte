<script lang="ts">
  import { onMount } from "svelte";
  import katex from "katex";
  import type { CampInstructor } from "../data/summerCamp";
  import {
    campInstructors,
    campCurriculum,
    campDetails,
    CAMP_EMAIL,
    CAMP_SIGNUP_URL,
  } from "../data/summerCamp";

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "schedule", label: "Schedule & Info" },
    { id: "instructors", label: "Instructors" },
  ];

  let activeSection = "overview";
  let instructorColumns = 4;
  let instructorRows: CampInstructor[][] = [];

  const subjectColors: Record<string, string> = {
    alg: "#1b2a5c",
    combo: "#6d28d9",
    nt: "#065f46",
    geo: "#92400e",
  };

  function renderKatex(expr: string): string {
    try {
      return katex.renderToString(expr, {
        throwOnError: false,
        displayMode: false,
      });
    } catch {
      return expr;
    }
  }

  function scrollTo(id: string) {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    activeSection = id;
  }

  function chunk<T>(items: T[], size: number): T[][] {
    const rows: T[][] = [];
    for (let i = 0; i < items.length; i += size) {
      rows.push(items.slice(i, i + size));
    }
    return rows;
  }

  $: instructorRows = chunk(campInstructors, instructorColumns);

  onMount(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      instructorColumns = width >= 1100 ? 4 : width >= 900 ? 3 : width >= 700 ? 2 : 1;
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  });
</script>

<div class="page-header">
  <div class="container page-header-inner animate-fade-up">
    <h1 class="page-header-title">
      Math Honor Society
      <span class="title-camp">Summer Camp</span>
    </h1>
    <p class="page-header-subtitle">
      A week-long competition math camp for middle schoolers, hosted by Lynbrook
      High School's Math Honor Society.
    </p>
    <div class="hero-actions">
      <a
        href={CAMP_SIGNUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn--accent hero-cta"
      >
        Register Now
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
      <a href="mailto:{CAMP_EMAIL}" class="btn btn--secondary hero-cta-sec"
        >Email Us</a
      >
    </div>
  </div>
</div>

<nav class="section-nav" aria-label="Page sections">
  <div class="container section-nav-inner">
    {#each sections as s}
      <button
        class="section-nav-link"
        class:section-nav-link--active={activeSection === s.id}
        on:click={() => scrollTo(s.id)}
        type="button">{s.label}</button
      >
    {/each}
  </div>
</nav>

<section id="overview" class="section overview-section">
  <div class="container overview-inner">
    <div class="overview-text">
      <h2 class="section-title">About the Camp</h2>
      <p class="body-text">
        Join Lynbrook High School's Math Honor Society for an exciting week of
        competition math this summer. All middle school students with an
        interest in math are welcome.
      </p>
      <p class="body-text">
        Our camp covers the four core subjects of competition math:
        <strong>Algebra, Counting, Number Theory</strong>, and
        <strong>Geometry</strong>, all at the AMC 8 / MATHCOUNTS level. Each day
        will include direct instruction, worked examples, and focused problem
        sets for students to build problem-solving instincts.
      </p>

      <div class="what-students-do">
        <h3 class="what-title">Students will</h3>
        <ul class="what-list">
          <li>Build strong math foundations from the ground up</li>
          <li>Learn problem-solving techniques used in competitions</li>
          <li>Improve performance on AMC 8 and MATHCOUNTS</li>
          <li>
            Develop mathematical thinking skills that carry into future
            coursework
          </li>
        </ul>

        <div class="flyer-cta-block overview-cta-block">
          <a
            href={CAMP_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn--accent flyer-cta-btn"
          >
            Sign Up Here
          </a>
          <p class="flyer-cta-url">{CAMP_SIGNUP_URL}</p>
          <p class="flyer-spots">
            Spots are limited. Registration is first-come, first-served.
          </p>
        </div>
      </div>
    </div>

    <div class="overview-flyer-wrap">
      <img
        src="/summer-camp-flyer.png"
        alt="Lynbrook Math Honor Society Summer Camp flyer"
        class="overview-flyer"
      />
    </div>
  </div>
</section>

<section id="curriculum" class="section curriculum-section surface-alt">
  <div class="container">
    <div class="section-header-block">
      <h2 class="section-title">Curriculum</h2>
      <p class="section-subtitle">
        Four subjects taught at the AMC 8 / MATHCOUNTS level, covering a wide
        range of topics that appear in middle school math competitions.
      </p>
    </div>

    <div class="curriculum-table">
      {#each campCurriculum as subject, i}
        {@const color = subjectColors[subject.id] ?? "#1b2a5c"}
        <div
          class="curriculum-row animate-fade-up"
          style="animation-delay:{i * 60}ms"
        >
          <div class="curriculum-label-col" style="color:{color}">
            <span class="curriculum-symbol" aria-hidden="true"
              >{@html renderKatex(subject.symbol)}</span
            >
            <span class="curriculum-subject-name">{subject.label}</span>
          </div>
          <ul class="curriculum-topics">
            {#each subject.topics as topic}
              <li>{topic}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>

<section id="schedule" class="section schedule-section">
  <div class="container schedule-inner">
    <div class="info-block">
      <h2 class="section-title">Schedule &amp; Info</h2>

      <dl class="info-dl">
        {#each campDetails as d}
          <div class="info-row">
            <dt class="info-dt">{d.label}</dt>
            <dd class="info-dd">{d.value}</dd>
          </div>
        {/each}
        <div class="info-row">
          <dt class="info-dt">Audience</dt>
          <dd class="info-dd">
            Middle school students interested in competition math
          </dd>
        </div>
        <div class="info-row">
          <dt class="info-dt">Contact</dt>
          <dd class="info-dd">
            <a href="mailto:{CAMP_EMAIL}" class="info-link">{CAMP_EMAIL}</a>
          </dd>
        </div>
      </dl>

      <a
        href={CAMP_SIGNUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn--accent"
      >
        Register Now
      </a>

      <p class="disclaimer">
        All details including dates, times, location, cost, and curriculum are
        subject to change.
      </p>
    </div>

    <div class="sched-block">
      <p class="body-text">
        Each day runs from <strong>9:00 AM to 5:00 PM</strong>. Lunch is provided and students will be supervised. 
      </p>

      <h3 class="sched-heading">Daily Schedule (Tentative)</h3>
      <table class="sched-table">
        <tbody>
          <tr
            ><td class="sched-time">9:00 AM - 10:30 AM</td><td class="sched-desc"
              >Algebra</td
            ></tr
          >
          <tr
            ><td class="sched-time">10:30 AM - 10:45 AM</td><td class="sched-desc"
              >Break</td
            ></tr
          >
          <tr
            ><td class="sched-time">10:45 AM - 12:15 PM</td><td class="sched-desc"
              >Combinatorics</td
            ></tr
          >
          <tr
            ><td class="sched-time">12:15 PM - 1:15 PM</td><td class="sched-desc"
              >Lunch</td
            ></tr
          >
          <tr
            ><td class="sched-time">1:15 PM - 2:45 PM</td><td class="sched-desc"
              >Geometry</td
            ></tr
          >
          <tr
            ><td class="sched-time">2:45 PM - 3:00 PM</td><td class="sched-desc"
              >Break</td
            ></tr
          >
          <tr
            ><td class="sched-time">3:00 PM - 4:30 PM</td><td class="sched-desc"
              >Number Theory</td
            ></tr
          >
          <tr
            ><td class="sched-time">4:30 PM - 5:00 PM</td><td class="sched-desc"
              >Review</td
            ></tr
          >
        </tbody>
      </table>
    </div>
  </div>
</section>

<section id="instructors" class="section instructors-section surface-alt">
  <div class="container">
    <div class="section-header-block">
      <h2 class="section-title">Instructors</h2>
      <p class="section-subtitle">
        Instructors are Lynbrook Math Honor Society members with strong
        backgrounds and significant achievements in competitive mathematics.
      </p>
    </div>

    <div
      class="instructors-grid"
      style="--instructor-columns: {instructorColumns}"
    >
      {#each instructorRows as row, rowIndex}
        <div class="instructor-row">
          {#each row as instructor, i}
            <article
              class="instructor-card animate-fade-up"
              style="animation-delay:{(rowIndex * instructorColumns + i) * 70}ms"
            >
              <div class="instr-photo-wrap">
                {#if instructor.photoUrl}
                  <img
                    src={instructor.photoUrl}
                    alt={instructor.name}
                    class="instr-photo"
                  />
                {:else}
                  <div class="instr-photo-placeholder" aria-hidden="true">
                    <span class="instr-initials">
                      {instructor.name
                        .trim()
                        .split(" ")
                        .map((w: string) => w[0])
                        .join("")}
                    </span>
                  </div>
                {/if}
              </div>
              <div class="instr-info">
                <h3 class="instr-name">{instructor.name}</h3>
                <span class="instr-role">{instructor.role}</span>
                <ul class="instr-achievements">
                  {#each instructor.achievements as ach}
                    <li>{ach}</li>
                  {/each}
                </ul>
              </div>
            </article>
          {/each}
        </div>
        {#if rowIndex < instructorRows.length - 1}
          <div class="instructor-row-divider" aria-hidden="true"></div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<section class="section cta-section">
  <div class="container cta-inner">
    <div class="cta-text">
      <h2 class="cta-heading">Ready to level up your math?</h2>
      <p class="cta-sub">
        Space is limited. Register today to secure your spot. All details
        subject to change.
      </p>
    </div>
    <div class="cta-actions">
      <a
        href={CAMP_SIGNUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn--accent cta-btn"
      >
        Register Now
      </a>
      <a href="mailto:{CAMP_EMAIL}" class="btn btn--secondary cta-btn-sec">
        Email Us
      </a>
    </div>
  </div>
</section>

<style>
  .page-header {
    background: var(--color-primary);
    padding: var(--space-16) 0 var(--space-12);
  }
  .page-header-title {
    font-family: var(--font-display);
    font-size: var(--text-5xl);
    font-weight: var(--weight-semibold);
    color: white;
    line-height: var(--leading-snug);
    letter-spacing: -0.02em;
    margin-bottom: var(--space-4);
  }
  .title-camp {
    display: block;
    color: var(--color-accent);
  }
  .page-header-subtitle {
    font-size: var(--text-lg);
    color: rgba(255, 255, 255, 0.65);
    max-width: 600px;
    line-height: var(--leading-relaxed);
    margin-bottom: var(--space-8);
  }
  .hero-actions {
    display: flex;
    gap: var(--space-3);
    flex-wrap: wrap;
  }
  .hero-cta {
    font-size: var(--text-base);
    padding: var(--space-4) var(--space-6);
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
  }
  .hero-cta svg {
    width: 16px;
    height: 16px;
  }
  .hero-cta-sec {
    font-size: var(--text-base);
    padding: var(--space-4) var(--space-6);
    color: rgba(255, 255, 255, 0.8);
    border-color: rgba(255, 255, 255, 0.25);
  }
  .hero-cta-sec:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    color: white;
  }

  .section-nav {
    position: sticky;
    top: var(--nav-height);
    z-index: 50;
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
    box-shadow: 0 1px 8px rgba(27, 42, 92, 0.06);
  }
  .section-nav-inner {
    display: flex;
    overflow-x: auto;
  }
  .section-nav-link {
    padding: var(--space-4) var(--space-5);
    font-size: var(--text-sm);
    font-weight: var(--weight-medium);
    color: var(--color-text-muted);
    border-bottom: 2px solid transparent;
    white-space: nowrap;
    background: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    cursor: pointer;
    transition:
      color var(--transition-fast),
      border-color var(--transition-fast);
  }
  .section-nav-link:hover {
    color: var(--color-primary);
  }
  .section-nav-link--active {
    color: var(--color-primary);
    border-bottom-color: var(--color-accent);
    font-weight: var(--weight-semibold);
  }
  .section-title {
    font-family: var(--font-display);
    font-size: var(--text-3xl);
    font-weight: var(--weight-semibold);
    color: var(--color-primary-dark);
    letter-spacing: -0.01em;
    margin-bottom: var(--space-5);
  }
  .section-header-block {
    margin-bottom: var(--space-10);
  }
  .section-subtitle {
    font-size: var(--text-lg);
    color: var(--color-text-muted);
    max-width: 620px;
    line-height: var(--leading-relaxed);
    margin-top: var(--space-2);
  }
  .body-text {
    color: var(--color-text-muted);
    line-height: var(--leading-relaxed);
    margin-bottom: var(--space-4);
  }
  .surface-alt {
    background: var(--color-surface-alt);
  }
  .disclaimer {
    font-size: var(--text-sm);
    color: var(--color-text-light);
    font-style: italic;
    margin-top: var(--space-5);
    line-height: var(--leading-relaxed);
  }

  .overview-section {
    background: var(--color-surface);
  }
  .overview-inner {
    display: grid;
    grid-template-columns: 1fr 360px;
    gap: var(--space-12);
    align-items: start;
  }
  .what-title {
    font-size: var(--text-base);
    font-weight: var(--weight-semibold);
    color: var(--color-primary-dark);
    margin-bottom: var(--space-2);
    margin-top: var(--space-2);
  }
  .what-list {
    list-style: disc;
    padding-left: var(--space-5);
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }
  .what-list li {
    font-size: var(--text-base);
    color: var(--color-text-muted);
    line-height: var(--leading-normal);
  }

  .overview-flyer-wrap {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    position: sticky;
    top: calc(var(--nav-height) + 56px);
  }
  .overview-flyer {
    width: 100%;
    height: auto;
    display: block;
  }
  .flyer-cta-block {
    margin-top: var(--space-6);
    padding: var(--space-5) var(--space-6);
    background: var(--color-primary);
    border-radius: var(--radius-xl);
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    align-items: flex-start;
    width: fit-content;
    max-width: 500px;
  }
  .overview-cta-block {
    margin-top: var(--space-8);
    align-self: flex-start;
  }
  .flyer-cta-btn {
    width: 100%;
    justify-content: center;
    font-size: var(--text-base);
  }
  .flyer-cta-url {
    font-size: var(--text-xs);
    color: rgba(255, 255, 255, 0.5);
    font-family: monospace;
    word-break: break-all;
  }
  .flyer-spots {
    font-size: var(--text-xs);
    color: rgba(255, 255, 255, 0.55);
    line-height: 1.4;
    font-weight: var(--weight-semibold);
  }

  .curriculum-section {
    background: var(--color-surface-alt);
  }
  .curriculum-table {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
  }
  .curriculum-row {
    display: grid;
    grid-template-columns: 200px 1fr;
    padding: 0;
    gap: var(--space-7);
    align-items: start;
  }
  .curriculum-label-col {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--space-3);
    opacity: 0.9;
    min-width: 0;
  }
  .curriculum-symbol {
    display: inline-block;
    font-size: 1.4rem;
    line-height: 1;
    margin-right: var(--space-1);
    flex-shrink: 0;
  }
  .curriculum-label-col :global(.katex) {
    font-size: 1rem;
  }
  .curriculum-subject-name {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: var(--weight-semibold);
    letter-spacing: -0.01em;
    line-height: 1.1;
    white-space: nowrap;
  }
  .curriculum-topics {
    list-style: disc;
    padding-left: var(--space-5);
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }
  .curriculum-topics li {
    font-size: var(--text-base);
    color: var(--color-text-muted);
    line-height: var(--leading-snug);
  }

  .schedule-section {
    background: var(--color-surface);
  }
  .schedule-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-16);
    align-items: start;
  }
  .info-dl {
    display: flex;
    flex-direction: column;
    margin-bottom: var(--space-6);
  }
  .info-row {
    display: flex;
    gap: var(--space-6);
    padding: var(--space-2) 0;
    align-items: baseline;
  }
  .info-dt {
    font-size: var(--text-sm);
    font-weight: var(--weight-semibold);
    color: var(--color-primary);
    width: 76px;
    flex-shrink: 0;
  }
  .info-dd {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    line-height: var(--leading-relaxed);
  }
  .info-link {
    color: var(--color-primary);
    text-decoration: underline;
  }

  .sched-block {
    padding-top: calc(var(--space-5) + 2.25rem);
  }
  .sched-heading {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: var(--weight-semibold);
    color: var(--color-primary-dark);
    margin: 0 0 var(--space-3);
  }
  .sched-table {
    width: 100%;
    border-collapse: collapse;
  }
  .sched-table tr {
    border-bottom: 1px solid var(--color-border-light);
  }
  .sched-time {
    padding: var(--space-2) var(--space-4) var(--space-2) 0;
    font-size: var(--text-sm);
    font-weight: var(--weight-medium);
    color: var(--color-primary);
    white-space: nowrap;
    width: 55%;
  }
  .sched-desc {
    padding: var(--space-2) 0;
    font-size: var(--text-sm);
    color: var(--color-text-muted);
  }

  .instructors-section {
    background: var(--color-surface-alt);
  }
  .instructors-grid {
    display: flex;
    flex-direction: column;
  }
  .instructor-row {
    display: grid;
    grid-template-columns: repeat(var(--instructor-columns), minmax(0, 1fr));
    gap: var(--space-6);
    align-items: start;
  }
  .instructor-row-divider {
    height: 1px;
    margin: var(--space-6) 0;
    background: rgba(27, 42, 92, 0.24);
    border-radius: 999px;
  }
  .instructor-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--space-4);
  }
  .instr-photo-wrap {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    border: 2px solid var(--color-accent);
  }
  .instr-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .instr-photo-placeholder {
    width: 100%;
    height: 100%;
    background: rgba(27, 42, 92, 0.07);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .instr-initials {
    font-family: var(--font-display);
    font-size: var(--text-3xl);
    font-weight: var(--weight-semibold);
    color: var(--color-primary);
    opacity: 0.5;
  }
  .instr-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-1);
    width: 100%;
  }
  .instr-name {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: var(--weight-semibold);
    color: var(--color-primary-dark);
  }
  .instr-role {
    font-size: var(--text-xs);
    font-weight: var(--weight-semibold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-accent-hover);
    margin-bottom: var(--space-2);
  }
  .instr-achievements {
    list-style: disc;
    text-align: left;
    padding-left: var(--space-5);
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    margin-top: var(--space-1);
  }
  .instr-achievements li {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    line-height: var(--leading-normal);
  }
  .instr-achievements li::marker {
    color: var(--color-accent);
  }
  .cta-section {
    background: var(--color-primary);
  }
  .cta-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-8);
    flex-wrap: wrap;
    padding-top: var(--space-12);
    padding-bottom: var(--space-12);
  }
  .cta-heading {
    font-family: var(--font-display);
    font-size: var(--text-3xl);
    color: white;
    margin-bottom: var(--space-3);
    letter-spacing: -0.01em;
  }
  .cta-sub {
    font-size: var(--text-base);
    color: rgba(255, 255, 255, 0.6);
    max-width: 460px;
    line-height: var(--leading-relaxed);
  }
  .cta-actions {
    display: flex;
    gap: var(--space-3);
    flex-wrap: wrap;
  }
  .cta-btn {
    font-size: var(--text-base);
    padding: var(--space-4) var(--space-8);
    white-space: nowrap;
    flex-shrink: 0;
  }
  .cta-btn-sec {
    font-size: var(--text-base);
    padding: var(--space-4) var(--space-8);
    color: rgba(255, 255, 255, 0.8);
    border-color: rgba(255, 255, 255, 0.25);
    white-space: nowrap;
  }
  .cta-btn-sec:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    color: white;
  }

  @media (max-width: 1000px) {
    .overview-inner {
      grid-template-columns: 1fr;
    }
    .overview-flyer-wrap {
      position: static;
      max-width: 420px;
    }
    .overview-cta-block {
      max-width: 340px;
    }
    .schedule-inner {
      grid-template-columns: 1fr;
    }
    .sched-block {
      padding-top: 0;
    }
  }
  @media (max-width: 700px) {
    .curriculum-row {
      grid-template-columns: 1fr;
      gap: var(--space-3);
    }
    .curriculum-label-col {
      white-space: normal;
    }
    .flyer-cta-block {
      width: 100%;
      max-width: 100%;
    }
    .instructor-row {
      grid-template-columns: repeat(var(--instructor-columns), minmax(0, 1fr));
    }
    .instructor-card {
      align-items: flex-start;
      text-align: left;
    }
    .instr-info {
      align-items: flex-start;
    }
    .cta-inner {
      flex-direction: column;
      text-align: center;
    }
    .cta-actions {
      justify-content: center;
    }
  }
</style>
