<template>
  <footer class="view-pd index-footer-container">
    <div class="footer-up">
      <div class="footer-left">
        <div
          class="column"
          v-for="(item, index) in footerList"
          :key="`foot-column-${index}`"
        >
          <p
            v-for="subItem in item.list"
            :key="subItem"
          >{{subItem}}</p>
        </div>
      </div>
      <div class="footer-right">
        <img
          src="@/assets/images/p2.png"
          alt=""
        >
        <p>Enjoy a Secure, Private Global Account, ECB-Protected Crypto Assets, with Waived Annual and Card Fees during the Trial Period</p>
      </div>
    </div>
    <div class="footer-down">
      <img
        class="qrcode"
        src="@/assets/images/p3.png"
        alt=""
      >
      <img
        class="logo"
        src="@/assets/images/p12.png"
        alt=""
      >
    </div>
  </footer>
</template>

<script setup>
import footerList from './const'
import { ref } from 'vue'
const activeNames = ref('')
</script>

<style lang="scss">
@media only screen and (max-width: 750px) {
  .index-footer-container {
    display: none;
  }
}
.index-footer-container {
  padding-top: 1.6rem;
  color: #fff;

  .footer-up {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .footer-left {
    display: flex;
    flex: 1;

    .column {
      flex: 1;
    }

    p {
      padding: 0 20px 20px 0;
      max-width: 200px;
      opacity: 0.8;
      font-size: 14px;

      &:nth-child(1) {
        font-weight: bold;
        opacity: 1;
        font-size: 16px;
      }
    }
  }

  .footer-right {
    padding-left: 0.16rem;
    display: flex;
    flex-direction: column;
    width: 2.384rem;

    img {
      width: 2.384rem;
      height: 0.624rem;
    }

    p {
      padding-top: 0.32rem;
      font-size: 14px;
      opacity: 0.5;
    }
  }

  .footer-down {
    padding-top: 1.28rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .qrcode {
      width: 1.424rem;
      height: 1.376rem;
    }

    .logo {
      margin-top: 0.24rem;
      width: 2.192rem;
      height: 0.664rem;
    }
  }

  // @media only screen and (max-width: 750px) {
  //   .footer-up {
  //     display: block;
  //   }

  //   .footer-left {
  //     p {
  //       font-size: 12px;

  //       &:nth-child(1) {
  //         font-size: 14px;
  //       }
  //     }
  //   }

  //   .footer-right {
  //     padding: 20px 0 0 0;
  //     align-items: center;
  //     flex-direction: row;
  //     width: auto;

  //     p {
  //       padding: 0 0 0 10px;
  //       font-size: 12px;
  //       line-height: 1.3;
  //     }
  //   }
  // }
}
</style>