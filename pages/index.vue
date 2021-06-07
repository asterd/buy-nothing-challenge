<template>
  <main class="flex flex-col h-screen">
    <p class="text-center text-green-800 text-3xl font-bold pt-8">The</p>
    <p class="text-center text-green-800 text-4xl md:text-8xl font-bold">#BuyNothing</p>
    <p class="text-center text-green-800 text-4xl font-bold">Challenge</p>
    <br/>
    <div class="w-screen flex-1 bg-green-800">
      <p class="text-center text-white text-3xl font-bold pt-8">Do you think you're RICH?</p>
      <p class="text-center text-white text-2xl font-bold pt-4">are you really sure you can say that?</p>
      <p class="text-center text-white text-2xl font-bold pt-4">are you rich enough to spend money for <b class="underline">absolutely</b> nothing?</p>
      <p class="text-center text-white text-4xl font-bold pt-8">PROVE IT!</p>
      <br/>

      <section class="pt-2 pb-10 max-w-3xl mx-auto">
        <div class="grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2">
          <nuxt-link
            :to="product.slug"
            class="overflow-hidden text-center"
            v-for="(product, p) in products"
            :key="p"
          >
            <div class="flex justify-center p-2">
              <!--Card 1-->
              <div class="rounded overflow-hidden shadow-lg bg-white p-5" :style="{ boxShadow: `0 0 0 8px #${product.color.hex}` }">
  <!--              <img :src="product.images[0]" alt="product.name" class="mb-4" />-->
                <img src="~assets/images/nothing.png" alt="product.name" class="mb-4" />
                <p class="font-semibold text-gray-700 mb-1">
                  {{ product.name }}
                </p>
                <p class="text-sm">&euro; {{ product.amount }}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </section>
      <p class="text-center text-white text-1xl font-bold pt-8">
        select one of the available 'nothing' levels and enter in the #BuyNothing chart!<br/>
        at 31-12-2021, the first 10, will receive a GIFT: the really exclusive #BuyNothing shirt!
      </p>
    </div>
  </main>
</template>

<script>
export default {
  transition: "fade",
  async asyncData({ $content }) {
    const products = await $content("products").fetch();
    return { products };
  },
};
</script>

<style>
.custom-shadow {
  box-shadow: 0 0 0 8px #f7c5dd;
}
.bg {
  background-color: #848484;
  background-image: url('~assets/images/bg.png')
}
</style>
