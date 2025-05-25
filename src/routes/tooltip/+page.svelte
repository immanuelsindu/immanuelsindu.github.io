<script>
  import Tooltip from "$lib/components/Tooltip.svelte";
  import Button from "$lib/components/Button.svelte";
  import Container from "$lib/views/Container/Container.svelte";

  let btnBottom = $state();
  let btnLeft = $state();
  let btnRight = $state();
  let btnTop = $state();
</script>

<Container>
  <div class="flex gap-4">
    <div>
      <Button bind:bindButton={btnLeft} label={"Left"} />
      <Tooltip target={btnLeft} label="Hello World!" position={"left"} />
    </div>

    <div>
      <Button bind:bindButton={btnBottom} label={"Bottom"} />
      <Tooltip target={btnBottom} label="Hello World!" position={"bottom"} />
    </div>

    <div>
      <Button bind:bindButton={btnRight} label={"Right"} />
      <Tooltip target={btnRight} label="Hello World!" position={"right"} />
    </div>

    <div>
      <Button bind:bindButton={btnTop} label={"Top"} />
      <Tooltip target={btnTop} label="Hello World!" position={"top"} />
    </div>
  </div>
</Container>
