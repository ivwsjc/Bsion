<template>
  <div class="homr-gold-container">
    <div class="homr-gold-box">
      <p class="title">Cryptocurrencies Protected by the</p>
      <p class="title">European Central Bank</p>
      <img src="@/assets/images/p19.png" alt="">
      <p class="text">Bison Bank is subject to strict supervision from the Portuguese Central Bank and the European Central Bank, complying with anti-money laundering and counter-terrorist financing regulations to protect the safety of client assets. Private bank accounts are protected by the European Deposit Insurance Scheme introduced by the European Union, providing up to €100,000 deposit insurance.</p>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>

.homr-gold-container {
  padding-top: 3.2rem;
  display: none;
  .homr-gold-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    font-size: 14px;
    background-image: linear-gradient(60deg, #FDC730, #F37335);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    font-weight: bold;
  }

  img {
    margin: .8rem 0;
    width: 2.7rem;
    height: 3.7rem;
  }

  .text {
    font-size: 12px;
    opacity: 0.8;
    transform: scale(0.8);
    text-align: center;
  }
}

@media only screen and (max-width: 750px) {
  .homr-gold-container {
    display: block;
  }
}
</style>