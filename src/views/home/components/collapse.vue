<template>
  <div class="view-pd home-collapse-container">
    <ElCollapse v-model="activeNames">
      <ElCollapseItem v-for="item in 8" :key="`coll-${item}`" :title="$t(`collapse.title${item}`)" :name="`${item}`">
        <div style="font-size: 14px; line-height: 1.3;" v-html="$t(`collapse.text${item}`)"></div>
      </ElCollapseItem>
    </ElCollapse>
  </div>
</template>

<script setup>
import { ElCollapse, ElCollapseItem } from 'element-plus'
import { ref } from 'vue'
const activeNames = ref('')
</script>

<style lang="scss">
.home-collapse-container {
  padding-top: 100px;

  .el-collapse-item__header {
    color: #fff;
    background-color: transparent;
  }

  .el-collapse-item__wrap {
    background-color: transparent;
  }

  .el-collapse-item__content {
    color: #fff;
  }

  .vtitle {
    padding-bottom: .16rem;
    font-size: 0.44rem;
    font-weight: bold;
  }

  .row-box {
    padding-top: .192rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #A6A6A6;
  }

  p {
    display: flex;
    align-items: center;
    font-size: .16rem;
  }

  .label {
    margin-right: .24rem;
    width: .224rem;
    height: .224rem;
    font-size: .16rem;
    font-weight: bold;
    text-align: center;
    line-height: .224rem;
    color: #000;
    background-color: #F1923F;
    border-radius: .04rem;
  }

  .sign {
    font-size: .48rem;
  }
}
</style>