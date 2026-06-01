<script lang="ts">
  import { onMount } from "svelte";

  import Navbar from "./lib/components/Navbar.svelte";
  import Footer from "./lib/components/Footer.svelte";
  import Home from "./lib/pages/Home.svelte";
  import Slides from "./lib/pages/Slides.svelte";
  import Activities from "./lib/pages/Activities.svelte";
  import Lmo from "./lib/pages/Lmo.svelte";
  import SummerCamp from "./lib/pages/SummerCamp.svelte";
  import Officers from "./lib/pages/Officers.svelte";
  import Awards from "./lib/pages/Awards.svelte";
  import NotFound from "./lib/pages/NotFound.svelte";

  const routes: Record<string, any> = {
    "/": Home,
    "/slides": Slides,
    "/activities": Activities,
    "/lmo": Lmo,
    "/summer-camp": SummerCamp,
    "/officers": Officers,
    "/awards": Awards,
    "*": NotFound,
  };

  let currentPath = "/";
  let currentLocation = "/";
  let CurrentPage: any = Home;

  function normalizePath(pathname: string): string {
    const path = pathname.replace(/\/+$/, "");
    return path === "" ? "/" : path;
  }

  function syncRoute() {
    currentPath = normalizePath(window.location.pathname);
    currentLocation = `${currentPath}${window.location.search}${window.location.hash}`;
    CurrentPage = routes[currentPath] ?? NotFound;
  }

  function navigate(path: string) {
    const url = new URL(path, window.location.origin);
    const nextLocation = `${normalizePath(url.pathname)}${url.search}${url.hash}`;
    if (nextLocation === currentLocation) return;
    history.pushState({}, "", nextLocation);
    syncRoute();
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  onMount(() => {
    syncRoute();

    const handlePopState = () => {
      syncRoute();
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const link = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!link || link.target && link.target !== "_self") return;

      const href = link.getAttribute("href");
      if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (href.startsWith("#")) return;

      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return;

      event.preventDefault();
      navigate(`${url.pathname}${url.search}${url.hash}`);
    };

    window.addEventListener("popstate", handlePopState);
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleClick);
    };
  });
</script>

<div class="app-root">
  <Navbar {currentPath} />

  <main class="app-main page-enter">
    <svelte:component this={CurrentPage} />
  </main>

  <Footer />
</div>

<style>
  .app-root {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
  }

  .app-main {
    flex: 1;
  }
</style>
