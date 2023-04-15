<template>
  <div class="home-girl-container">
    <div class="home-girl-box">
      <p class="title">{{$t('girl.title')}}</p>
      <img
        src="@/assets/images/p13.png"
        alt=""
      >
      <p class="text">{{$t('girl.text')}}</p>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
.home-girl-container {
  display: none;
  .home-girl-box {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    width: 70%;
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
    margin: 3rem 0;
    width: 4.64rem;
    height: 1.9rem;
  }

  .text {
    width: 70%;
    font-size: 0.24rem;
    text-align: center;
    line-height: 1.4;
  }
}

@media only screen and (max-width: 750px) {
  .home-girl-container {
    display: block;
  }
}
</style>