<template>
  <header class="view-pd index-header">
    <img
      class="index-logo"
      src="@/assets/images/p12.png"
      alt=""
    >
    <el-dropdown>
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
  </header>
</template>

<script setup>
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import {} from 'vue'
</script>

<style lang="scss" scoped>
.index-header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: .736rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 100;
}

.index-logo {
  width: 1.76rem;
  height: .536rem;
}

.index-language {
  width: .68rem;
  height: .24rem;
}
</style>