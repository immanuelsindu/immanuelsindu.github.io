<script>
  import Icon from "@iconify/svelte";
  import { fade } from "svelte/transition";

  let { sidebarCollapse = $bindable() } = $props();
</script>

<header
  class={`w-full h-[48px] bg-[#7F55B1] grow trasition ease-in-out ${sidebarCollapse ? "duration-400" : "duration-400"}`}
>
  <div class="h-full items-center flex gap-2 px-3">
    {#if sidebarCollapse}
      <button
        in:fade
        class="text-white hover:text-violet-400 transition ease-in-out duration-300 hover:cursor-pointer"
        onclick={() => {
          sidebarCollapse = false;
        }}
      >
        <Icon icon="tabler:layout-sidebar-right-collapse" width="24" height="24" />
      </button>
    {/if}

    <p class="text-[18px] font-medium text-white">Sindu's Svelte Components</p>
  </div>
</header>
