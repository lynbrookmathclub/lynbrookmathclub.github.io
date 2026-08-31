<script lang="ts"></script>

<div class="not-found">
  <span class="not-found-symbol" aria-hidden="true">∄</span>
  <h1 class="not-found-title">Page Not Found</h1>
  <p class="not-found-msg">
    This page doesn't exist, or maybe it never did. (Proof by contradiction:
    assume it exists…)
  </p>
  <a href="/" class="btn btn--primary">← Back to Home</a>
</div>

<style>
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 60vh;
    gap: var(--space-5);
    padding: var(--space-16) var(--space-4);
  }

  .not-found-symbol {
    font-family: var(--font-display);
    font-size: 6rem;
    color: var(--color-primary);
    opacity: 0.15;
    line-height: 1;
  }

  .not-found-title {
    font-size: var(--text-4xl);
    color: var(--color-primary-dark);
  }

  .not-found-msg {
    font-size: var(--text-lg);
    color: var(--color-text-muted);
    max-width: 400px;
    line-height: var(--leading-relaxed);
  }
</style>
