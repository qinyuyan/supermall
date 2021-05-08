import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  // render: h => h(App),
  el:'#app',
  router,
  render:function(h){
  	return h(App)
  }
}).$mount('#app')


// axios.defaults.baseURL="http://123.207.32.32:8000",
// axios.defaults.timeout="5000"

// //axios基本使用
// axios({
// 	url:'/home/multidata',
// 	methods:'get',
// }).then(res=>{
// 	// console.log(res)
// })

// axios({
// 	url:'/home/data',
// 	methods:'get',
// 	params:{
// 		type:'pop',
// 		page:1
// 	}
// }).then(res=>{
// 	// console.log(res)
// })
// //axios发送并发请求axios.all([axios({}),axios({})])
// axios.all([axios({
// 	url:'/home/multidata'
// }),axios({
// 	url:'/home/data',
// 	params:{
// 		type:'pop',
// 		page3:3
// 	}
// })]).then(axios.spread((res1,res2)=>{
// 	console.log(res1)
// 	console.log(res2)
// }))
// // .then(res=>{
// // 	console.log(res)
// // })


// //4、创建对应的axios实例
// const instance1 = axios.create({
// 	baseURL:'http://123.207.32.32:8000',
// 	timeout:5000
// })
// const instance2 = axios.create({
// 	baseURL:'http://192.168.0.199'',
// 	timeout:10000,
// 	// headers:{}
// })
// instance1({
// 	url:'/home/multidata'
// }).then(res=>{
// 	console.log(res)
// })


//5.封装request模块
// import {request} from 'network/request'
// request({
// 	url:'/home/multidata',
// }).then(res=>{
// 	console.log(res)
// 	}).catch(err=>{
// 		console.log(err)
// 	})