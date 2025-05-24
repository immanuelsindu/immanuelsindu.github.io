<script>
  import "../app.css";

  import Header from "$lib/views/Header.svelte";
  import Sidebar from "$lib/views/Sidebar.svelte";

  let sidebarCollapse = false;
</script>

<div class="flex relative">
  <Sidebar bind:sidebarCollapse />
  <div
    class={`w-full h-[48px] bg-[#7F55B1] grow trasition ease-in-out ${sidebarCollapse ? "duration-400" : "duration-400"}`}
    style="margin-left: {!sidebarCollapse ? '0px' : '-280px'}"
  >
    <Header bind:sidebarCollapse />

    <main class="bg-white h-full">
      <slot />
    </main>
  </div>
</div>
