<template>
  <div class="cover-title">
      <p class="title">Customer privacy protection</p>
      <p class="sub-title"> We attach great importance to user privacy and protection, strictly comply with relevant laws and</p>
      <p class="sub-title">industry standards, and ensure the security of customer personal information and assets.</p>
      <img src="@/assets/images/p13.png" alt="">
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 750px) {
  .cover-title {
    display: none;
  }
}
.cover-title {
  padding-top: .96rem;
  text-align: center;
  .title {
    font-size: .144rem;
    font-weight: bold;
    text-align: center;
  }

  .sub-title {
    padding-top: .16rem;
    font-size: .096rem;
    text-align: center;

    &:nth-child(3) {
      padding-top: 2px;
    }
  }

  img {
    margin-top: .48rem;
    width: 4.08rem;
    height: 1.76rem;
  }
}
</style>