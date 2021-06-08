<template>
  <main class="flex flex-col">
    <p class="tf text-center tcol text-3xl font-bold pt-8">The</p>
    <p class="tf text-center tcol text-4xl md:text-8xl font-bold">#BuyNothing</p>
    <p class="tf text-center tcol text-4xl font-bold">Challenge</p>
    <br/>
    <div class="context w-screen flex-1">
      <p class="text-center text-white text-3xl font-bold pt-8">Do you think you're RICH?</p>
      <p class="text-center text-white text-2xl font-bold pt-4">are you really sure you can say that?</p>
      <p class="text-center text-white text-2xl font-bold pt-4">Anyone can buy something expensive, but... </p>
      <p class="text-center text-white text-2xl font-bold">are you rich enough to spend money for <b class="underline">ASBOLUTELY</b> nothing?</p>
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

      <p class="text-center text-white text-2xl font-bold pt-8 pb-8">
        select one of the available 'nothing' items and enter in the #BuyNothing chart!<br/>
        at 31-12-2021, the first 10, will receive a GIFT: the really exclusive #BuyNothing shirt!
      </p>
      <br/><br/>
      <p class="text-center text-white text-1xl font-bold pt-8">
        Legal notes:
        This is not an e-commerce. Each time you pay for one of the 'nothing' items, you are DONATING money to me.
        This is a simple donation and you can't require money back. The challenge is your ability to donate money to
        someone you didn't know and this does not impact in any way on you. Only very Rich person can do that!
        So, paying this items you agree that is a donation and you CAN'T pretend anything from anyone related to this
        web application.
      </p>
      <br/>
      <br/>
    </div>

    <div class="area">
      <ul class="circles">
        <li>&#8368;</li>
        <li>&#8361;</li>
        <li>&#162;</li>
        <li>&#163;</li>
        <li>&#165;</li>
        <li>&#36;</li>
        <li>&#8369;</li>
        <li>&#8363;</li>
        <li>&#8365;</li>
        <li>&euro;</li>
      </ul>
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
.tcol {
  color: #4e54c8;
}

.tf {
  font-family: 'Suez One', Roboto, serif;
}

.context {
  width: 100%;
  position: absolute;
  top:25vh;
  z-index: 1000;
}

.area{
  background: #4e54c8;
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  width: 100%;
  height: 100vh;
}

.circles{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li{
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
  color: white;
}

.circles li:nth-child(1){
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
  font-size: 70px;
  padding-left: 20px;
  padding-bottom: 20px;
}

.circles li:nth-child(2){
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
  font-size: 15px;
  padding-left: 10px;
  padding-bottom: 10px;
}

.circles li:nth-child(3){
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
  font-size: 15px;
  padding-left: 10px;
  padding-bottom: 10px;
}

.circles li:nth-child(4){
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
  font-size: 50px;
  padding-left: 20px;
  padding-bottom: 20px;
}

.circles li:nth-child(5){
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
  font-size: 15px;
  padding-left: 10px;
  padding-bottom: 10px;
}

.circles li:nth-child(6){
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
  font-size: 90px;
  padding-left: 35px;
  padding-bottom: 20px;
}

.circles li:nth-child(7){
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
  font-size: 120px;
  padding-left: 35px;
  padding-bottom: 20px;
}

.circles li:nth-child(8){
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
  font-size: 20px;
  padding-left: 10px;
  padding-bottom: 10px;
}

.circles li:nth-child(9){
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
  font-size: 10px;
  padding-left: 5px;
  padding-bottom: 5px;
}

.circles li:nth-child(10){
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
  font-size: 120px;
  padding-left: 35px;
  padding-bottom: 20px;
}

@keyframes animate {
  0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }
  100%{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
