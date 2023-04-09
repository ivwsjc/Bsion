<template>
  <div class="home-girl-container">
    <div class="home-girl-box">
      <p class="title">Customer privacy protection</p>
      <img
        src="@/assets/images/p13.png"
        alt=""
      >
      <p class="text">We attach great importance to user privacy and protection, strictly comply with relevant laws and industry standards, and ensure the security of customer personal information and assets.</p>
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
    font-size: 14px;
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
    font-size: 12px;
    opacity: 0.8;
    transform: scale(0.8);
    text-align: center;
  }
}

@media only screen and (max-width: 750px) {
  .home-girl-container {
    display: block;
  }
}
</style>