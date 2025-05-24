<script>
  let { src = "link/gambar", alt = "image", width = 100, height = 100 } = $props();
</script>

<img {src} {width} {height} class="img-fluid rounded-top" {alt} />
