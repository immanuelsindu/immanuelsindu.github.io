<script>
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";

  let { sidebarCollapse = $bindable() } = $props();
  let indicatorTop = $state(0);
  // @ts-ignore
  let itemRefs = $state([]);

  let sidebarMenu = [
    { label: "Beranda 1", icon: "material-symbols:home-rounded", route: "/beranda" },
    { label: "Beranda 2", icon: "material-symbols:home-rounded", route: "/beranda" },
    { label: "Beranda 3", icon: "material-symbols:home-rounded", route: "/beranda" },
    { label: "Beranda 4", icon: "material-symbols:home-rounded", route: "/beranda" }
  ];

  const updateIndicatorPosition = () => {
    const index = sidebarMenu.findIndex((item) => item.label === selectedMenu.label);
    // @ts-ignore
    const el = itemRefs[index];
    if (el) {
      indicatorTop = el.offsetTop;
    }
  };

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
  class={`w-[280px] h-[100vh] bg-[#FFE1E0] transition ease-in-out  text-[#7F55B1]  ${sidebarCollapse ? "-translate-x-[100%] duration-500" : "translate-x-0 duration-[350ms]"}`}
>
  <div class="h-[48px] flex justify-between p-2 pt-3">
    <Icon icon="fluent:rocket-20-filled" width="35" height="35" />

    <button
      class="hover:text-violet-400 transition ease-in-out duration-300 hover:cursor-pointer"
      onclick={() => {
        sidebarCollapse = true;
      }}
    >
      <Icon icon="tabler:layout-sidebar-left-collapse" width="24" height="24" />
    </button>
  </div>

  <div class="mt-5 relative">
    <div
      class="absolute left-[0px] justify-center transition-all duration-500 ease-in-out"
      style="top: {indicatorTop}px"
    >
      <div class={`h-[25px] border-[2px] border-white mt-[7px]`}></div>
    </div>
    {#each sidebarMenu as item, index}
      {#key item.label}
        <button
          bind:this={itemRefs[index]}
          class={`w-[95%] flex gap-2 items-center hover:cursor-pointer hover:bg-[#7F55B1] hover:text-white py-2 pl-3 rounded-tr-md rounded-br-md trasition duration-200 ease ${selectedMenu.label === item.label ? "bg-[#7F55B1] text-white" : ""}`}
          onclick={() => {
            if (selectedMenu != item) {
              selectedMenu = item;
            }
          }}
        >
          <Icon icon={item.icon} width="24" height="24" />
          <p>{item.label}</p>
        </button>
      {/key}
    {/each}
  </div>
</aside>
