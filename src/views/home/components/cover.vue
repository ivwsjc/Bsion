<template>
  <div class="cover">
    <img class="coverimg" src="@/assets/images/p4.png" alt="">
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 750px) {
  .cover {
    display: none;
  }
}
.cover {
  .coverimg {
    margin-top: .8rem;
    width: 100%;
  }
}
</style>