<script>
  import { goto } from "$app/navigation";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import { fly, slide } from "svelte/transition";

  let { sidebarCollapse = $bindable() } = $props();
  let indicatorTop = $state(0);
  // @ts-ignore
  let itemRefs = $state([]);

  let sidebarMenu = [
    { label: "Welcome", icon: "material-symbols:home-rounded", route: "/" },
    { label: "Components", icon: "tabler:components", route: "/components" }
    // { label: "Beranda 3", icon: "material-symbols:home-rounded", route: "/beranda" },
    // { label: "Beranda 4", icon: "material-symbols:home-rounded", route: "/beranda" }
  ];

  const updateIndicatorPosition = () => {
    const index = sidebarMenu.findIndex((item) => item.label === selectedMenu.label);
    // @ts-ignore
    const el = itemRefs[index];
    if (el) {
      indicatorTop = el.offsetTop;
    }
  };

  let isTooltipVisible = $state(false);

  // @ts-ignore
  let selectedMenu = $state(sidebarMenu[0]);
  $effect(() => {
    updateIndicatorPosition();
  });

  onMount(() => {
    updateIndicatorPosition();
  });
</script>

<aside
  class={`w-[280px] h-[100vh] bg-gradient-to-b from-[#7F55B1] via-[#9B7EBD] to-[#7F55B1]/20 transition ease-in-out text-white border-r border-[#7F55B1] ${sidebarCollapse ? "-translate-x-[100%] duration-500" : "translate-x-0 duration-[350ms]"}`}
>
  <div class="h-[48px] flex justify-between p-2 pt-3">
    <Icon icon="fluent:rocket-20-filled" width="35" height="35" />

    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <!-- svelte-ignore a11y_mouse_events_have_key_events -->
    <div
      class="relative"
      onmouseenter={() => {
        if (isTooltipVisible) return;
        setTimeout(() => {
          isTooltipVisible = true;
        }, 300);
      }}
      onmouseleave={() => {
        if (!isTooltipVisible) return;
        setTimeout(() => {
          isTooltipVisible = false;
        }, 300);
      }}
    >
      <button
        class=" hover:text-violet-400 transition ease-in-out duration-300 hover:cursor-pointer"
        onclick={() => {
          sidebarCollapse = true;
        }}
      >
        <Icon icon="tabler:layout-sidebar-left-collapse" width="24" height="24" />
      </button>

      <!-- // todo: masih bug z-index, kurang positioning, terlalu dependant ke parent  -->
      {#if isTooltipVisible}
        <div
          in:fly={{ duration: 200 }}
          class="absolute top-full left-1/2 -translate-x-1/2 w-max max-w-[300px] z-[1000] rounded-md text-sm shadow border border-gray-300 bg-white px-2 py-1"
        >
          <p class="text-[#7F55B1]">Collapse Sidebar</p>
        </div>
      {/if}
    </div>
  </div>

  <div class="mt-5 relative">
    <div
      class="absolute left-[0px] justify-center transition-all duration-500 ease-in-out"
      style="top: {indicatorTop}px"
    >
      <div class={`h-[25px] border-[2px] border-white mt-[7px]`}></div>
    </div>

    <div class="flex flex-col gap-1">
      {#each sidebarMenu as item, index}
        {#key item.label}
          <button
            bind:this={itemRefs[index]}
            class={`w-[95%] flex gap-2 items-center hover:cursor-pointer hover:bg-[#7F55B1] hover:text-white py-2 pl-3 rounded-tr-md rounded-br-md trasition duration-200 ease ${selectedMenu.label === item.label ? "bg-[#7F55B1] text-white" : ""}`}
            onclick={() => {
              if (selectedMenu != item) {
                selectedMenu = item;
                goto(`${item.route}`);
              }
            }}
          >
            <Icon icon={item.icon} width="24" height="24" />
            <p>{item.label}</p>
          </button>
        {/key}
      {/each}
    </div>
  </div>
</aside>
