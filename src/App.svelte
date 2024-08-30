<script>
  import Index from './components/Index.svelte';
  import AboutMe from './components/AboutMe.svelte';
  import Stuff from './components/Stuff.svelte';

  let currentPage = 'index';

  const navigate = (page) => {
    currentPage = page;
  };
</script>

<div class="dark min-h-screen bg-primary text-secondary font-vscode">
  <nav class="p-4 flex justify-center space-x-6 bg-highlight text-accent">
    <button class="hover:text-secondary" on:click={() => navigate('index')}>Home</button>
    <button class="hover:text-secondary" on:click={() => navigate('about')}>About Me</button>
    <button class="hover:text-secondary" on:click={() => navigate('stuff')}>Stuff</button>
  </nav>

  <!-- Conditional Rendering -->
  {#if currentPage === 'index'}
    <Index />
  {:else if currentPage === 'about'}
    <AboutMe />
  {:else if currentPage === 'stuff'}
    <Stuff />
  {/if}
</div>
