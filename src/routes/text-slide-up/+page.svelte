<script>
  import SlideUpText from "$lib/components/SlideUpText.svelte";
  import RenderImage from "$lib/components/RenderImage.svelte";
  import Container from "$lib/views/Container/Container.svelte";
</script>

<Container>
  <div class="space-y-2">
    <div class="flex gap-1">
      <RenderImage src={"https://images.tokopedia.net/img/official_store/badge_os.png"} width={25} height={20} />
      <SlideUpText textA={"Toko Ramai Mall"} textB={"Daerah Istimewa Yogyakarta"} containerClass={"!text-white"} />
    </div>
    <div class="flex gap-1">
      <RenderImage
        src={"https://images.tokopedia.net/img/goldmerchant/pm_activation/badge/Power%20Merchant%20Pro.png"}
        width={25}
        height={20}
      />
      <SlideUpText textA={"Toko Pakan Lele"} textB={"Jakarta Selatan"} containerClass={"!text-white"} />
    </div>
  </div>
</Container>
