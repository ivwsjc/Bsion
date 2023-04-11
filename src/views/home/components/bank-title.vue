<template>
  <div class="bank-title-container">
    <div class="bank-title-box">
      <div class="title">{{$t('bankTitle.title')}}</div>
      <p class="text">{{$t('bankTitle.text1')}}</p>
      <p class="text">{{$t('bankTitle.text2')}}</p>
      <p class="text">{{$t('bankTitle.text3')}}</p>
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
    width: 70%;
    font-size: 12px;
    line-height: 1.3;
    text-align: center;
  }

  img {
    margin-top: .24rem;
    width: 4rem;
    height: 2.96rem;
  }
}
</style>