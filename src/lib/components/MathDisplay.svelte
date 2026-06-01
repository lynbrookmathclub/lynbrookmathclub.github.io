<script lang="ts">
  import katex from "katex";

  export let content: string = "";
  export let displayMode: boolean = false;
  function renderMath(text: string): string {
    if (!text) return "";

    if (displayMode) {
      try {
        return katex.renderToString(text, {
          displayMode: true,
          throwOnError: false,
        });
      } catch {
        return text;
      }
    }

    let result = text;
    result = result.replace(/\$\$([\s\S]+?)\$\$/g, (_, math) => {
      try {
        return katex.renderToString(math.trim(), {
          displayMode: true,
          throwOnError: false,
        });
      } catch {
        return `$$${math}$$`;
      }
    });

    result = result.replace(/\$([^$\n]+?)\$/g, (_, math) => {
      try {
        return katex.renderToString(math.trim(), {
          displayMode: false,
          throwOnError: false,
        });
      } catch {
        return `$${math}$`;
      }
    });

    result = result.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

    result = result.replace(/\n\n/g, "</p><p>");
    result = `<p>${result}</p>`;

    return result;
  }

  $: rendered = renderMath(content);
</script>

<div class="math-content">
  {@html rendered}
</div>

<style>
  .math-content {
    line-height: var(--leading-relaxed);
  }
  .math-content :global(.katex-display) {
    margin: var(--space-4) 0;
    overflow-x: auto;
    padding: var(--space-2) 0;
  }

  .math-content :global(.katex) {
    font-size: 1.05em;
  }
  .math-content :global(p) {
    margin-bottom: var(--space-3);
  }
  .math-content :global(p:last-child) {
    margin-bottom: 0;
  }
</style>
