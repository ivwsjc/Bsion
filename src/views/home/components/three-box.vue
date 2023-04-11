<template>
  <div class="view-pd three-container">
    <p class="title">{{$t('threeBox.title')}}</p>
    <p class="title" v-if="$t('threeBox.title1')">{{$t('threeBox.title1')}}</p>
    <div class="three-value">
      <div class="three-box">
        <img src="@/assets/images/p7.png" alt="">
        <p class="three-title">{{$t('threeBox.threeTitle1')}}</p>
        <p class="sub-title">{{$t('threeBox.subTitle1')}}</p>
        <p class="text">{{$t('threeBox.text1')}}</p>
      </div>
      <div class="three-box">
        <img src="@/assets/images/p8.png" alt="">
        <p class="three-title">{{$t('threeBox.threeTitle2')}}</p>
        <p class="sub-title">{{$t('threeBox.subTitle2')}}</p>
        <p class="text">{{$t('threeBox.text2')}}</p>
      </div>
      <div class="three-box">
        <img src="@/assets/images/p6.png" alt="">
        <p class="three-title">{{$t('threeBox.threeTitle3')}}</p>
        <p class="sub-title">{{$t('threeBox.subTitle3')}}</p>
        <p class="text">{{$t('threeBox.text3')}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="less" scoped>
@media only screen and (max-width: 750px) {
  .three-container {
    display: none;
  }
}

.three-container {
  padding-top: 1.12rem;
  .title {
    font-size: .16rem;
    font-weight: bold;
    text-align: center;
    &:nth-child(2) {
      padding-top: .08rem;
    }
  }

  .three-value {
    padding-top: .32rem;
    display: flex;

    .three-box {
      padding-right: .8rem;
      flex: 1;

      &:nth-child(3) {
        padding-right: 0;
      }
    }
    img {
      margin-top: .08rem;
      width: .728rem;
      height: .728rem;
    }

    .three-title {
      padding-top: .16rem;
      font-size: .128rem;
      font-weight: bold;
    }

    .sub-title {
      padding: .128rem 0 .064rem;
      font-size: .112rem;
      line-height: 1.8;
    }

    .text {
      font-size: 12px;
      opacity: 0.8;
      line-height: 1.2;
    }
  }
}
</style>