<template>
  <main>
    <div class="flex">
      <div
        class="h-screen w-screen text-white flex items-center justify-center p-8"
        :style="{ backgroundColor: `#${product.color.hex}` }"
      >
        <nuxt-link
          to="/"
          class="flex items-center space-x-2 absolute top-8 left-8"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            ></path>
          </svg>
          <p>Home</p>
        </nuxt-link>
        <div class="space-y-4 w-4/5 md:w-2/6">
          <div class="content-center">
            <img class="object-cover w-64 h-64 m-auto rounded-full" src="~assets/images/nothing.png" :alt="product.name" />
          </div>
          <p class="text-2xl font-bold">{{ product.name }}</p>
          <p>$ {{ product.amount }}</p>
          <p class="text-gray-100 text-md pb-8">{{ product.description }}</p>
          <button
            @click="buy()"
            class="w-full py-3 bg-white text-gray-800 font-semibold flex items-center justify-center space-x-2"
            :class="{ 'opacity-50 cursor-not-allowed': loading }"
          >
            <btn-loader v-if="loading" />
            <p>Buy Now</p>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  transition: "fade",
  async asyncData({ $content, params }) {
    const product = await $content("products", params.slug).fetch();
    return { product };
  },
  data() {
    return {
      stripe: null,
      loading: false,
    };
  },
  methods: {
    async buy() {
      try {
        this.loading = true;
        const { data } = await this.$axios.post("/api/checkout", {
          order: {
            name: this.product.name,
            description: this.product.description,
            images: this.product.images,
            amount: this.product.amount * 100,
            currency: this.product.currency,
            quantity: 1,
          },
          slug: this.$route.params.slug,
        });
        this.stripe.redirectToCheckout({ sessionId: data.id });
      } catch (err) {
        alert(err);
        this.loading = false;
      }
    },
  },
  mounted() {
    // this.stripe = Stripe("pk_test_51IzfkwCgu2Rq8jqK8gDfiNfcVGLlGirxNDfAHWBLW7xXpp272hhOFoYZNtKzgzG5OBDrw23bLs3m3tCdnbTwQIpC00Bxwyx1G4");
    this.stripe = Stripe("pk_live_51IzfkwCgu2Rq8jqKKL9FeUR3uZFc0tyJwALIsyHBNGPQNfgMek0vva5QQGkKpoDtSTeyKWoE6lQ0E3mlXwokLWwd008i9ZoNbO");
  },
};
</script>
