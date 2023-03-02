// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,
  css: ["~/assets/css/main.css"],
  modules: [
    "@pinia-plugin-persistedstate/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore"],
        disableVuex: true,
      },
    ],
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
