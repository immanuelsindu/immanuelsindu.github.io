<script>
  let { isHover = false, textA = "Hello", textB = "World", styleA = "", styleB = "", containerClass = "" } = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore event_directive_deprecated -->
<div
  class="w-fit h-[25px] overflow-hidden rounded cursor-pointer bg-blue-100"
  on:mouseenter={() => (isHover = true)}
  on:mouseleave={() => (isHover = false)}
>
  <div class={`container ${containerClass}`} class:translate-up={isHover}>
    <p class={`h-[25px] bg-white ${styleA}`}>{textA}</p>
    <p class={`h-[25px] bg-white ${styleB}`}>{textB}</p>
  </div>
</div>

<style>
  .container {
    transition: 0.3s ease;
  }

  .translate-up {
    transform: translateY(-50%);
  }
</style>
