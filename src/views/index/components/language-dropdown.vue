<template>
  <ElDropdown
    trigger="click"
    @command="onCommand"
  >
    <p class="language">{{$t('language')}}</p>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem command="zh-cn">
          <div :class="{'lg-item': true, 'lg-active': lgValue === 'zh-cn'}">
            <img
              src="@/assets/images/triangle.png"
              alt=""
            >
            中文
          </div>
        </ElDropdownItem>
        <ElDropdownItem command="en">
          <div :class="{'lg-item': true, 'lg-active': lgValue === 'en'}">
            <img
              src="@/assets/images/triangle.png"
              alt=""
            >
            English
          </div>
        </ElDropdownItem>
        <ElDropdownItem command="po">
          <div :class="{'lg-item': true, 'lg-active': lgValue === 'po'}">
            <img
              src="@/assets/images/triangle.png"
              alt=""
            >
            Portuguese
          </div>
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<script setup>
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const lgValue = ref('en')

// 切换语言
const onCommand = (value) => {
  locale.value = value
  lgValue.value = value
}
</script>

<style lang="scss" scoped>
.language {
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
}

.lg-item {
  display: flex;
  align-items: center;

  img {
    width: 18px;
    opacity: 0;
  }
}

.lg-active {
  color: #000;
  img {
    opacity: 1;
  }
}
</style>