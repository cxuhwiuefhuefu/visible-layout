import textComp from './textComp'

let obj = {
    textComp
}

function install (Vue) {
    Object.keys(obj)?.forEach(key => {
        Vue.component(key, obj[key])
    })
}


let API = {
    version: '1.0',
    install
}

export default API
