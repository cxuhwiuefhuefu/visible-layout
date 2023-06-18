<!--
 * @Author: Sunny
 * @Date: 2023-03-27 23:48:19
 * @LastEditors: Suuny
 * @LastEditTime: 2023-06-17 20:07:51
 * @Description: 
 * @FilePath: /visible-layout/src/components/textComp.vue
-->
<template>
    <div class="wrapper" :style="setStyle">
        <span>{{data.txt}}</span>
    </div>
</template>

<script> 
export default {
    components: {},
    props: {
        width: [String, Number],
        height: [String, Number],
        color: {
            type: [String]
        },
        fontSize: {
            type: [String, Number]
        },
        // data: {
        //     type: Object,
        //     default() {
        //         return {
        //             txt: '这里是默认值'
        //         }
        //     }
        // }
        data: {
            type: String
        }
    },
    data() {
        return {

        };
    },
    computed: {
        setStyle () {
            return {
                width: this.width + 'px',
                height: this.height + 'px',
                fontSize: this.fontSize + 'px',
                color: this.color 
            }
        }
    },
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

</style>