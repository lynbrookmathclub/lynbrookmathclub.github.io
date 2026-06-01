<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { TOPIC_COLORS } from "../data/slides";
  import type { Slide } from "../data/slides";

  export let slide: Slide;
  export let href: string | null = null;
  export let className = "";
  export let delay = 0;

  const dispatch = createEventDispatcher<{ open: Slide }>();

  $: topicColor = TOPIC_COLORS[slide.topic] ?? TOPIC_COLORS["General"];
  $: rootClass = `slide-card ${className}`.trim();

  function formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  function handleClick() {
    if (!href) {
      dispatch("open", slide);
    }
  }
</script>

<svelte:element
  this={href ? "a" : "button"}
  class={rootClass}
  style={delay ? `animation-delay:${delay}ms` : undefined}
  href={href ?? undefined}
  type={href ? undefined : "button"}
  role={href ? "link" : "button"}
  on:click={handleClick}
  aria-label={`Open ${slide.title}`}
>
  <div class="slide-card-header" style="background:{topicColor.bg}">
    <span class="slide-card-topic-label" style="color:{topicColor.text}"
      >{slide.topic}</span
    >
    <span class="slide-card-sym" style="color:rgba(255,255,255,0.08)"
      >{slide.title}</span
    >
  </div>

  <div class="slide-card-body">
    <div class="slide-card-title-row">
      <h3 class="slide-card-title">{slide.title}</h3>
      {#if !slide.googleSlidesId}
        <span class="slide-card-notes-only">No slides</span>
      {/if}
    </div>
    <p class="slide-card-desc">{slide.description}</p>

    <div class="slide-card-footer">
      <span class="slide-card-date">{formatDate(slide.date)}</span>
      <span class="slide-card-semester">{slide.semester}</span>
    </div>
  </div>
</svelte:element>

<style>
  .slide-card {
    text-align: left;
    display: flex;
    flex-direction: column;
    padding: 0;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    background: var(--color-surface);
    font: inherit;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    transition:
      box-shadow var(--transition-base),
      transform var(--transition-base),
      border-color var(--transition-base);
  }

  .slide-card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-3px);
    border-color: transparent;
  }

  .slide-card-header {
    height: 96px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: var(--space-1);
    padding: var(--space-3) var(--space-4);
  }

  .slide-card-sym {
    font-family: var(--font-display);
    font-size: clamp(1.4rem, 2.4vw, 2rem);
    line-height: 0.95;
    color: rgba(255, 255, 255, 0.08);
    max-width: calc(100% - var(--space-3));
    display: -webkit-box;
    line-clamp: 3;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    user-select: none;
    letter-spacing: -0.03em;
  }

  .slide-card-topic-label {
    position: relative;
    z-index: 1;
    font-size: var(--text-xs);
    font-weight: var(--weight-semibold);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .slide-card-body {
    padding: var(--space-4) var(--space-5) var(--space-5);
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    flex: 1;
  }

  .slide-card-title-row {
    display: flex;
    align-items: flex-start;
    gap: var(--space-2);
    flex-wrap: wrap;
  }

  .slide-card-title {
    font-size: var(--text-lg);
    color: var(--color-primary-dark);
    line-height: var(--leading-snug);
    font-weight: var(--weight-semibold);
  }

  .slide-card-desc {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    line-height: var(--leading-relaxed);
    display: -webkit-box;
    line-clamp: 3;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex: 1;
  }

  .slide-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    padding-top: var(--space-3);
    border-top: 1px solid var(--color-border-light);
  }

  .slide-card-date,
  .slide-card-semester {
    font-size: var(--text-xs);
    color: var(--color-text-light);
  }

  .slide-card-notes-only {
    font-size: var(--text-xs);
    color: var(--color-text-light);
    font-style: italic;
    flex-shrink: 0;
    align-self: center;
  }
</style>
