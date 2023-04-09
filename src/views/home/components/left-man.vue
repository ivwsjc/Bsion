<template>
  <div class="home-left-man-container">
    <div class="home-left-man-box">
      <p class="title">Fully transparent asset disclosure</p>
      <img
        src="@/assets/images/p16.png"
        alt=""
      >
      <a
        class="link"
        href="https://www.bisonbank.com/"
      >https://www.bisonbank.com/</a>
      <p class="text"> The European Central Bank requires private banks to disclose financial and risk conditions to the public on a regular basis. Anyone can inquire about related information on the Bison bank official website to understand the bank's operations.</p>
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
    font-size: 14px;
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
    padding: 0.8rem 0 .24rem;
    display: block;
    font-size: 12px;
    color: #f37335;
    text-align: center;
    font-style: normal;
  }

  .text {
    font-size: 12px;
    text-align: center;
  }
}
@media only screen and (max-width: 750px) {
  .home-left-man-container {
    display: block;
  }
}
</style>