<template>
  <div class="left-cover-container">
    <div class="left-cover-body">
      <img src="@/assets/images/p9.png" alt="">
      <div class="right-text">
        <p class="title">The necessary threshold for becoming</p>
        <p class="title">a qualified investor</p>
        <p class="text">The threshold for becoming a private banking client is only €100,000 worth</p>
        <p class="text">of cryptocurrency assets and necessary personal identity</p>
        <p class="text">information.Lawyers will assist you in handling related compliance matters.</p>
        <p class="text">Currently, only 100 clients are accepted.</p>
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
    width: 50%;
  }

  .right-text {
    padding: 0 .72rem;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: .128rem;
    font-weight: bold;
    text-align: center;

    &:nth-child(2) {
      padding-top: .08rem;
      padding-bottom: .8rem;
    }
  }

  .text {
    font-size: 12px;
    opacity: 0.8;
    transform: scale(0.6);
  }
}
</style>