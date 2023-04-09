<template>
  <header class="view-pd index-header">
    <img
      class="index-logo"
      src="@/assets/images/p12.png"
      alt=""
    >
    <div class="tool-box">
      <div class="nav-bar">
        <p>Home</p>
        <p>Sevice</p>
        <p>Contact</p>
      </div>
      <el-dropdown trigger="click">
        <img
          class="index-language"
          src="@/assets/images/p1.png"
          alt=""
        >
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem>中文</ElDropdownItem>
            <ElDropdownItem>英文</ElDropdownItem>
            <ElDropdownItem>葡萄牙文</ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </el-dropdown>
    </div>
  </header>

  <header
    :style="`top: ${top}px; background-color: ${bgColor};`"
    class="h5-index-header"
  >
    <p>Home</p>
    <p>Service</p>
    <p>Contact</p>
    <img
      src="@/assets/images/p15.png"
      @click="onMenuVisible"
      alt=""
    >
  </header>
</template>

<script setup>
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import { ref } from 'vue'

const top = ref(-132)
const bgColor = ref('transparent')

const onMenuVisible = () => {
  if (top.value === 0) {
    top.value = -132
    bgColor.value = 'transparent'
  } else {
    top.value = 0
    bgColor.value = 'rgb(18, 18, 18)'
  }
}
</script>

<style lang="scss" scoped>
.index-header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.736rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 100;
}

.index-logo {
  width: 1.76rem;
  height: 0.536rem;
}

.index-language {
  width: 0.68rem;
  height: 0.24rem;
}

.tool-box {
  display: flex;
  align-items: center;
}

.nav-bar {
  display: flex;

  p {
    padding-right: 0.64rem;
    font-size: 0.112rem;
    font-weight: bold;
    color: #fff;
  }
}

.h5-index-header {
  padding: 24px 44px 24px 24px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  border-radius: 0 0 20px 0;
  transition: top 0.3s;
  display: none;

  p {
    padding-bottom: 30px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
  }
  img {
    width: 16px;
    height: 10px;
  }
}

@media only screen and (max-width: 750px) {
  .index-header {
    display: none;
  }

  .h5-index-header {
    display: block;
  }
}
</style>