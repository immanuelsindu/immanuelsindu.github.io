<script>
  import { goto } from "$app/navigation";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";

  const listWording = [
    "Take a look around and grab any of these modern, stylish components for your next project!",
    "Explore a collection of sleek, handcrafted components ready to enhance your projects.",
    "Browse freely and use any of these pretty, modern designs to spice up your creations!"
  ];

  let currentText = "";
  let indexWording = 0;

  // @ts-ignore
  const typeText = (text, callback) => {
    let i = 0;
    currentText = "";
    const typing = setInterval(() => {
      currentText += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(typing);
        setTimeout(() => callback(), 2500);
      }
    }, 50);
  };

  // @ts-ignore
  const deleteText = (callback) => {
    const deleting = setInterval(() => {
      currentText = currentText.slice(0, -1);
      if (currentText.length === 0) {
        clearInterval(deleting);
        setTimeout(() => callback(), 300);
      }
    }, 50);
  };

  const startTypingLoop = () => {
    typeText(listWording[indexWording], () => {
      deleteText(() => {
        indexWording = (indexWording + 1) % listWording.length;
        startTypingLoop();
      });
    });
  };

  onMount(() => {
    startTypingLoop();
  });
</script>

<div
  class="min-h-[calc(100vh-48px)] bg-gradient-to-br from-[#FFE1E0] via-[#F49BAB] to-[#7F55B1] flex items-center justify-center p-6 overflow-hidden"
>
  <div
    class="min-h-[360px] bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl px-10 py-12 max-w-5xl w-full grid md:grid-cols-2 gap-12 animate-fade-in-up"
  >
    <!-- Kiri: Teks dan Tombol -->
    <div class="flex flex-col justify-center space-y-6">
      <h3 class="text-5xl font-extrabold text-[#7F55B1] leading-tight flex items-center gap-3 animate-bounce-slow">
        🎉Welcome 🎉
      </h3>
      <p class="text-[#4B2E83] text-lg leading-relaxed animate-fade-in-delay">
        Hello there! 👋 Welcome to my personal component collection.
        <span>
          {currentText}
        </span>
        <!-- Feel free to explore and use these beautiful,
        modern designs for your own projects.  -->
      </p>
      <div class="flex gap-4 animate-slide-up-delay">
        <button
          class="bg-[#7F55B1] hover:bg-[#6b45a0] text-white font-bold px-5 py-3 rounded-xl shadow-lg transition transform hover:scale-105 hover:cursor-pointer flex items-center gap-2"
          onclick={() => {
            goto("/components");
          }}
        >
          <Icon icon="mdi:view-dashboard-outline" class="text-xl" />
          Lihat Komponen
        </button>
        <button
          class="bg-white border border-[#7F55B1] text-[#7F55B1] font-semibold px-5 py-3 rounded-xl shadow hover:bg-[#f0dbfc] transition transform hover:scale-105 hover:cursor-pointer flex items-center gap-2"
        >
          <Icon icon="mdi:information-outline" class="text-xl" />
          Tentang
        </button>
      </div>
    </div>

    <!-- Kanan: Dekorasi animasi -->
    <div class="relative w-full flex items-center justify-center">
      <div class="relative">
        <div
          class="w-[200px] h-[200px] bg-gradient-to-tr from-[#9B7EBD] to-[#F49BAB] rounded-full shadow-lg flex items-center justify-center animate-pulse-slow"
        >
          <Icon icon="mdi:cube-scan" class="text-white text-6xl z-10" />
        </div>

        <!-- Bubble animasi -->
        <div class="absolute top-[-20px] left-[-20px] w-8 h-8 bg-[#FFE1E0] rounded-full animate-bubble-1"></div>
        <div class="absolute bottom-[-30px] right-[-25px] w-6 h-6 bg-[#F49BAB] rounded-full animate-bubble-2"></div>
        <div class="absolute top-[50%] left-[-40px] w-5 h-5 bg-[#9B7EBD] rounded-full animate-bubble-3"></div>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes fade-in-up {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
  }

  .animate-fade-in-delay {
    animation: fade-in-up 1.2s ease-out forwards;
  }

  .animate-slide-up-delay {
    animation: fade-in-up 1.5s ease-out forwards;
  }

  .animate-pulse-slow {
    animation: pulse 3s infinite;
  }

  .animate-bounce-slow {
    animation: bounce 2.5s infinite;
  }

  @keyframes bubble-1 {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes bubble-2 {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(8px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes bubble-3 {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-6px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  .animate-bubble-1 {
    animation: bubble-1 4s infinite ease-in-out;
  }

  .animate-bubble-2 {
    animation: bubble-2 3s infinite ease-in-out;
  }

  .animate-bubble-3 {
    animation: bubble-3 5s infinite ease-in-out;
  }
</style>
