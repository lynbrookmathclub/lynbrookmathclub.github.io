<script lang="ts">
  import { onMount } from "svelte";
  import { slides, semesters, topics, TOPIC_COLORS } from "../data/slides";
  import type { Slide } from "../data/slides";
  import SlideCard from "../components/SlideCard.svelte";
  import SlideModal from "../components/SlideModal.svelte";
  let selectedSemester: string = "All";
  let selectedTopic: string = "All";
  let searchQuery: string = "";
  let activeSlide: Slide | null = null;
  let viewMode: "grid" | "list" = "grid";
  $: filtered = slides.filter((s) => {
    const matchSemester =
      selectedSemester === "All" || s.semester === selectedSemester;
    const matchTopic = selectedTopic === "All" || s.topic === selectedTopic;
    const q = searchQuery.trim().toLowerCase();
    const matchSearch =
      !q ||
      s.title.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.topic.toLowerCase().includes(q);
    return matchSemester && matchTopic && matchSearch;
  });

  function openSlide(s: Slide) {
    activeSlide = s;
    updateSlideQuery(s);
  }
  function closeModal() {
    activeSlide = null;
    updateSlideQuery(null);
  }

  function updateSlideQuery(slide: Slide | null) {
    if (typeof window === "undefined") return;

    const url = new URL(window.location.href);
    if (slide) {
      url.searchParams.set("slide", slide.id);
    } else {
      url.searchParams.delete("slide");
    }

    history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }

  function syncActiveSlideFromUrl() {
    if (typeof window === "undefined") return;

    const slideId = new URL(window.location.href).searchParams.get("slide");
    activeSlide = slideId ? slides.find((s) => s.id === slideId) ?? null : null;
  }

  onMount(() => {
    syncActiveSlideFromUrl();

    const handlePopState = () => {
      syncActiveSlideFromUrl();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  });

  function formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  function clearFilters() {
    selectedSemester = "All";
    selectedTopic = "All";
    searchQuery = "";
  }

  $: hasActiveFilters =
    selectedSemester !== "All" ||
    selectedTopic !== "All" ||
    searchQuery.trim() !== "";
</script>

<div class="page-header">
  <div class="container page-header-inner">
    <div class="animate-fade-up">
      <h1 class="page-header-title text-section-title">Meeting Slides</h1>
      <p class="page-header-subtitle">
        View or review past meeting slides. Future meetings are planned to
        reference or incorporate past meeting content.
      </p>
    </div>
  </div>
</div>

<div class="container slides-page">
  <div class="controls animate-fade-up animate-fade-up-2">
    <div class="controls-search-wrap">
      <svg
        class="controls-search-icon"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        aria-hidden="true"
      >
        <circle cx="8.5" cy="8.5" r="5.5" /><path d="M15 15l-3-3" />
      </svg>
      <input
        class="controls-search"
        type="search"
        placeholder="Search by title, topic, or presenter…"
        bind:value={searchQuery}
        aria-label="Search slides"
      />
    </div>

    <div class="controls-filters">
      <div class="controls-select-wrap">
        <select
          class="controls-select"
          bind:value={selectedSemester}
          aria-label="Filter by semester"
        >
          <option value="All">All Semesters</option>
          {#each semesters as sem}
            <option value={sem}>{sem}</option>
          {/each}
        </select>
        <svg
          class="controls-select-arrow"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M5 7.5L10 12.5L15 7.5" />
        </svg>
      </div>

      <div class="controls-select-wrap">
        <select
          class="controls-select"
          bind:value={selectedTopic}
          aria-label="Filter by topic"
        >
          <option value="All">All Topics</option>
          {#each topics as topic}
            <option value={topic}>{topic}</option>
          {/each}
        </select>
        <svg
          class="controls-select-arrow"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M5 7.5L10 12.5L15 7.5" />
        </svg>
      </div>
    </div>

    <div class="controls-right">
      {#if hasActiveFilters}
        <button class="controls-clear" on:click={clearFilters}>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <line x1="12" y1="4" x2="4" y2="12" /><line
              x1="4"
              y1="4"
              x2="12"
              y2="12"
            />
          </svg>
          Clear
        </button>
      {/if}

      <div class="controls-view-toggle" role="group" aria-label="View mode">
        <button
          class="controls-view-btn"
          class:controls-view-btn--active={viewMode === "grid"}
          on:click={() => (viewMode = "grid")}
          aria-label="Grid view"
          title="Grid view"
        >
          <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <rect x="1" y="1" width="6" height="6" rx="1" /><rect
              x="9"
              y="1"
              width="6"
              height="6"
              rx="1"
            />
            <rect x="1" y="9" width="6" height="6" rx="1" /><rect
              x="9"
              y="9"
              width="6"
              height="6"
              rx="1"
            />
          </svg>
        </button>
        <button
          class="controls-view-btn"
          class:controls-view-btn--active={viewMode === "list"}
          on:click={() => (viewMode = "list")}
          aria-label="List view"
          title="List view"
        >
          <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <rect x="1" y="2" width="14" height="2.5" rx="1" /><rect
              x="1"
              y="6.75"
              width="14"
              height="2.5"
              rx="1"
            />
            <rect x="1" y="11.5" width="14" height="2.5" rx="1" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <p class="results-count animate-fade-up animate-fade-up-2">
    {filtered.length === slides.length
      ? `${slides.length} meetings`
      : `${filtered.length} of ${slides.length} meetings`}
  </p>

  {#if filtered.length === 0}
    <div class="empty-state">
      <span class="empty-state-icon">∅</span>
      <p class="empty-state-msg">No meeting match your search.</p>
      <button class="btn btn--ghost" on:click={clearFilters}
        >Clear filters</button
      >
    </div>
  {:else if viewMode === "grid"}
    <div class="slides-grid">
      {#each filtered as slide, i}
        <SlideCard
          {slide}
          className="animate-fade-up"
          delay={Math.min(i, 8) * 40}
          on:open={(event) => openSlide(event.detail)}
        />
      {/each}
    </div>
  {:else}
    <div class="slides-list">
      {#each filtered as slide, i}
        {@const tc = TOPIC_COLORS[slide.topic] ?? TOPIC_COLORS["General"]}
        <button
          class="slide-row animate-fade-up"
          style="animation-delay:{Math.min(i, 12) * 30}ms"
          on:click={() => openSlide(slide)}
          aria-label="Open {slide.title}"
        >
          <div class="slide-row-dot" style="background:{tc.bg}"></div>
          <div class="slide-row-info">
            <span class="slide-row-title">
              {slide.title}
              {#if !slide.googleSlidesId}
                <span class="slide-row-notes-only"> · No slides</span>
              {/if}
            </span>
            <span class="slide-row-desc">{slide.description}</span>
          </div>
          <div class="slide-row-meta">
            <span class="slide-row-topic" style="color:{tc.bg}"
              >{slide.topic}</span
            >
            <span class="slide-row-date">{formatDate(slide.date)}</span>
          </div>
          <svg
            class="slide-row-arrow"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <polyline points="7,4 13,10 7,16" />
          </svg>
        </button>
      {/each}
    </div>
  {/if}
</div>

{#if activeSlide}
  <SlideModal
    slide={activeSlide}
    allSlides={filtered}
    on:close={closeModal}
    on:navigate={(event) => openSlide(event.detail)}
  />
{/if}

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

  .slides-page {
    padding-top: var(--space-10);
    padding-bottom: var(--space-12);
  }

  .controls {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    flex-wrap: wrap;
    margin-bottom: var(--space-4);
  }

  .controls-search-wrap {
    position: relative;
    flex: 1;
    min-width: 220px;
  }

  .controls-search-icon {
    position: absolute;
    left: var(--space-3);
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    color: var(--color-text-muted);
    pointer-events: none;
  }

  .controls-search {
    width: 100%;
    padding: var(--space-3) var(--space-4) var(--space-3)
      calc(var(--space-3) + 20px);
    font-family: var(--font-body);
    font-size: var(--text-sm);
    color: var(--color-text);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    transition: border-color var(--transition-fast);
    outline: none;
  }

  .controls-search:focus {
    border-color: var(--color-primary);
  }

  .controls-search::placeholder {
    color: var(--color-text-light);
  }

  .controls-filters {
    display: flex;
    gap: var(--space-3);
    flex-wrap: wrap;
  }

  .controls-select-wrap {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .controls-select {
    min-width: 0;
    padding: var(--space-3) calc(var(--space-8) + var(--space-3)) var(--space-3)
      var(--space-4);
    font-family: var(--font-body);
    font-size: var(--text-sm);
    color: var(--color-text);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: border-color var(--transition-fast);
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .controls-select:focus {
    border-color: var(--color-primary);
  }

  .controls-select-arrow {
    position: absolute;
    right: var(--space-4);
    width: 14px;
    height: 14px;
    color: var(--color-text-muted);
    pointer-events: none;
  }

  .controls-right {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-left: auto;
  }

  .controls-clear {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    font-size: var(--text-sm);
    font-weight: var(--weight-medium);
    color: var(--color-text-muted);
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    transition: all var(--transition-fast);
  }

  .controls-clear:hover {
    color: var(--color-text);
    border-color: var(--color-text-muted);
  }
  .controls-clear svg {
    width: 12px;
    height: 12px;
  }

  .controls-view-toggle {
    display: flex;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    overflow: hidden;
  }

  .controls-view-btn {
    padding: var(--space-2) var(--space-3);
    color: var(--color-text-muted);
    transition: all var(--transition-fast);
    background: var(--color-surface);
  }

  .controls-view-btn:hover {
    background: var(--color-surface-alt);
    color: var(--color-text);
  }
  .controls-view-btn--active {
    background: var(--color-primary);
    color: white;
  }
  .controls-view-btn svg {
    width: 16px;
    height: 16px;
    display: block;
  }

  .results-count {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    margin-bottom: var(--space-6);
  }
  .slides-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--space-5);
  }

  .slides-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .slide-row {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-4) var(--space-5);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    text-align: left;
    cursor: pointer;
    transition: all var(--transition-fast);
    width: 100%;
  }

  .slide-row:hover {
    border-color: var(--color-primary);
    background: rgba(27, 42, 92, 0.02);
  }

  .slide-row-dot {
    width: 10px;
    height: 10px;
    border-radius: var(--radius-full);
    flex-shrink: 0;
  }

  .slide-row-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .slide-row-title {
    font-size: var(--text-base);
    font-weight: var(--weight-semibold);
    color: var(--color-primary-dark);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .slide-row-desc {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .slide-row-meta {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    flex-shrink: 0;
  }

  .slide-row-date {
    font-size: var(--text-xs);
    color: var(--color-text-light);
    white-space: nowrap;
  }

  .slide-row-arrow {
    width: 16px;
    height: 16px;
    color: var(--color-text-light);
    flex-shrink: 0;
  }

  .slide-row-notes-only {
    font-size: var(--text-xs);
    color: var(--color-text-light);
    font-style: italic;
  }

  .slide-row-topic {
    font-size: var(--text-xs);
    font-weight: var(--weight-semibold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .empty-state {
    text-align: center;
    padding: var(--space-20) var(--space-4);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-4);
  }

  .empty-state-icon {
    font-family: var(--font-display);
    font-size: 4rem;
    color: var(--color-text-light);
  }

  .empty-state-msg {
    font-size: var(--text-lg);
    color: var(--color-text-muted);
  }

  @media (max-width: 720px) {
    .slide-row-meta {
      display: none;
    }

    .controls {
      flex-direction: column;
      align-items: stretch;
    }

    .controls-right {
      margin-left: 0;
      justify-content: flex-end;
    }
  }
</style>
