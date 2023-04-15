<template>
  <div class="homr-gold-container">
    <div class="homr-gold-box">
      <p class="title">{{$t('gold.title')}}</p>
      <img
        src="@/assets/images/p19.png"
        alt=""
      >
      <p class="text">{{$t('gold.text')}}</p>
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
    margin: 0.8rem 0;
    width: 2.7rem;
    height: 3.7rem;
  }

  .text {
    width: 70%;
    font-size: 12px;
    text-align: center;
    line-height: 1.4;
  }
}

@media only screen and (max-width: 750px) {
  .homr-gold-container {
    display: block;
  }
}
</style>