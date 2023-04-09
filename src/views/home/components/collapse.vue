<template>
  <!-- <div class="view-pd home-collapse-container">
    <p class="vtitle">FAQ</p>
    <div class="row-box">
      <p>
        <span class="label">1</span>
        Who is Bison bank?
      </p>
      <span style="color: #EFA25F;" class="sign">+</span>
    </div>
    <div class="row-box">
      <p>
        <span class="label">2</span>
         Why choose Bison Premier Banking?
      </p>
      <span class="sign">+</span>
    </div>
    <div class="row-box">
      <p>
        <span class="label">3</span>
         Why is now the best time to join Bison Premier Banking?
      </p>
      <span class="sign">+</span>
    </div>
    <div class="row-box">
      <p>
        <span class="label">4</span>
         How can I ensure that my funds are secure with Bison Bank? 
      </p>
      <span class="sign">+</span>
    </div>
    <div class="row-box">
      <p>
        <span class="label">5</span>
         How can I ensure the privacy of my account? 
      </p>
      <span class="sign">+</span>
    </div>
    <div class="row-box">
      <p>
        <span class="label">6</span>
         What are the benefits of a Bison Premier Banking account?
      </p>
      <span class="sign">+</span>
    </div>
    <div class="row-box">
      <p>
        <span class="label">7</span>
         What are the fees for Bison Premier Banking? 
      </p>
      <span class="sign">+</span>
    </div>
    <div class="row-box">
      <p>
        <span class="label">8</span>
         How do I join Bison Premier Banking? 
      </p>
      <span class="sign">+</span>
    </div>
  </div> -->
  <div class="view-pd home-collapse-container">
    <ElCollapse v-model="activeNames">
      <ElCollapseItem v-for="(item, index) in COLLAPSE_MAP" :key="`coll-${index}`" :title="item.title" :name="`${index}`">
        <div style="font-size: 12px">{{item.value}}</div>
      </ElCollapseItem>
    </ElCollapse>
  </div>
</template>

<script setup>
import { ElCollapse, ElCollapseItem } from 'element-plus'
import { COLLAPSE_MAP } from './const'
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