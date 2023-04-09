<template>
  <div class="home-container">
    <Bank />
    <ThreeBox />
    <Cover />
    <CoverTitle />
    <LeftCover />
    <BankTitle />
    <Collapse />
  </div>
</template>

<script setup>
import Bank from './components/bank.vue'
import ThreeBox from './components/three-box.vue'
import Cover from './components/cover.vue'
import CoverTitle from './components/cover-title.vue'
import LeftCover from './components/left-cover.vue'
import BankTitle from './components/bank-title.vue'
import Collapse from './components/collapse.vue'
import {} from 'vue'
</script>

<style lang="scss" scoped>
.home-container {
  color: #fff;
}
</style>