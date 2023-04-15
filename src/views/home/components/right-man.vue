<template>
  <div class="home-right-man-container">
    <div class="home-right-man-box">
      <p class="title">{{$t('rightMan.title')}}</p>
      <div class="img-box">
        <img
          src="@/assets/images/p17.png"
          alt=""
        >
      </div>
      <p class="text">{{$t('rightMan.text')}}</p>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
.home-right-man-container {
  padding-top: 1rem;
  display: none;

  .title {
    font-size: 14px;
    background-image: linear-gradient(60deg, #fdc730, #f37335);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    font-weight: bold;
    text-align: center;
  }

  .img-box {
    padding: 1.4rem 0;
    display: flex;
    justify-content: flex-end;
  }

  img {
    width: 5.3rem;
    height: 4.54rem;
  }

  .text {
    padding: 0 15%;
    font-size: 12px;
    text-align: center;
    line-height: 1.4;
  }
}

@media only screen and (max-width: 750px) {
  .home-right-man-container {
    display: block;
  }
}
</style>