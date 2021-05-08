import Vue from 'vue'
import VueRouter from 'vue-router'

//开发环境不使用懒加载，因为懒加载页面太多的话会造成webpack热更新太慢，所以只有生产环境使用懒加载

const Home = ()=>import('../views/home/Home')
const Cart = ()=>import('../views/cart/Cart')
const Category = ()=>import('../views/category/Category')
const Profile = ()=>import('../views/profile/Profile')


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes=[
	{
		path: '',
		redirect:'/home'
	},
	{
		path: '/home',
		component:Home
	},
	{
		path: '/cart',
		component:Cart
	},
	{
		path: '/category',
		component:Category
	},
	{
		path: '/profile',
		component:Profile
	},
	
]

const router = new VueRouter({
	routes,
	mode:'history',//(默认哈希hash模式，地址栏带#号，改为history模式)
})

//3.导出路由
export default router