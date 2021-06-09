<template>
  <main>
    <div class="flex">
      <div
        class="h-screen w-screen text-white flex items-center justify-center"
        style="background-color: white"
      >
        <nuxt-link
          to="/"
          class="flex items-center space-x-2 absolute top-8 left-8"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="#4e54c8"
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
          <p style="color: #4e54c8">Home</p>
        </nuxt-link>
        <div class="space-y-4 w-5/6 md:w-1/2 text-white">
          <b class="text-blue-800 pb-8 text-center">Current Chart:</b>
          <ul class="list bg-blue-800">
            <li class="item">
              <i class="left-icon far fa-circle"></i>
              <div>Amhed Falaj</div>
              <b class="right-icon">&euro; 999.99</b>
            </li>
            <li class="item">
              <i class="left-icon far fa-circle"></i>
              <div>Mike Ferguson</div>
              <b class="right-icon">&euro; 999.99</b>
            </li>
          </ul>
          <div class="pt-8 px-4 text-blue-800 text-sm">
            Nb. The chart is not live-updated. To be sure the data is valid, the update of chart occurs about once a day.
            This is the only way to be sure that the values are correct.
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "chart.vue"
}
</script>

<style scoped>
:root {
  --main-bg-color: #f0f0f0;
  --item-hover-bg: #8e44ad;
  --item-hover-color: #fff;
  --item-bg-color: #fff;
  --box-header-bg: #9b59b6;
  --box-header-color: #fff;
}

.list {
  position: relative;
  padding: unset;
  margin: 0;
  width: 100%;
}

.item {
  list-style: none;
  padding: 15px 40px;
  position: relative;
  background: var(--item-bg-color);
  cursor: pointer;
  transition: all 0.3s;
  border-bottom: 1px solid white;
}

.item:hover {
  transform: scale(1.05);
  z-index: 100;
  background: var(--item-hover-bg);
  color: var(--item-hover-color);
}

.item i {
  color: var(--item-hover-bg);
}

.item:hover i {
  color: var(--item-hover-color);
}

.right-icon {
  position: absolute;
  right: 13px;
  top: 50%;
  transform: translateY(-50%);
}

.left-icon {
  position: absolute;
  left: 13px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
