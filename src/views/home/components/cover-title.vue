<template>
  <div class="home-cover-title">
    <p class="title">{{$t('coverTitle.title')}}</p>
    <p class="sub-title"> We attach great importance to user privacy and protection, strictly comply with relevant laws and</p>
    <p class="sub-title">industry standards, and ensure the security of customer personal information and assets.</p>
    <img
      src="@/assets/images/p13.png"
      alt=""
    >
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
.home-cover-title {
  padding-top: 0.96rem;
  display: none;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 0.144rem;
    font-weight: bold;
  }

  .sub-title {
    padding-top: 0.16rem;
    font-size: 0.096rem;

    &:nth-child(3) {
      padding-top: 2px;
    }
  }

  img {
    margin-top: 0.48rem;
    width: 4.08rem;
    height: 1.76rem;
  }
}

@media only screen and (min-width: 750px) {
  .home-cover-title {
    display: flex;
  }
}
</style>