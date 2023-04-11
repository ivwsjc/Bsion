<template>
  <div class="cover">
    <img
      class="coverimg"
      src="@/assets/images/p4.png"
      alt=""
    >
    <div class="cover-content">
      <div class="left">
        <p class="title">{{$t('cover.title')}}</p>
        <p class="text">{{$t('cover.text')}}</p>
      </div>
      <div class="right">
        <p class="item">USDT</p>
        <p class="item">GBP</p>
        <p class="item">USD</p>
        <p class="item">EUR</p>
        <p class="item">CNY</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
.cover {
  position: relative;
  .coverimg {
    margin-top: 0.8rem;
    width: 100%;
  }
}

.cover-content {
  padding: .48rem;
  position: absolute;
  top: .72rem;
  left: .72rem;
  right: .72rem;
  bottom: .72rem;
  z-index: 10;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;

  .left {
    padding: 0 1.28rem;
    flex: 1;
    color: #000;
  }

  .title {
    padding-bottom: .24rem;
    font-size: .144rem;
    text-align: center;
  }

  .text {
    font-size: 14px;
    text-align: center;
    line-height: 1.3;
  }

  .right {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 1.84rem;
    flex-shrink: 0;

    .item {
      margin-bottom: .16rem;
      width: .8rem;
      height: .32rem;
      font-size: .128rem;
      font-weight: bold;
      color: #fff;
      background-color: #000;
      border-radius: .032rem;
      text-align: center;
      line-height: .32rem;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  .cover {
    display: none;
  }
}
</style>