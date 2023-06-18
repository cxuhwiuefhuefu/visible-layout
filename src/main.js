/*
 * @Author: Sunny
 * @Date: 2023-03-25 20:25:52
 * @LastEditors: Suuny
 * @LastEditTime: 2023-05-03 16:05:07
 * @Description: 
 * @FilePath: /visible-layout/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import myComps from './components/index'


Vue.config.productionTip = false
Vue.use(myComps)  

new Vue({
  render: h => h(App),
}).$mount('#app')
