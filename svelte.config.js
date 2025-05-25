// import adapter from "@sveltejs/adapter-auto";
// import adapter from "@sveltejs/adapter-node";
import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV !== 'production';
const repoName = process.env.BASE_PATH || '';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html' 
    }),
    paths: {
      base: dev ? '' : repoName,
    },
     prerender: {
      entries: ['*']  // artinya semua halaman yang bisa di-prerender, akan di-prerender
    }
  }
};