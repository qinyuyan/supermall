import axios from 'axios'

//promise方式
export function request(config){
		const instance = axios.create({
			baseURL:'http://152.136.185.210:7878/api/m5',
			timeout:5000
		})
	
	/**********************/
	instance.interceptors.request.use(config=>{
		// console.log('来到了request拦截success中');
		// 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画
		
		// 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面
		
		// 3.对请求的参数进行序列化(看服务器是否需要序列化)
		// config.data = qs.stringify(config.data)
		// 4.等等
		return config;
	},err=>{
		// console.log('来到了request拦截failure中');
		console.log(err);
		return err;
	})
	/**********************/
	instance.interceptors.response.use(response => {
		// console.log('来到了response拦截success中');
		return response.data
	}, err => {
		console.log('来到了response拦截failure中');
		console.log(err);
		if (err && err.response) {
			switch (err.response.status) {
				case 400:
					err.message = '请求错误'
					break
				case 401:
					err.message = '未授权的访问'
					break
			}
		}
		return err
	})
	
	return instance(config);
}
//回调函数方式
// export function request(config,success,failure){
// 	const instance = axios.create({
// 		baseURL:'http://123.207.32.32:8000',
// 		timeout:5000
// 	})
// 	instance(config).then(res=>{
// 		success(res)
// 	}).catch(err=>{
// 		failure(err)
// 	})
// }
