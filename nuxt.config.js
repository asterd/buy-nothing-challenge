export default {
  target: "static",
  head: {
    title: 'buy-nothing-challenge',
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://js.stripe.com/v3/"
      }
    ]
  },
  plugins: ["~plugins/modal.js"],
  components: true,
  buildModules: ["@nuxtjs/tailwindcss", '@nuxtjs/google-fonts'],
  modules: ["@nuxtjs/axios", "@nuxt/content"],
  content: {},
  tailwindcss: {
    jit: true
  },
  googleFonts: {
    families: {
      Roboto: true,
      Ranchers: true,
      'Baloo+Tammudu+2': true,
      Lato: [100, 300],
      'Suez+One': true,
    }
  },
  axios: {
    baseURL: process.env.BASE_URL
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },
  build: {}
};
