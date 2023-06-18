<!--
 * @Author: Sunny
 * @Date: 2023-03-25 20:35:09
 * @LastEditors: Suuny
 * @LastEditTime: 2023-03-27 23:34:39
 * @Description: 
 * @FilePath: /visible-layout/src/templates/headView.vue
-->

<template>
    <div class="wrapper">
        <span>我们一起学习前端</span>
        <div class="btn-box">
            <div class="btn active">预览</div>
            <div class="btn">保存</div>
            <div class="btn">发布</div>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {

        };
    },
    computed: {},
    watch: {},
    methods: {},
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
    background: #000;
    height: 80px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    .btn-box {
        display: flex;
        width: 200px;
        justify-content: space-between;
        .btn {
            background: white;
            color: #333;
            font-size: 13px;
            padding: 2px 10px;
            border-radius: 4px;
            cursor: pointer;
            &.active {
                color: white;
                background: #5794f5;
            }
        }
    }
}

</style>
