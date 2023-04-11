<template>
  <div class="left-cover-container">
    <div class="left-cover-body">
      <img src="@/assets/images/p9.png" alt="">
      <div class="right-text">
        <p class="title">{{$t('leftCover.title1')}}</p>
        <p class="title" v-if="$t('leftCover.title2')">{{$t('leftCover.title2')}}</p>
        <p class="text">{{$t('leftCover.text')}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="less" scoped>
@media only screen and (max-width: 750px) {
  .left-cover-container {
    display: none;
  }
}
.left-cover-container {
  .left-cover-body {
    margin-top: 1.92rem;
    display: flex;
    align-items: center;
  }
  img {
    width: 40%;
  }

  .right-text {
    margin-left: 10%;
    width: 50%;
    padding: 0 .72rem;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: .16rem;
    font-weight: bold;
    text-align: center;

    &:nth-child(2) {
      padding-top: 10px;
    }
  }

  .text {
    padding: .8rem .48rem 0;
    font-size: 12px;
    text-align: center;
    line-height: 1.3;
  }
}
</style>