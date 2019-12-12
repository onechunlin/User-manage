import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomersDetails from './components/CustomersDetails'
import Edit from './components/Edit'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

//配置路由
const router = new VueRouter({
  mode:"history",
  base:__dirname,
  routes:[
    {path:'/',name:"customersLink",component:Customers},
    {path:'/about',name:"aboutLink",component:About},
    {path:'/add',name:"addLink",component:Add},
    {path:'/customer/:id',component:CustomersDetails},
    {path:'/edit/:id',component:Edit}
  ]

})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})