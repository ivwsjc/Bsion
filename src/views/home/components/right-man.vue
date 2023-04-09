<template>
  <div class="home-right-man-container">
    <div class="home-right-man-box">
      <p class="title">Global asset allocation </p>
      <div class="img-box">
        <img
          src="@/assets/images/p17.png"
          alt=""
        >
      </div>
      <p class="text"> Private banking clients can use cryptocurrencies as underlying assets for global asset allocation, purchase global private banking wealth management products, and provide one-stop asset custody and configuration solutions for new cryptocurrency investors. For any customized needs, please contact us.</p>
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
    padding: 0 .4rem;
    font-size: 12px;
    text-align: center;
  }
}

@media only screen and (max-width: 750px) {
  .home-right-man-container {
    display: block;
  }
}
</style>