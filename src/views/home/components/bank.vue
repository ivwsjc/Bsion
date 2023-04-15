<template>
  <div class="view-pd home-bank">
    <div class="big-box-show">
      <div class="big-box">
        <img
          class="bank-image"
          src="@/assets/images/p10.png"
          alt=""
        >
        <div class="right">
          <p class="title">{{$t('bank.title')}}</p>
          <div class="subTitle-box">
            <p class="subTitle">{{$t('bank.subTitle')}}</p>
            <p class="subTitle">{{$t('bank.subTitle1')}}</p>
          </div>
          <p class="threeTitle">{{$t('bank.threeTitle')}}</p>
          <p class="threeTitle">{{$t('bank.threeTitle1')}}</p>
          <p
            class="threeTitle"
            v-if="$t('bank.threeTitle2')"
          >{{$t('bank.threeTitle2')}}</p>
          <div class="join-btn-box">
            <JoinBtn />
          </div>
        </div>
      </div>
    </div>

    <div class="small-box-show">
      <div class="small-box">
        <p class="title">{{$t('bank.title')}}</p>
        <img
          class="bank-image"
          src="@/assets/images/p10.png"
          alt=""
        >
        <p class="title2">{{$t('bank.subTitle')}}</p>
        <p
          style="padding-top: .2rem;"
          class="title2"
        >{{$t('bank.subTitle1')}}</p>
        <p class="title3">{{$t('bank.threeTitle')}}{{$t('bank.threeTitle1')}}{{$t('bank.threeTitle2') ? $t('bank.threeTitle2') : ''}}</p>
        <div class="join-btn-box">
          <JoinBtn />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import JoinBtn from '@/components/join-btn.vue'
import {} from 'vue'
</script>

<style lang="scss" scoped>
.home-bank {
  padding-top: 80px;

  .big-box {
    display: flex;
    align-items: center;

    .bank-image {
      width: 3.52rem;
      height: 4.032rem;
    }

    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
    }

    .title {
      padding-top: 0.16rem;
      font-size: 0.16rem;
      font-weight: bold;

      &:nth-child(1) {
        padding-top: 0;
      }
    }

    .subTitle-box {
      padding: 0.56rem 0 0.24rem;
      p {
        text-align: center;
        &:nth-child(1) {
          padding-bottom: 10px;
        }
      }
    }

    .subTitle {
      font-size: 0.128rem;
      color: #d3d3d3;
    }

    .threeTitle {
      font-size: 12px;
      color: #999;
      line-height: 1.2;
    }

    .join-btn-box {
      margin-top: 0.32rem;
    }
  }
  .big-box-show {
    display: none;
  }

  .small-box {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      padding-top: 0.2rem;
      font-size: 14px;
      font-weight: bold;

      &:nth-child(1) {
        padding-top: 0;
      }
    }

    .bank-image {
      margin-top: 0.4rem;
      width: 6.06rem;
      height: 6.66rem;
    }

    .title2 {
      padding-top: 0.4rem;
      font-size: 0.28rem;
      color: #d3d3d3;
    }

    .title3 {
      padding-top: 0.4rem;
      font-size: 12px;
      color: #999;
      white-space: normal;
      line-height: 1.3;
      text-align: center;
    }

    .join-btn-box {
      margin-top: 0.4rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    .big-box-show {
      display: block;
    }
  }
  .small-box-show {
    display: none;
  }
  @media only screen and (max-width: 1023px) {
    .small-box-show {
      display: block;
    }
  }
}
</style>