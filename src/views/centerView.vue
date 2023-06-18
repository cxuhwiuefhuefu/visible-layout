<!--
 * @Author: Sunny
 * @Date: 2023-03-25 20:35:26
 * @LastEditors: Suuny
 * @LastEditTime: 2023-06-17 19:55:40
 * @Description: 
 * @FilePath: /visible-layout/src/views/centerView.vue
-->
<template>
    <div class="wrapper" @dragover="dragOver" @drop="drop">
        <!-- 中间 -->
        <div v-for="(item, index) in components" :key="index">
            <!-- {{item}} -->
        </div>
    </div>
</template>

<script>
import {genId, mountedComponent} from '../utils/index'
import getComponent from '../templates/index'

export default {
    components: {},
    data() {
        return {
            components: [],
            zIndex: 0
        };
    },
    computed: {},
    watch: {},
    methods: {
        // 拖拽到画布的回调
        dragOver(e) {
            e.preventDefault();
            console.log('dragOver ----------->', e);
        },
        // 鼠标松开的回调
        drop(e) {
            // debugger
            console.log('drop ------------> ', e, genId());
            let info = JSON.parse(e.dataTransfer.getData('info'))
            info.id = genId()
            console.log('info -->', info)
            let component = getComponent(info)
            console.log('component -->', component)
            this.zIndex ++;
            // debugger
            
            // 找到组件的宽高
            let compWidth = 0;
            let compHeight = 0;
            component.attribute.forEach(item => {
                if(item.key === 'width') {
                    compWidth = item.value
                }
                if(item.key === 'height') {
                    compHeight = item.value
                }
            })
            let left = e.offsetX - compWidth / 2;
            let top = e.offsetY - compHeight / 2;
            if(left < 0) {
                left = 0
            }
            if(top < 0) {
                top = 0
            }
            component.position = {
                left,
                top,
                zIndex: this.zIndex
            }
            this.components.push(component)
            // debugger
            mountedComponent(component)
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
    flex: 1;
    background: #eee;
    position: relative;
}
</style>