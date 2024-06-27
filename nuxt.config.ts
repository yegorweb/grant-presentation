// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  imports: {
    presets: [
      {
        from: 'gsap',
        imports: ['gsap']
      }
    ]
  }
})