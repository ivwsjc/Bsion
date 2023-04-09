<template>
  <div class="home-left-team-container">
    <p class="title">The necessary threshold for becoming</p>
    <p
      style="padding-top: .16rem;"
      class="title"
    >a qualified investor</p>
    <img
      src="@/assets/images/p18.png"
      alt=""
    >
    <p class="text">The threshold for becoming a private banking client is only €100,000 worth of cryptocurrency assets and necessary personal identity information. Lawyers will assist you in handling related compliance matters. Currently, only 100 clients are accepted.</p>
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
    font-size: 14px;
    background-image: linear-gradient(60deg, #fdc730, #f37335);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    font-weight: bold;
    text-align: center;
  }

  img {
    margin: 1.2rem 0;
    width: 5.32rem;
    height: 4.54rem;
  }

  .text {
    padding: 0 .8rem;
    font-size: 12px;
    text-align: center;
    line-height: 1.2;
  }
}

@media only screen and (max-width: 750px) {
  .home-left-team-container {
    display: block;
  }
}
</style>