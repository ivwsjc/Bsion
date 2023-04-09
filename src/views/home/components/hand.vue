<template>
  <div class="home-hand-container">
    <div class="home-hand-box">
      <p class="title">Bison Crypto Card</p>
      <img
        src="@/assets/images/p11.png"
        alt=""
      >
      <p class="text"> The Bison Crypto Visa Card is coming soon and is currently only available for free to Bison Premier Banking users, enjoying the global Visa payment and settlement network, real-time exchange for multiple currencies such as cryptocurrencies, euros, US dollars, and Chinese yuan, bringing cryptocurrencies into everyday life.</p>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
.home-hand-container {
  padding-top: 1.2rem;
  display: none;

  .home-hand-box {
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
    text-align: center;
  }

  img {
    margin: 1.2rem 0;
    width: 6.52rem;
    height: 5.52rem;
  }

  .text {
    padding: 0 1.2rem;
    font-size: 12px;
    text-align: center;
    line-height: 1.2;
  }
}

@media only screen and (max-width: 750px) {
  .home-hand-container {
    display: block;
  }
}
</style>