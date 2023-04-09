<template>
  <div class="view-pd three-container">
    <p class="title">A uniquely elevated private banking experience</p>
    <p class="title">shaped around you</p>
    <div class="three-value">
      <div class="three-box">
        <img src="@/assets/images/p7.png" alt="">
        <p class="three-title">SAFE</p>
        <p class="sub-title">Cryptocurrencies Protected by  the European Central Bank</p>
        <p class="text">Private bank accounts are protected by the European Deposit Insurance Scheme introduced by the European Union, providing up to €100,000 deposit insurance.Bison Bank is subject to strict supervision from the Portuguese Central Bank and the European Central Bank, complying with anti-money laundering and counter-terrorist financing regulations to protect the safety of client assets. </p>
      </div>
      <div class="three-box">
        <img src="@/assets/images/p8.png" alt="">
        <p class="three-title">GLOBAL</p>
        <p class="sub-title">Global asset allocation </p>
        <p class="text"> Private banking clients can use cryptocurrencies as underlying assets for global asset allocation, purchase global private banking wealth management products, and provide one-stop asset custody and configuration solutions for new cryptocurrency investors. For any customized needs, please contact us.</p>
      </div>
      <div class="three-box">
        <img src="@/assets/images/p6.png" alt="">
        <p class="three-title">TRANSPARENT</p>
        <p class="sub-title"> Fully transparent asset    disclosure</p>
        <p class="text"> The European Central Bank requires private banks to disclose financial and risk conditions to the public on a regular basis. Anyone can inquire about related information on the Bison bank official website to understand the bank's operations.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="less" scoped>
@media only screen and (max-width: 750px) {
  .three-container {
    display: none;
  }
}

.three-container {
  padding-top: 1.12rem;
  .title {
    font-size: .16rem;
    font-weight: bold;
    text-align: center;
    &:nth-child(2) {
      padding-top: .08rem;
    }
  }

  .three-value {
    padding-top: .32rem;
    display: flex;

    .three-box {
      padding-right: .8rem;
      flex: 1;

      &:nth-child(3) {
        padding-right: 0;
      }
    }
    img {
      margin-top: .08rem;
      width: .728rem;
      height: .728rem;
    }

    .three-title {
      font-size: 16px;
      font-weight: bold;
    }

    .sub-title {
      padding: .128rem 0 .064rem;
      font-size: 14px;
      line-height: 1.8;
    }

    .text {
      font-size: 12px;
      opacity: 0.8;
      line-height: 1.2;
    }
  }
}
</style>