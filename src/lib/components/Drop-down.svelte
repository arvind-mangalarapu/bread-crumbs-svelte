<script>
  import { onMount } from 'svelte';
  let isOpen = false;
  let selectedOption = '';

  const toggleDropdown = () => isOpen = !isOpen;

  const selectOption = (option) => {
    selectedOption = option;
    isOpen = false;
  };

  onMount(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        isOpen = false;
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<div class="w-20 relative dropdown">
  <button
    class="block w-full h-7 bg-purplevol-900 border-gray-300 rounded-md shadow-sm text-left focus:border-indigo-500 sm:text-sm relative"
    on:click|preventDefault={toggleDropdown}
  >
    <span class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
      {#if isOpen}
        <img class="w-3 h-3 transform rotate-180" src="../images/upArrow.svg" alt="Up Arrow" />
      {:else}
        <img class="w-3 h-3" src="../images/upArrow.svg" alt="Down Arrow" />
      {/if}
    </span>
    <span>{selectedOption || '0'}</span>
  </button>

  <div
    class="dropdown-menu absolute z-10 mt-1 w-full bg-purplevol-900 rounded-md shadow-lg bottom-full mb-4"
    style="display: {isOpen ? 'block' : 'none'}"
  >
    {#each ['1', '2', '3','4','5','6','7'] as option}
      <a
        href="#"
        class="block w-full px-4 py-2 text-purplevol-500 hover:bg-purplevol-1000"
        on:click|preventDefault={() => selectOption(option)}
      >
        {option}
      </a>
    {/each}
  </div>
</div>
