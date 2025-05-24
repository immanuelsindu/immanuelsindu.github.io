<script>
  export let textA = "Hello";
  export let textB = "World";

  export let styleA = "bg-red-300";
  export let styleB = "bg-blue-300";

  let isHover = false;
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="w-fit h-[25px] overflow-hidden rounded cursor-pointer bg-blue-100"
  on:mouseenter={() => (isHover = true)}
  on:mouseleave={() => (isHover = false)}
>
  <div class="container" class:translate-up={isHover}>
    <p class={`px-2 h-[25px] ${styleA}`}>{textA}</p>
    <p class={`px-2 h-[25px] ${styleB}`}>{textB}</p>
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
