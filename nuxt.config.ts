// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // @ts-ignore
  nitro: {
    externals: {
      inline: ["uuid"],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
});
