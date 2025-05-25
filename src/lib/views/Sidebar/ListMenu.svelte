<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import Icon from "@iconify/svelte";

  let { sidebarMenu = [], selectedMenu = {} } = $props();

  let indicatorTop = $state(0);
  let itemRefs = $state([]);

  $effect(() => {
    updateIndicatorPosition();
  });

  const updateIndicatorPosition = () => {
    const index = sidebarMenu.findIndex((item) => item.label === selectedMenu.label);
    const el = itemRefs[index];
    if (el) {
      indicatorTop = el.offsetTop;
    }
  };

  onMount(() => {
    // updateIndicatorPosition();
  });
</script>

{#if Object.keys(selectedMenu)?.length}
  <div class="absolute left-[0px] justify-center transition-all duration-500 ease-in-out" style="top: {indicatorTop}px">
    <div class={`h-[25px] border-[2px] border-white mt-[7px]`}></div>
  </div>
{/if}

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
        <span class="w-[24px] h-[24px] flex items-center justify-center">
          <Icon icon={item.icon} width={item.iconSize || 24} height={item.iconSize || 24} />
        </span>
        <p>{item.label}</p>
      </button>
    {/key}
  {/each}
</div>
