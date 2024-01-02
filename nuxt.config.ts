// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image", '@pinia-plugin-persistedstate/nuxt', ['@pinia/nuxt',
  {
    autoImports: ['defineStore', 'acceptHMRUpdate']
  }],
]
})