<script>
    import { fly } from "svelte/transition";

    let { children, openModal = $bindable()} = $props()
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
{#if openModal}
    <!-- svelte-ignore event_directive_deprecated -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div
      in:fly={{ y: 10, duration: 200 }}
      out:fly={{ y: 10, duration: 200 }}
      class="fixed inset-0 bg-gray-300/70 flex items-center justify-center z-50"
      on:click={() => (openModal = false)}
    >
     {@render children()}
    </div>
  {/if}