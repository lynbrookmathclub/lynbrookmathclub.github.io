<script lang="ts">
  export let src: string | undefined = undefined;
  export let alt = '';
  export let tone = '#1b2a5c';
  export let aspectRatio = '4 / 3';
  export let className = '';

  let broken = false;
  let lastSrc: string | undefined = src;

  $: if (src !== lastSrc) {
    lastSrc = src;
    broken = false;
  }

  function handleError() {
    broken = true;
  }
</script>

<div
  class={`visual-frame ${className}`.trim()}
  style={`--visual-tone:${tone}; aspect-ratio:${aspectRatio};`}
>
  {#if src && !broken}
    <img class="visual-frame-image" {src} {alt} on:error={handleError} />
  {/if}
</div>

<style>
  .visual-frame {
    position: relative;
    overflow: hidden;
    border-radius: var(--radius-lg);
    border: 1px solid rgba(255, 255, 255, 0.08);
    background:
      radial-gradient(circle at top left, rgba(255, 255, 255, 0.14), transparent 42%),
      linear-gradient(135deg, color-mix(in srgb, var(--visual-tone) 88%, black), var(--visual-tone));
  }

  .visual-frame-image,
  .visual-frame-fallback {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .visual-frame-image {
    object-fit: cover;
    display: block;
  }

  .visual-frame-fallback {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--space-4);
    background:
      linear-gradient(180deg, rgba(15, 26, 61, 0.1), rgba(15, 26, 61, 0.65)),
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1), transparent 28%);
    color: white;
  }

  .visual-frame-fallback-copy {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

</style>
