/*
 * @Author: Sunny
 * @Date: 2023-05-03 17:13:42
 * @LastEditors: Suuny
 * @LastEditTime: 2023-06-17 19:48:16
 * @Description: 
 * @FilePath: /visible-layout/src/utils/index.js
 */
import Vue from "vue";
let getAttrStr = (attrs) => {
    console.log('attrs -->', attrs)
    let attrStr = '';
    attrs.forEach(item => {
        attrStr += item.key + '=' + item.value + ' '
    });
    console.log('attrStr -->', attrStr)
    return attrStr
}

// 获取随机ID
export const genId = () => {
    function s4 () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
    }
    return s4() + s4() + '-' + s4()
    // 0x10000:以0x开始的数据表示16进制，10000转成十进制就是65536，实际上这是为了后面获取四位随机号码所以乘以10000，而为了获取包含包含字母在内的字符就用 16 进制
}

export const mountedComponent = (component) => {
    console.log('mountedComponent', component)
    let data = {}
    let id = component.info.id;
    let compWidth = 0;
    let compHeight = 0;
    if(component.attribute) {
        component.attribute.forEach(item => {
            data[item.key] = item.value
            if(item.key === 'width') {
                compWidth = item.value
            }
            if(item.key === 'height') {
                compHeight = item.value
            }
        })
    }
    setTimeout(() => { // 等挂载点渲染到页面上，再去实例化
        new Vue({
            name: id.toString(),
            data() {
                return data
            },
            el: document.getElementById(id),
            template: component.template,
            mounted() {
                this.$el.id = id;
                this.$el.style.position = 'absolute';
                this.$el.style.cursor = 'pointer';
                this.$el.style.left = `${component.position.left}px`
                this.$el.style.top = `${component.position.top}px`
                this.$el.style.zIndex = component.position.zIndex
                this.$el.style.width = `${compWidth}px`
                this.$el.style.height = `${compHeight}px`
            }
        })
    }, 500)   
}

export default getAttrStr
