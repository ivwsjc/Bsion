<template>
  <div class="home-usb-container">
    <div class="home-usb-box">
      <p class="title"> Linking cryptocurrencies with fiat assets</p>
      <img
        src="@/assets/images/p14.png"
        alt=""
      >
      <p class="text">Building a bridge between cryptocurrencies and fiat assets, enjoying global banking services, and facilitating secure, compliant, transparent pricing with no hidden fees for USDT, euros, US dollars, British pounds, and Chinese yuan worldwide settlements. insurance.</p>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
.home-usb-container {
  padding-top: 3.2rem;
  display: none;

  .home-usb-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-size: 14px;
    background-image: linear-gradient(60deg, #fdc730, #f37335);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    font-weight: bold;
  }

  img {
    margin: 0.8rem 0;
    width: 4.48rem;
    height: 4.36rem;
  }

  .text {
    font-size: 12px;
    opacity: 0.8;
    transform: scale(0.8);
    text-align: center;
  }
}

@media only screen and (max-width: 750px) {
  .home-usb-container {
    display: block;
  }
}
</style>