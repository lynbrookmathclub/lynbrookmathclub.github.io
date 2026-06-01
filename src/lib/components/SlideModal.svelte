<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  import { TOPIC_COLORS } from "../data/slides";
  import type { Slide } from "../data/slides";

  export let slide: Slide;
  export let allSlides: Slide[];

  const dispatch = createEventDispatcher<{
    close: void;
    navigate: Slide;
  }>();

  $: currentIndex = allSlides.findIndex((s) => s.id === slide.id);
  $: hasPrev = currentIndex > 0;
  $: hasNext = currentIndex < allSlides.length - 1;
  $: topicColor = TOPIC_COLORS[slide.topic] ?? TOPIC_COLORS["General"];
  $: hasEmbed = Boolean(slide.googleSlidesId);

  function close() {
    dispatch("close");
  }
  function prev() {
    if (hasPrev) dispatch("navigate", allSlides[currentIndex - 1]);
  }
  function next() {
    if (hasNext) dispatch("navigate", allSlides[currentIndex + 1]);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  }

  function formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  onMount(() => {
    document.body.style.overflow = "hidden";
    (document.getElementById("slide-modal") as HTMLElement)?.focus();
  });
  onDestroy(() => {
    document.body.style.overflow = "";
  });
</script>

<svelte:window on:keydown={handleKeydown} />

<div
  class="modal-backdrop"
  transition:fade={{ duration: 200 }}
  on:click={close}
  on:keydown={(e) => e.key === "Enter" && close()}
  role="button"
  tabindex="-1"
  aria-label="Close slide viewer"
></div>

<div
  id="slide-modal"
  class="modal"
  role="dialog"
  aria-modal="true"
  aria-label={slide.title}
  tabindex="-1"
  transition:fade={{ duration: 200 }}
>
  <div class="modal-header">
    <div class="modal-meta">
      <span
        class="modal-topic"
        style="background:{topicColor.bg}; color:{topicColor.text}"
        >{slide.topic}</span
      >
      <span class="modal-semester">{slide.semester}</span>
      <span class="modal-date">{formatDate(slide.date)}</span>
    </div>
    <button class="modal-close" on:click={close} aria-label="Close">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        aria-hidden="true"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </div>

  <h2 class="modal-title">{slide.title}</h2>
  {#if slide.description}
    <p class="modal-description">{slide.description}</p>
  {/if}

  {#if hasEmbed}
    <div class="modal-embed-wrap">
      <iframe
        class="modal-embed"
        src={`https://docs.google.com/presentation/d/${slide.googleSlidesId}/embed?start=false&loop=false&rm=minimal`}
        title={slide.title}
        frameborder="0"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>
  {/if}

  {#if slide.textContent}
    <p class="modal-description modal-text-content">{slide.textContent}</p>
  {/if}

  <div class="modal-nav">
    <button
      class="modal-nav-btn"
      on:click={prev}
      disabled={!hasPrev}
      aria-label="Previous meeting"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <polyline points="15,18 9,12 15,6" />
      </svg>
      Previous
    </button>

    <span class="modal-counter">{currentIndex + 1} / {allSlides.length}</span>

    <button
      class="modal-nav-btn modal-nav-btn--next"
      on:click={next}
      disabled={!hasNext}
      aria-label="Next meeting"
    >
      Next
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <polyline points="9,18 15,12 9,6" />
      </svg>
    </button>
  </div>
</div>

<style>
  .modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 200;
    background: rgba(10, 15, 35, 0.75);
    backdrop-filter: blur(4px);
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 201;
    width: min(92vw, 1000px);
    max-height: 92vh;
    background: var(--color-surface);
    border-radius: var(--radius-xl);
    overflow-y: auto;
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    outline: none;
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-5) var(--space-6) 0;
    gap: var(--space-4);
  }

  .modal-meta {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    flex-wrap: wrap;
  }

  .modal-topic {
    font-size: var(--text-xs);
    font-weight: var(--weight-semibold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 3px var(--space-3);
    border-radius: var(--radius-full);
  }

  .modal-semester,
  .modal-date {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
  }

  .modal-semester::before {
    content: "·";
    margin-right: var(--space-2);
  }

  .modal-close {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    color: var(--color-text-muted);
    transition:
      color var(--transition-fast),
      background var(--transition-fast);
    flex-shrink: 0;
  }

  .modal-close:hover {
    color: var(--color-text);
    background: var(--color-surface-alt);
  }
  .modal-close svg {
    width: 18px;
    height: 18px;
  }

  .modal-title {
    font-size: var(--text-2xl);
    padding: var(--space-3) var(--space-6) 0;
    color: var(--color-primary-dark);
  }

  .modal-description {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    padding: var(--space-2) var(--space-6);
    line-height: var(--leading-relaxed);
  }

  .modal-embed-wrap {
    position: relative;
    aspect-ratio: 16 / 9;
    margin: var(--space-5) var(--space-6);
  }

  .modal-embed {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    background: var(--color-surface-alt);
  }

  .modal-text-content {
    white-space: pre-wrap;
  }

  .modal-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-4) var(--space-6) var(--space-5);
    border-top: 1px solid var(--color-border-light);
  }

  .modal-nav-btn {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-sm);
    font-weight: var(--weight-medium);
    color: var(--color-text-muted);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    transition: all var(--transition-fast);
    background: var(--color-surface);
  }

  .modal-nav-btn:hover:not(:disabled) {
    color: var(--color-primary);
    border-color: var(--color-primary);
    background: rgba(27, 42, 92, 0.04);
  }

  .modal-nav-btn:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
  .modal-nav-btn svg {
    width: 16px;
    height: 16px;
  }

  .modal-counter {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
  }
  @media (max-width: 600px) {
    .modal {
      width: 100vw;
      max-height: 100dvh;
      top: auto;
      left: 0;
      right: 0;
      bottom: 0;
      transform: none;
      border-radius: var(--radius-xl) var(--radius-xl) 0 0;
    }
  }
</style>
