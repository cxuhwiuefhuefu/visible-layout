/*
 * @Author: Sunny
 * @Date: 2023-05-03 16:24:17
 * @LastEditors: Suuny
 * @LastEditTime: 2023-06-17 20:08:57
 * @Description: 文本组件的处理器
 * @FilePath: /visible-layout/src/templates/textComp.js
 */

import getAttrStr from "../utils"
let handle = () => {
    let attribute = [{
        key: 'width', 
        name: '宽度',
        value: '100',
        type: 'input',
        placeholder: '请输入宽度'
    }, {
        key: 'height',
        name: '高度',
        value: '40',
        type: 'input',
        placeholder: '请输入高度'
    }, {
        key: 'color',
        name: '文本颜色',
        value: '#ff0000',
        type: 'color',
        placeholder: '请选择颜色'
    }, {
        key: 'fontSize',
        name: '字体大小',
        value: '14',
        type: 'input',
        placeholder: '请输入字体大小'
    }]    
    let data = { text: '^_^'}
    let template = `<textComp ${getAttrStr(attribute)} data='${JSON.stringify(data)}'></textComp>`
    return {
        attribute, // 属性
        data, // 数据
        template // 模版
    }
}

export default handle;
