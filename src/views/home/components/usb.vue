<template>
  <div class="home-usb-container">
    <div class="home-usb-box">
      <p class="title">{{$t('usb.title')}}</p>
      <img
        src="@/assets/images/p14.png"
        alt=""
      >
      <p class="text">{{$t('usb.text')}}</p>
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
    width: 80%;
    font-size: 0.28rem;
    text-align: center;
    line-height: 1.6;
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
    width: 70%;
    font-size: 12px;
    text-align: center;
    line-height: 1.4;
  }
}

@media only screen and (max-width: 750px) {
  .home-usb-container {
    display: block;
  }
}
</style>