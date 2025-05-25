<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Icon from "@iconify/svelte";

  import Portal from "svelte-portal";
  import { fade } from "svelte/transition";
  import ListMenu from "./ListMenu.svelte";
  import { onMount } from "svelte";

  let { sidebarCollapse = $bindable() } = $props();
  let isTooltipVisible = $state(false);
  let tooltipX = $state(0);
  let tooltipY = $state(0);
  let tooltipBtn;
  let selectedMenu = $state({});

  let sidebarMenu = [
    { label: "Welcome", icon: "material-symbols:home-rounded", route: "/" },
    { label: "Components", icon: "tabler:components", route: "/components" }
  ];

  const showTooltip = () => {
    const rect = tooltipBtn?.getBoundingClientRect();
    tooltipX = rect.left + rect.width / 2;
    tooltipY = rect.bottom + 8; // jarak 8px di bawah tombol
    isTooltipVisible = true;
  };

  const hideTooltip = () => {
    isTooltipVisible = false;
  };

  onMount(() => {
    if ($page.url.pathname == "/components") {
      selectedMenu = sidebarMenu.find((f) => f.route == $page.url.pathname);
    }
  });
</script>

<aside
  class={`w-[280px] h-[100vh] bg-gradient-to-b from-[#7F55B1] via-[#9B7EBD] to-[#7F55B1]/20 transition ease-in-out text-white border-r border-[#7F55B1] ${sidebarCollapse ? "-translate-x-[100%] duration-500" : "translate-x-0 duration-[350ms]"}`}
>
  <div class="h-[48px] flex justify-between p-2 pt-3">
    <Icon icon="fluent:rocket-20-filled" width="35" height="35" />

    <!-- svelte-ignore a11y_interactive_supports_focus -->
    <div class="relative" role="button" onmouseenter={showTooltip} onmouseleave={hideTooltip}>
      <button
        bind:this={tooltipBtn}
        class="hover:text-violet-400 transition ease-in-out duration-300 hover:cursor-pointer"
        onclick={() => (sidebarCollapse = true)}
      >
        <Icon icon="tabler:layout-sidebar-left-collapse" width="24" height="24" />
      </button>

      {#if isTooltipVisible}
        <Portal>
          <div
            in:fade={{ duration: 200 }}
            out:fade={{ duration: 200 }}
            class="fixed z-[9999] bg-white px-3 py-1 text-sm text-[#7F55B1] rounded-md shadow border border-gray-300"
            style="top: {tooltipY}px; left: {tooltipX}px; transform: translateX(-50%)"
          >
            Collapse Sidebar
          </div>
        </Portal>
      {/if}
    </div>
  </div>

  <div class="mt-5 relative">
    <ListMenu {sidebarMenu} {selectedMenu} />
  </div>
</aside>
