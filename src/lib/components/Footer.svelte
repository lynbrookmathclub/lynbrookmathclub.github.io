<footer class="footer">
  <div class="container footer-inner">
    <div class="footer-brand">
      <div class="footer-logo">
        <div>
          <div class="footer-school">Lynbrook</div>
          <div class="footer-club">Math Honor Society</div>
        </div>
      </div>

      <div class="footer-socials">
        <a
          href="https://www.instagram.com/lynbrookmathclub/"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-social-link"
          aria-label="Instagram"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="5" />
            <circle
              cx="17.5"
              cy="6.5"
              r="1"
              fill="currentColor"
              stroke="none"
            />
          </svg>
          <span>@lynbrookmathclub</span>
        </a>

        <a
          href="mailto:lynbrookmath@gmail.com"
          class="footer-social-link"
          aria-label="Email"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="2,4 12,13 22,4" />
          </svg>
          <span>lynbrookmath@gmail.com</span>
        </a>

        <a
          href="https://discord.gg/fSBUQANXXU"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-social-link"
          aria-label="Discord"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.082.114 18.108.136 18.12a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
            />
          </svg>
          <span>Join our Discord</span>
        </a>
      </div>
    </div>

    <div class="footer-info">
      <div class="footer-info-item">
        <span class="footer-info-label">When</span>
        <span>Tuesdays &#8745; Lunch</span>
      </div>
      <div class="footer-info-item">
        <span class="footer-info-label">Room</span>
        <span>022</span>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container footer-bottom-inner">
      <span>© 2026 Lynbrook Math Club</span>
      <span class="footer-bottom-note"
        >Made by students of Lynbrook High School</span
      >
    </div>
  </div>
</footer>

<style>
  .footer {
    background: var(--color-primary-dark);
    color: rgba(255, 255, 255, 0.7);
    margin-top: var(--space-12);
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }

  .footer-inner {
    display: grid;
    grid-template-columns: 1.8fr 1fr;
    gap: var(--space-12);
    padding-top: var(--space-12);
    padding-bottom: var(--space-8);
  }

  .footer-logo {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-bottom: var(--space-5);
  }

  .footer-school {
    font-family: var(--font-display);
    font-size: var(--text-base);
    font-weight: var(--weight-semibold);
    color: white;
    line-height: 1.2;
  }

  .footer-club {
    font-size: var(--text-xs);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.45);
  }

  .footer-socials {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .footer-social-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-sm);
    font-weight: var(--weight-medium);
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  .footer-social-link:hover {
    color: var(--color-accent);
  }
  .footer-social-link svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  .footer-info-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: var(--text-sm);
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: var(--space-3);
  }

  .footer-info-label {
    font-size: var(--text-xs);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: rgba(255, 255, 255, 0.35);
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    padding: var(--space-4) 0;
  }

  .footer-bottom-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: var(--text-xs);
    color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 640px) {
    .footer-inner {
      grid-template-columns: 1fr;
    }
    .footer-bottom-inner {
      flex-direction: column;
      gap: var(--space-2);
      text-align: center;
    }
  }
</style>
