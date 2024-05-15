<script>
  import { onMount } from 'svelte';
  let isOpen = false;


  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function selectOption(option) {
    selectedOption = option;
    isOpen = false;
  }

  // Close the dropdown if clicked outside
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

<style>
  /* Custom scrollbar styles */
  .dropdown-content::-webkit-scrollbar {
    display: none;
  }

 
</style>

<div class="w-20 relative dropdown">
 
  <div class="relative">
    <button
      id="customSelect"
      class="block w-20 h-7 bg-purplevol-900 border-gray-300 rounded-md shadow-sm text-left focus:border-indigo-500 sm:text-sm"
      on:click|preventDefault={toggleDropdown}
    >
      
<img class="w-3 h-3 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" src="../images/upArrow.svg" alt="/">
    </button>
    
    <div
      id="dropdownMenu"
      class="dropdown-menu absolute z-10 mt-1 w-full bg-purplevol-900 rounded-md shadow-lg bottom-full mb-4"
      style="display: {isOpen ? 'block' : 'none'}"
    >
   
      <div class="py-1 text-center">
        <a
          href="#"
          class="block w-full px-4 py-2 text-purplevol-500 hover:bg-purplevol-1000"
          on:click|preventDefault={() => selectOption('Option 1')}
        >
          1
        </a>
        <a
          href="#"
          class="block w-full px-4 py-2 text-purplevol-500 hover:bg-purplevol-1000"
          on:click|preventDefault={() => selectOption('Option 2')}
        >
          2
        </a>
        <a
          href="#"
          class="block w-full px-4 py-2 text-purplevol-500 hover:bg-purplevol-1000"
          on:click|preventDefault={() => selectOption('Option 3')}
        >
          3
        </a>
      </div>
    </div>
  </div>
</div>
