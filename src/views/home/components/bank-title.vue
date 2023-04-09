<template>
  <div class="bank-title-container">
    <div class="bank-title-box">
      <div class="title">Bison Crypto Card</div>
      <p class="text">The Bison Crypto Visa Card is coming soon and is currently only available for free to Bison Premier Banking users, enjoying</p>
      <p class="text">the global Visa payment and settlement network, real-time exchange for multiple currencies such as cryptocurrencies,</p>
      <p class="text">euros, US dollars, and Chinese yuan, bringing cryptocurrencies into everyday life.</p>
      <img src="@/assets/images/p11.png" alt="">
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 750px) {
  .bank-title-container {
    display: none;
  }
}
.bank-title-container {
  padding-top: .8rem;
  padding-left: 1.2rem;
  .bank-title-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    padding-bottom: .16rem;
    font-size: .288rem;
    font-weight: bold;
    background-image: linear-gradient(60deg,#FDC730, #F37335);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .text {
    font-size: 12px;
    opacity: 0.9;
    transform: scale(0.8);
  }

  img {
    margin-top: .24rem;
    width: 4rem;
    height: 2.96rem;
  }
}
</style>