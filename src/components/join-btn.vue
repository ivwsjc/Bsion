<template>
  <div class="join-btn">
    <div class="btn">{{$t('bank.btnText')}}</div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
.join-btn {
  width: 2.384rem;
  height: 0.544rem;
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

@media only screen and (max-width: 750px) {
  .join-btn {
    width: 3.04rem;
    height: .74rem;
    font-size: .24rem;
    border-radius: 0.2rem;
  }
}
</style>