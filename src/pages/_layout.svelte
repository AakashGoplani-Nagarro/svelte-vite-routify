<!--routify:options bundle=true -->
<script lang="ts">
  import Footer from "$src/components/Footer.svelte";
  import MegaNavigation from "$src/nav/MegaNavigation.svelte";
</script>

<header>
  <nav>
    <MegaNavigation />
  </nav>
</header>
<main>
  <slot />
</main>
<footer>
  <Footer />
</footer>

<style>
  header {
    display: flex;
    position: absolute;
    top: 1rem;
  }
  
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 500;
    padding: 0 1rem;
  }

  main {
    display: flex;
  }

  footer {
    display: flex;
    position: absolute;
    bottom: 1rem;
  }
</style>