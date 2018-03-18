import Vuex from 'vuex'
import Vue from 'vue'
import orderList from './modeuls/orderList'
Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		orderList
	}
})