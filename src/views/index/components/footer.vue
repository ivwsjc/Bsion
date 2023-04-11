<template>
  <div class="footer-join-box">
    <JoinBtn />
  </div>
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
      <!-- <div class="footer-right">
        <img
          src="@/assets/images/p2.png"
          alt=""
        >
        <p>Enjoy a Secure, Private Global Account, ECB-Protected Crypto Assets, with Waived Annual and Card Fees during the Trial Period</p>
      </div> -->
    </div>
  </footer>

  <footer class="view-pd h5-index-footer-container">
    <div class="footer-text">
      <template
        v-for="(item, index) in footerList"
        :key="`h5-foot-column-${index}`"
      >
        <div
          class="column"
          v-if="index !== 3"
        >
          <p
            v-for="subItem in item.list"
            :key="subItem"
          >{{subItem}}</p>
        </div>
      </template>
    </div>
    <div
      style="padding-top: .4rem;"
      class="footer-text"
    >
      <template
        v-for="(item, index) in footerList"
        :key="`h5-foot-column-${index}`"
      >
        <div
          style="padding: 0 .8rem; text-align: center;"
          class="column"
          v-if="index === 3"
        >
          <p
            v-for="subItem in item.list"
            :key="subItem"
          >{{subItem}}</p>
        </div>
      </template>
    </div>
  </footer>

  <div class="footer-down-code">
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
</template>

<script setup>
import JoinBtn from '@/components/join-btn.vue'
import footerList from './const'
import { ref } from 'vue'
const activeNames = ref('')
</script>

<style lang="scss">
.footer-join-box {
  padding: .8rem 0;
  display: flex;
  justify-content: center;
}

.index-footer-container {
  color: #fff;

  .footer-up {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .footer-left {
    display: flex;
    width: 100%;

    .column {
      padding: 0 0.48rem;
      width: 25%;
    }

    p {
      padding-bottom: 20px;
      opacity: 0.8;
      font-size: 14px;
      text-align: center;

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
}

.h5-index-footer-container {
  .footer-up {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.1rem;
      height: 0.8rem;
    }

    p {
      padding: 0.4rem 1rem 0;
      font-size: 12px;
      color: #fff;
      opacity: 0.8;
      line-height: 1.2;
    }
  }

  .footer-text {
    display: flex;

    .column {
      flex: 1;
    }

    p {
      padding: 0 20px 20px 0;
      opacity: 0.8;
      font-size: 14px;
      color: #fff;

      &:nth-child(1) {
        font-weight: bold;
        opacity: 1;
        font-size: 16px;
      }
    }
  }
}

.footer-down-code {
  padding-top: 0.32rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .qrcode {
    width: 1.424rem;
    height: 1.376rem;
  }

  .logo {
    margin-top: 0.16rem;
    width: 2.192rem;
    height: 0.664rem;
  }
}

@media only screen and (min-width: 751px) {
  .h5-index-footer-container {
    display: none;
  }
}

@media only screen and (max-width: 750px) {
  .footer-join-box  {
    padding: 2rem 0;
  }

  .index-footer-container {
    display: none;
  }

  .footer-down-code {
    padding-top: 0.4rem;

    .qrcode {
      width: 1.68rem;
      height: 1.64rem;
    }
    .logo {
      margin-top: 0.4rem;
      width: 3.14rem;
      height: 0.96rem;
    }
  }
}
</style>