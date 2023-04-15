<template>
  <div class="home-left-team-container">
    <p class="title">{{$t('leftTeam.title')}}</p>
    <img
      src="@/assets/images/p18.png"
      alt=""
    >
    <p class="text">{{$t('leftTeam.text')}}</p>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
.home-left-team-container {
  padding-top: 1.2rem;
  display: none;

  .title {
    padding: 0 15%;
    font-size: 0.28rem;
    background-image: linear-gradient(60deg, #fdc730, #f37335);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  img {
    margin: 1.2rem 0;
    width: 5.32rem;
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
  .home-left-team-container {
    display: block;
  }
}
</style>