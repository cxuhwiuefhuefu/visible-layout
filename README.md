<!--
 * @Author: Sunny
 * @Date: 2023-03-25 20:25:56
 * @LastEditors: Suuny
 * @LastEditTime: 2023-06-14 16:36:57
 * @Description: 
 * @FilePath: /visible-layout/README.md
-->

一、初始化项目

二、修改目录和搭建系统

三、创建组件库

四、创建处理器
1. 创建对应组件的处理器【将组件的属性、数据、模版整理后对外暴露】
每个组件都有一个处理器
2. 整合处理器统一对外暴露


五、实现左侧组件菜单
1. 定义菜单数据
2. 实现菜单


六、实现拖拽组件到画布
1. 让菜单中的组件可拖拽
2. 将拖拽的组件信息传递给画布
3. 实现组件的挂载
4. 实现组件的挂载
    - 定义一个数组装当前拖拽到页面的组件
    - 给组件设置 id
    - 获得组件
    - 设置组件的位置，将拖拽的组件放入数组中
    - 设置组件的挂载点
    - 挂载组件