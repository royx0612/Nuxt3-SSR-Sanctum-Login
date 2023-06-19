// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      backendUrl: "https://localhost:8000",
      frontendUrl: "https://localhost:3000",
    },
  },
});
