<template>
  <div class="home-left-man-container">
    <div class="home-left-man-box">
      <p class="title">{{$t('leftMan.title')}}</p>
      <img
        src="@/assets/images/p16.png"
        alt=""
      >
      <a
        class="link"
        href="https://www.bisonbank.com/"
      >https://www.bisonbank.com/</a>
      <p class="text">{{$t('leftMan.text')}}</p>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
.home-left-man-container {
  padding-top: 1.2rem;
  display: none;
  .title {
    font-size: 0.28rem;
    line-height: 1.6;
    background-image: linear-gradient(60deg, #fdc730, #f37335);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    font-weight: bold;
    text-align: center;
  }

  img {
    margin-top: 1.6rem;
    width: 5.34rem;
    height: 4.54rem;
  }

  .link {
    padding: 0.8rem 0 0.24rem;
    display: block;
    font-size: 12px;
    color: #f37335;
    text-align: center;
    font-style: normal;
  }

  .text {
    padding: 0 15%;
    font-size: 12px;
    text-align: center;
    line-height: 1.4;
  }
}
@media only screen and (max-width: 750px) {
  .home-left-man-container {
    display: block;
  }
}
</style>