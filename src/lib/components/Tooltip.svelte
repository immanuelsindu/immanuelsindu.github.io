<script>
  import { fade } from "svelte/transition";
  import Portal from "svelte-portal";
  import { onMount } from "svelte";

  let { target = null, label = "tooltip", position = "bottom" } = $props();

  let tooltipX = $state(0);
  let tooltipY = $state(0);
  let visible = $state(false);
  let transform = $state("");

  const show = () => {
    if (!target) return;
    const rect = target.getBoundingClientRect();

    switch (position) {
      case "bottom":
        tooltipX = rect.left + rect.width / 2;
        tooltipY = rect.bottom + 8;
        transform = "translateX(-50%)";
        break;

      case "top":
        tooltipX = rect.left + rect.width / 2;
        tooltipY = rect.top - 8;
        transform = "translateX(-50%) translateY(-100%)";
        break;

      case "right":
        tooltipX = rect.right + 8;
        tooltipY = rect.top + rect.height / 2;
        transform = "translateY(-50%)";
        break;

      case "left":
        tooltipX = rect.left - 8;
        tooltipY = rect.top + rect.height / 2;
        transform = "translateX(-100%) translateY(-50%)";
        break;

      default:
        tooltipX = rect.left + rect.width / 2;
        tooltipY = rect.bottom + 8;
        transform = "translateX(-50%)";
        break;
    }

    visible = true;
  };

  const hide = () => {
    visible = false;
  };

  onMount(() => {
    if (target) {
      target.addEventListener("mouseenter", show);
      target.addEventListener("mouseleave", hide);
    }

    return () => {
      if (target) {
        target.removeEventListener("mouseenter", show);
        target.removeEventListener("mouseleave", hide);
      }
    };
  });
</script>

<!-- transform: translateX(-50%) == bottom-->
{#if visible}
  <Portal>
    <div
      in:fade={{ duration: 200 }}
      out:fade={{ duration: 200 }}
      class="fixed z-[9999] bg-white px-3 py-1 text-sm text-[#7F55B1] rounded-md shadow"
      style="top: {tooltipY}px; left: {tooltipX}px; transform: {transform} "
      data-position={position}
    >
      <span class="tooltip-arrow"></span>
      {label}
    </div>
  </Portal>
{/if}

<style>
  .tooltip-arrow {
    position: absolute;
    height: 0;
    width: 0;
  }

  [data-position="top"] .tooltip-arrow {
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid white;
  }

  [data-position="bottom"] .tooltip-arrow {
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid white;
  }

  [data-position="left"] .tooltip-arrow {
    right: -5px;
    top: 50%;
    transform: translateY(-50%);
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid white;
  }

  [data-position="right"] .tooltip-arrow {
    left: -5px;
    top: 50%;
    transform: translateY(-50%);
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid white;
  }
</style>
