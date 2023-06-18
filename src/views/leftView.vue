<!--
 * @Author: Sunny
 * @Date: 2023-03-25 20:35:17
 * @LastEditors: Suuny
 * @LastEditTime: 2023-05-08 14:58:42
 * @Description: 
 * @FilePath: /visible-layout/src/views/leftView.vue
-->
<template>
    <div class="wrapper">
        <!-- {{menus}} -->
        <!-- 左边
        <textComp /> -->
        <div class="menuItem" 
             @dragstart="dragstart"  
             :data-type="item.type"
             :data-name="item.name"
             draggable="true" 
             v-for="(item, index) in menus" 
             :key="index">{{ item.name }}</div>
    </div>
</template>

<script>
import menus from './menuList'
export default {
    components: {},
    data() {
        return {
            menus: menus
        };
    },
    computed: {},
    watch: {},
    methods: {
        dragstart(e) {
            console.log('e --------->', e)
            let info = {
                name: e.target.getAttribute('data-name'),
                type: e.target.getAttribute('data-type')
            }
            console.log('info -------->', info)
            e.dataTransfer.setData('info', JSON.stringify(info))
        }
    },
    created() {},
    mounted() {},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
    }
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类

.wrapper {
    width: 243px;
    padding: 8px;
    .menuItem {
        background: #eee;
        width: 100px;
        height: 100px;
        float: left;
        margin: 10px;
        text-align: center;
        line-height: 100px;
        cursor: pointer;
    }
}

</style>