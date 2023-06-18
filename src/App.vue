<!--
 * @Author: Sunny
 * @Date: 2023-03-25 20:25:52
 * @LastEditors: Suuny
 * @LastEditTime: 2023-05-03 15:51:50
 * @Description:
 * @FilePath: /visible-layout/src/App.vue
-->
<template>
  <div id="app">
   <head-view></head-view>
   <div class="content-box">
    <left-view></left-view>
    <center-view></center-view>
    <right-view></right-view>
   </div>
  </div>
</template>

<script>
import centerView from './views/centerView.vue'
import headView from './views/headView.vue'
import leftView from './views/leftView.vue'
import rightView from './views/rightView.vue'




export default {
  name: 'App',
  components: {
    centerView,
    headView,
    leftView,
    rightView
  }
}
</script>

<style>
.content-box {
  display: flex;
  height: calc(100vh - 80px);
}
</style>
