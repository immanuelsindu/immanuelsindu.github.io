import adapter from "@sveltejs/adapter-auto";
// import adapter from "@sveltejs/adapter-node";
// svelte.config.js
// import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV !== 'production';
const repoName = 'immanuelsindu.github.io'; // Ganti dengan nama repo kamu

export default {
  kit: {
    adapter: adapter(),
  }
};
