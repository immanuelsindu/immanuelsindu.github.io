<script lang="ts">
  const { label = "button", type = "primary" } = $props();

  const getButtonType = () => {
    switch (type) {
      case "primary":
        return "bg-gray-700 hover:bg-gray-800";
      case "primary-outline":
        return "bg-white border border-gray-700 !text-gray-700 hover:bg-gray-200";
      case "danger":
        return "bg-red-500 hover:bg-red-600";
      default:
        return "bg-gray-700 hover:bg-gray-800";
    }
  };

  const style = getButtonType();
</script>

<!-- svelte-ignore event_directive_deprecated -->
<button
  type="button"
  class={`${style} text-white px-5 py-1 rounded-md hover:cursor-pointer transition-colors duration-300 ease-in-out`}
  on:click
>
  {label}
</button>
