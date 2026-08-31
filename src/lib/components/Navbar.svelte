<script lang="ts">
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";

  export let currentPath = "/";

  let menuOpen = false;
  let activityMenuOpen = false;
  let scrolled = false;

  const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/slides", label: "Slides" },
    { href: "/resources", label: "Resources" },
    { href: "/officers", label: "Officers" },
    { href: "/awards", label: "Awards" },
  ];

  const ACTIVITY_LINKS = [
    { href: "/activities", label: "Overview" },
    { href: "/lmo", label: "Lynbrook Math Open" },
    { href: "/summer-camp", label: "Summer Camp" },
  ];

  // recompute whenever currentPath changes
  $: activeLinks = NAV_LINKS.map((l) => ({
    ...l,
    active:
      l.href === "/" ? currentPath === "/" : currentPath.startsWith(l.href),
  }));

  $: activityActive =
    currentPath.startsWith("/activities") ||
    currentPath.startsWith("/lmo") ||
    currentPath.startsWith("/summer-camp");

  function closeMenu() {
    menuOpen = false;
    activityMenuOpen = false;
  }
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
  function toggleActivityMenu() {
    activityMenuOpen = !activityMenuOpen;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape" && (menuOpen || activityMenuOpen)) closeMenu();
  }

  onMount(() => {
    const onScroll = () => {
      scrolled = window.scrollY > 8;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
</script>

<svelte:window on:keydown={handleKeydown} />

<header class="navbar" class:navbar--scrolled={scrolled}>
  <div class="navbar-inner container">
    <a
      href="/"
      class="navbar-logo"
      on:click={closeMenu}
      aria-label="Lynbrook Math Club — Home"
    >
      <div class="navbar-logo-img-wrap">
        <img
          src="/lynbrook-logo.png"
          alt="Lynbrook High School Viking logo"
          class="navbar-logo-img"
          width="36"
          height="36"
        />
      </div>
      <span class="navbar-logo-text">
        <span class="navbar-logo-school">Lynbrook</span>
        <span class="navbar-logo-club">Math Honor Society</span>
      </span>
    </a>

    <nav class="navbar-links" aria-label="Main navigation">
      {#each activeLinks.filter((link) => link.href === "/") as link}
        <a
          href={link.href}
          class="navbar-link"
          class:navbar-link--active={link.active}
          aria-current={link.active ? "page" : undefined}
        >
          {link.label}
        </a>
      {/each}

      <div class="navbar-dropdown">
        <button
          class="navbar-link navbar-link--button"
          class:navbar-link--button-open={activityMenuOpen}
          class:navbar-link--active={activityActive}
          aria-expanded={activityMenuOpen}
          aria-haspopup="menu"
          on:click={toggleActivityMenu}
          type="button"
        >
          Activities
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 7.5L10 12.5L15 7.5" />
          </svg>
        </button>

        {#if activityMenuOpen}
          <div
            class="navbar-dropdown-panel"
            role="menu"
            aria-label="Activities submenu"
            transition:slide={{ duration: 180 }}
          >
            {#each ACTIVITY_LINKS as item}
              <a
                href={item.href}
                class="navbar-dropdown-link"
                on:click={closeMenu}
              >
                {item.label}
              </a>
            {/each}
          </div>
        {/if}
      </div>

      {#each activeLinks.filter((link) => link.href !== "/") as link}
        <a
          href={link.href}
          class="navbar-link"
          class:navbar-link--active={link.active}
          aria-current={link.active ? "page" : undefined}
        >
          {link.label}
        </a>
      {/each}
    </nav>

    <button
      class="navbar-hamburger"
      class:navbar-hamburger--open={menuOpen}
      on:click={toggleMenu}
      aria-expanded={menuOpen}
      aria-controls="mobile-menu"
      aria-label={menuOpen ? "Close menu" : "Open menu"}
    >
      <span class="bar bar--top"></span>
      <span class="bar bar--mid"></span>
      <span class="bar bar--bot"></span>
    </button>
  </div>

  {#if menuOpen}
    <nav
      id="mobile-menu"
      class="navbar-mobile-menu"
      aria-label="Mobile navigation"
    >
      {#each activeLinks.filter((link) => link.href === "/") as link, i}
        <a
          href={link.href}
          class="navbar-mobile-link"
          class:navbar-mobile-link--active={link.active}
          style="animation-delay: {i * 40}ms"
          on:click={closeMenu}
          aria-current={link.active ? "page" : undefined}
        >
          {link.label}
        </a>
      {/each}

      <div class="navbar-mobile-group">
        <button
          class="navbar-mobile-link navbar-mobile-link--button"
          class:navbar-mobile-link--button-open={activityMenuOpen}
          class:navbar-mobile-link--active={activityActive}
          on:click={toggleActivityMenu}
          aria-expanded={activityMenuOpen}
          aria-haspopup="menu"
          type="button"
        >
          Activities
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 7.5L10 12.5L15 7.5" />
          </svg>
        </button>

        {#if activityMenuOpen}
          <div
            class="navbar-mobile-submenu"
            role="menu"
            aria-label="Activities submenu"
            transition:slide={{ duration: 180 }}
          >
            {#each ACTIVITY_LINKS as item}
              <a
                href={item.href}
                class="navbar-mobile-submenu-link"
                on:click={closeMenu}
                aria-current={currentPath === item.href ? "page" : undefined}
              >
                {item.label}
              </a>
            {/each}
          </div>
        {/if}
      </div>

      {#each activeLinks.filter((link) => link.href !== "/") as link, i}
        <a
          href={link.href}
          class="navbar-mobile-link"
          class:navbar-mobile-link--active={link.active}
          style="animation-delay: {(i + 1) * 40}ms"
          on:click={closeMenu}
          aria-current={link.active ? "page" : undefined}
        >
          {link.label}
        </a>
      {/each}
    </nav>
  {/if}
</header>

<div class="navbar-spacer"></div>

{#if menuOpen}
  <div
    class="navbar-backdrop"
    on:click={closeMenu}
    on:keydown={(e) => e.key === "Enter" && closeMenu()}
    role="button"
    tabindex="-1"
    aria-label="Close menu"
  ></div>
{/if}

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: var(--color-primary);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    transition: box-shadow var(--transition-base);
  }

  .navbar--scrolled {
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
  }

  .navbar-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--nav-height);
  }
  .navbar-logo {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    text-decoration: none;
    flex-shrink: 0;
  }

  .navbar-logo-img-wrap {
    width: 36px;
    height: 36px;
    border-radius: var(--radius-md);
    overflow: hidden;
    flex-shrink: 0;
    background: rgb(3, 50, 101);
  }

  .navbar-logo-img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    display: block;
  }

  .navbar-logo-text {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .navbar-logo-school {
    font-family: var(--font-display);
    font-size: var(--text-base);
    font-weight: var(--weight-semibold);
    color: white;
    line-height: 1.1;
    letter-spacing: -0.01em;
  }

  .navbar-logo-club {
    font-family: var(--font-body);
    font-size: var(--text-xs);
    font-weight: var(--weight-medium);
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .navbar-links {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    position: relative;
  }

  .navbar-dropdown {
    position: relative;
  }

  .navbar-link {
    position: relative;
    padding: var(--space-2) var(--space-3);
    font-size: var(--text-sm);
    font-weight: var(--weight-medium);
    color: rgba(255, 255, 255, 0.65);
    border-radius: var(--radius-md);
    transition:
      color var(--transition-fast),
      background var(--transition-fast);
    text-decoration: none;
  }

  .navbar-link--button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: transparent;
    border: none;
  }

  .navbar-link--button svg {
    width: 14px;
    height: 14px;
    transition: transform var(--transition-base);
    transform: rotate(0deg);
  }

  .navbar-link--button-open svg {
    transform: rotate(180deg);
  }

  .navbar-link::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: var(--space-3);
    right: var(--space-3);
    height: 2px;
    background: var(--color-accent);
    border-radius: 1px;
    transform: scaleX(0);
    transition: transform var(--transition-fast);
  }

  .navbar-link:hover {
    color: white;
    background: rgba(255, 255, 255, 0.06);
  }

  .navbar-link--active {
    color: white;
  }
  .navbar-link--active::after {
    transform: scaleX(1);
  }

  .navbar-dropdown-panel {
    position: absolute;
    top: calc(100% + var(--space-2));
    left: 0;
    min-width: 240px;
    padding: var(--space-2);
    background: rgba(15, 26, 61, 0.98);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    display: flex;
    flex-direction: column;
    gap: 2px;
    z-index: 110;
  }

  .navbar-dropdown-link {
    padding: var(--space-3) var(--space-4);
    border-radius: var(--radius-md);
    font-size: var(--text-sm);
    font-weight: var(--weight-medium);
    color: rgba(255, 255, 255, 0.78);
    text-decoration: none;
    transition: background var(--transition-fast), color var(--transition-fast);
  }

  .navbar-dropdown-link:hover {
    background: rgba(255, 255, 255, 0.08);
    color: white;
  }

  .navbar-hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 40px;
    height: 40px;
    padding: var(--space-2);
    border-radius: var(--radius-md);
    transition: background var(--transition-fast);
    flex-shrink: 0;
  }

  .navbar-hamburger:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .bar {
    display: block;
    width: 20px;
    height: 2px;
    background: white;
    border-radius: 1px;
    transition:
      transform var(--transition-base),
      opacity var(--transition-fast);
    transform-origin: center;
    margin: 0 auto;
  }

  .navbar-hamburger--open .bar--top {
    transform: translateY(7px) rotate(45deg);
  }
  .navbar-hamburger--open .bar--mid {
    opacity: 0;
    transform: scaleX(0);
  }
  .navbar-hamburger--open .bar--bot {
    transform: translateY(-7px) rotate(-45deg);
  }

  .navbar-mobile-menu {
    display: flex;
    flex-direction: column;
    background: var(--color-primary-dark);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding: var(--space-3) var(--space-6) var(--space-6);
    animation: slideDown 0.2s ease-out;
  }

  .navbar-mobile-group {
    display: flex;
    flex-direction: column;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .navbar-mobile-link {
    padding: var(--space-3) var(--space-4);
    font-size: var(--text-base);
    font-weight: var(--weight-medium);
    color: rgba(255, 255, 255, 0.7);
    border-radius: var(--radius-md);
    text-decoration: none;
    animation: fadeInLeft 0.2s ease-out both;
    transition:
      color var(--transition-fast),
      background var(--transition-fast);
  }

  .navbar-mobile-link--button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-2);
    background: transparent;
    border: none;
    text-align: left;
  }

  .navbar-mobile-link--button svg {
    width: 14px;
    height: 14px;
    transition: transform var(--transition-base);
    transform: rotate(0deg);
  }

  .navbar-mobile-link--button-open svg {
    transform: rotate(180deg);
  }

  .navbar-mobile-submenu {
    display: flex;
    flex-direction: column;
    padding-left: var(--space-4);
    margin-left: var(--space-4);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  .navbar-mobile-submenu-link {
    padding: var(--space-2) var(--space-4);
    font-size: var(--text-sm);
    color: rgba(255, 255, 255, 0.65);
    text-decoration: none;
    border-radius: var(--radius-md);
  }

  .navbar-mobile-submenu-link:hover {
    background: rgba(255, 255, 255, 0.06);
    color: white;
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-8px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .navbar-mobile-link:hover {
    color: white;
    background: rgba(255, 255, 255, 0.06);
  }
  .navbar-mobile-link--active {
    color: var(--color-accent);
    background: rgba(201, 164, 48, 0.08);
  }

  .navbar-spacer {
    height: var(--nav-height);
  }
  .navbar-backdrop {
    position: fixed;
    inset: 0;
    z-index: 99;
    background: transparent;
  }

  @media (max-width: 800px) {
    .navbar-links {
      display: none;
    }
    .navbar-hamburger {
      display: flex;
    }
  }
</style>
