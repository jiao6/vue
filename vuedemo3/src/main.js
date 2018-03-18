// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import Anapage from './pages/detail/analysis'
import Coupage from './pages/detail/count'
import Forpage from './pages/detail/forecast'
import Pubpage from './pages/detail/publish'
import OrderListPage from './pages/orderList'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import store from'./store'
Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
	mode:'history',
	routes: [
	{
		path: '/',
		component:IndexPage
	},
	{
		path:'/orderList',
		component:OrderListPage
	},
	{
		path: '/detail',
		component:DetailPage,
		children:[
		{
			path: 'analysis',
			component:Anapage
		},
		{
			path: 'count',
			component: Coupage
		},
		{
			path: 'forecast',
			component: Forpage
		},
		{
			path: 'publish',
			component: Pubpage
		}
		]
	}
	]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<Layout/>',
  components: { Layout }
})
