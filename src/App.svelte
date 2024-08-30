<script>
  import Index from './components/index.svelte';
  import AboutMe from './components/aboutme.svelte';
  import Stuff from './components/stuff.svelte';

  let currentPage = 'index';

  const navigate = (page) => {
    currentPage = page;
  };
</script>

<div class="dark min-h-screen bg-primary text-secondary font-vscode">
  <!-- Conditional Rendering -->
  {#if currentPage === 'index'}
    <Index />
  {:else if currentPage === 'about'}
    <AboutMe />
  {:else if currentPage === 'stuff'}
    <Stuff />
  {/if}

  <footer class="fixed bottom-0 left-0 w-full p-4 flex justify-center gap-8 bg-[#222831] text-[#76ABAE] text-4xl">
    <button class="hover:text-[#EEEEEE]" on:click={() => navigate('index')}>home</button>
    <button class="hover:text-[#EEEEEE]" on:click={() => navigate('about')}>about</button>
    <button class="hover:text-[#EEEEEE]" on:click={() => navigate('stuff')}>stuff</button>
  </footer>
</div>
