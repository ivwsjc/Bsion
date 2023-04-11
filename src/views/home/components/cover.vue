<template>
  <div class="cover">
    <img
      class="coverimg"
      src="@/assets/images/p4.png"
      alt=""
    >
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

@media only screen and (max-width: 750px) {
  .cover {
    display: none;
  }
}
</style>