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
          <div class="join-btn">
            <div class="btn">{{$t('bank.btnText')}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="small-box-show">
      <div class="small-box">
        <p class="title">Bison Premier Banking: </p>
        <p class="title">Where Crypto Wealth and Discretion Meet</p>
        <img
          class="bank-image"
          src="@/assets/images/p10.png"
          alt=""
        >
        <p class="title2">Selecting 100 Crypto Elites, </p>
        <p
          style="padding-top: .2rem;"
          class="title2"
        >Elevate Your Dignified Crypto Lifestyle</p>
        <img
          class="join-image"
          src="@/assets/images/p2.png"
          alt=""
        >
        <p class="title3">Enjoy a Secure, Private Global Account, </p>
        <p class="title3">ECB-Protected Crypto Assets, with Waived </p>
        <p class="title3">Annual and Card Fees during the Trial Period</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss">
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

    .join-btn {
      margin-top: .32rem;
      width: 2.384rem;
      height: .544rem;
      font-size: 0.176rem;
      border: 1px solid transparent;
      border-radius: 0.08rem;
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;
      background-image: linear-gradient(to right, #000, #000),
        linear-gradient(to right, #fdc830, #f37335);

      .btn {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        background-image: linear-gradient(to right, #fdc830, #f37335);
      }
    }

    .subTitle-box {
      padding: .56rem 0 .24rem;
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

    .join-image {
      margin-top: 0.8rem;
      margin-bottom: 0.16rem;
      width: 2.84rem;
      height: 0.74rem;
    }

    .title3 {
      font-size: 12px;
      color: #999;
      white-space: normal;
      line-height: 1.3;
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