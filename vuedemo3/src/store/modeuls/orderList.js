import Vue from 'vue'

const status = {             //存放数据
    orderList: [],     
    params: {}
}
const getters = {
    getOrderList:function (status) {      
    	// body...
    	return state.orderList
    }
}
const actions = {              // <!--异步-->
	fetchOrderList ({ commit,state }){
         Vue.http.post('/api/getOrderList',state.params).then((res) => {
              commit('updataOrderList',res.data.list)
         	
         }, (err) => {

         })
	}
}
const mutations = {             // <!--同步-->
     updataOrderList (state,payload) {
        state.orderList = payload
     }
}


export default {
	status,
	getters,
	actions,
	mutations,
}