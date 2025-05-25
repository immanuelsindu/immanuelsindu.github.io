<script>
  import SlideUpText from "$lib/components/SlideUpText.svelte";
  import { fly } from "svelte/transition";
  import Icon from "@iconify/svelte";
  import Button from "$lib/components/Button.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import RenderImage from "$lib/components/RenderImage.svelte";
  import Container from "$lib/views/Container/Container.svelte";

  let openModal = false;
</script>

<Container>
  <div class="space-y-2">
    <div>
      <Button
        label={"Hapus Item"}
        on:click={() => {
          openModal = true;
        }}
      />
    </div>
  </div>

  <Modal bind:openModal>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      in:fly={{ y: 20, duration: 300 }}
      out:fly={{ y: 20, duration: 300 }}
      class="bg-white w-[400px] h-[340px] rounded-lg shadow-lg p-4 relative"
      on:click|stopPropagation
    >
      <div
        class="flex items-center justify-between px-3 w-full h-[45px] bg-red-500/70 absolute top-0 left-0 rounded-tl-md rounded-tr-md text-white"
      >
        <p>Hapus Item</p>
        <button
          class="text-white hover:text-gray-700 hover:cursor-pointer transition-colors duration-200 ease"
          on:click={() => (openModal = false)}
          aria-label="Close modal"
        >
          <Icon icon="material-symbols:close" width="24" height="24" />
        </button>
      </div>

      <div class="flex flex-col gap-1 items-center mt-[65px]">
        <span class="text-red-400">
          <Icon icon="line-md:trash" width="80" height="80" />
        </span>
        <p class="font-medium text-black mt-3">Yakin untuk hapus item ?</p>
        <p class="text-gray-500 text-center text-[15px] px-5">Data yang dihapus tidak akan bisa kembalikan lagi.</p>
      </div>

      <div class="absolute bottom-4 left-0 w-full flex justify-between px-4">
        <Button
          label={"Batal"}
          type={"primary-outline"}
          on:click={() => {
            openModal = false;
          }}
        />

        <Button
          label={"Hapus"}
          type={"danger"}
          on:click={() => {
            openModal = false;
          }}
        />
      </div>
    </div>
  </Modal>
</Container>
