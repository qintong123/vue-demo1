//入口函数
  //console.log('OK')
import Vue from 'vue'

//导入MUI的样式
import  './lib/mui/css/mui.min.css'


//按需要导入Mint-UI 中的组件
import { Header } from 'mint-ui'
Vue.component(Header.name,Header)
//导入app模块
import app from './app.vue'


var vm = new Vue({
    el:'#app',
    render: c => c(app)
})