<template>
  <div class="index-container">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
</script>

<style lang="scss">
.index-container {
  height: 100vh;
  overflow-y: auto;
  background-color: #000;
}
</style>