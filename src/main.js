// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routerConfig.js'
import api from './api.js'
import filters from './filters/'
//require('./api.js');
Vue.prototype.api = api
import store from './store/'
Vue.config.productionTip = false

Vue.use(VueRouter);

//创建全局的filters
//循环遍历所有的过滤器
Object.keys(filters).forEach((key)=>Vue.filter(key,filters[key]));


//使用mintUI插件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


////关于axios的一些配置
////axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//axios.interceptors.request.use(function (config) {  //配置发送请求信息时
////store.dispatch('showLoading');  
//return config;
//}, function (error) {
//return Promise.reject(error);
//});
//axios.interceptors.response.use(function (response) { //配置请求成功后
////store.dispatch('hideLoading');
//return response;
//}, function (error) {
//return Promise.reject(error);
//});
//axios.defaults.timeout = 5000;//请求超时时间
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';//设置请求头部
//axios.defaults.baseURL='http://localhost:8080/';  //设置访问的根路径
//Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了

const router=new VueRouter({
	mode: 'history', //切换路径模式，变成history模式
	scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	 routes//如果只写一个单词相当于routes:routes
})




//全局引入
//require("../static/")





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  template: '<App/>',
  components: { App }
	
})
