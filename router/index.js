import Vue from 'vue';
import Router from 'vue-router';
import Home from "../views/home/home";
import NewList from "@/views/newList/index";
import HandLife from "@/views/handLife/index";
import ArticalDetail from "@/views/articalDetail/index";
import Login from "@/views/login/index";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component:Home
    },
    {
      path:'/newList',
      name:'newList',
      component:NewList
    },
    {
      path:'/handLife',
      name:'handLife',
      component:HandLife
    },
    {
      path:'/partyBulid',
      name:'partyBulid',
      component:NewList
    },
    {
      path:'/showIndentify',
      name:'partyBulid',
      component:NewList
    },
    {
      path:'/mapToday',
      name:'mapToday',
      component:NewList
    },
    {
      path:'/articalDetail',
      name:'articalDetail',
      component:ArticalDetail
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
  ]
})
