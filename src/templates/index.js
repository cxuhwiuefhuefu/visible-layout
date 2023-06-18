/*
 * @Author: Sunny
 * @Date: 2023-05-03 17:41:32
 * @LastEditors: Suuny
 * @LastEditTime: 2023-06-17 20:02:53
 * @Description: 
 * @FilePath: /visible-layout/src/templates/index.js
 */
import textComp from './textComp'

let obj = {
    textComp
}

// info.type ---> 就是组件的名称
let getComponent = (info) => {
    console.log('getComponent', info, obj, obj[info.type])
    // console.log('obj[info.type] -->', obj[info.type]())
    // return obj[info.type]()
    let component = obj[info.type]()
    component.info = info;
    return component;
}

export default getComponent