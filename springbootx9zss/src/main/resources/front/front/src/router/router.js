import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import AddrList from '../pages/shop-address/list'
import AddrAdd from '../pages/shop-address/addOrUpdate'
import Order from '../pages/shop-order/list'
import OrderConfirm from '../pages/shop-order/confirm'
import Cart from '../pages/shop-cart/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import xiaoshouyuanList from '../pages/xiaoshouyuan/list'
import xiaoshouyuanDetail from '../pages/xiaoshouyuan/detail'
import xiaoshouyuanAdd from '../pages/xiaoshouyuan/add'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import xuejufenleiList from '../pages/xuejufenlei/list'
import xuejufenleiDetail from '../pages/xuejufenlei/detail'
import xuejufenleiAdd from '../pages/xuejufenlei/add'
import xuejushangpinList from '../pages/xuejushangpin/list'
import xuejushangpinDetail from '../pages/xuejushangpin/detail'
import xuejushangpinAdd from '../pages/xuejushangpin/add'
import jinhuojiluList from '../pages/jinhuojilu/list'
import jinhuojiluDetail from '../pages/jinhuojilu/detail'
import jinhuojiluAdd from '../pages/jinhuojilu/add'
import tuihuojiluList from '../pages/tuihuojilu/list'
import tuihuojiluDetail from '../pages/tuihuojilu/detail'
import tuihuojiluAdd from '../pages/tuihuojilu/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'storeup',
					component: Storeup
				},
                {
                    path: 'shop-address/list',
                    component: AddrList
                },
                {
                    path: 'shop-address/addOrUpdate',
                    component: AddrAdd
                },
				{
					path: 'shop-order/order',
					component: Order
				},
				{
					path: 'cart',
					component: Cart
				},
				{
					path: 'shop-order/orderConfirm',
					component: OrderConfirm
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'xiaoshouyuan',
					component: xiaoshouyuanList
				},
				{
					path: 'xiaoshouyuanDetail',
					component: xiaoshouyuanDetail
				},
				{
					path: 'xiaoshouyuanAdd',
					component: xiaoshouyuanAdd
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'xuejufenlei',
					component: xuejufenleiList
				},
				{
					path: 'xuejufenleiDetail',
					component: xuejufenleiDetail
				},
				{
					path: 'xuejufenleiAdd',
					component: xuejufenleiAdd
				},
				{
					path: 'xuejushangpin',
					component: xuejushangpinList
				},
				{
					path: 'xuejushangpinDetail',
					component: xuejushangpinDetail
				},
				{
					path: 'xuejushangpinAdd',
					component: xuejushangpinAdd
				},
				{
					path: 'jinhuojilu',
					component: jinhuojiluList
				},
				{
					path: 'jinhuojiluDetail',
					component: jinhuojiluDetail
				},
				{
					path: 'jinhuojiluAdd',
					component: jinhuojiluAdd
				},
				{
					path: 'tuihuojilu',
					component: tuihuojiluList
				},
				{
					path: 'tuihuojiluDetail',
					component: tuihuojiluDetail
				},
				{
					path: 'tuihuojiluAdd',
					component: tuihuojiluAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
