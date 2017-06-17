import axios from 'axios'
import qs from 'qs'
import store from './store/'

//关于axios的一些配置
//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
axios.interceptors.request.use(function (config) {  //配置发送请求信息时
	store.dispatch('showFooter');  
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求成功后
	setTimeout(()=>{
		store.dispatch('hideFooter');
	},100)
  return response;
}, function (error) {
	
  return Promise.resolve(error.response);
});
//axios.defaults.timeout = 5000;//请求超时时间
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';//设置请求头部
//axios.defaults.baseURL='http://localhost:8080/';  //设置访问的根路径
//Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了







//axios.interceptors.request.use(config => {
//  return config
//}, error => {
//  return Promise.reject(error)
//})
//
//axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))

//function checkStatus(response) {
//  if (response.status === 200 || response.status === 304) {
//      return response
//  }
//  return {
//      data: {
//          code: -404,
//          message: response.statusText,
//          data: response.statusText,
//      }
//  }
//}
//
//function checkCode(res) {
//	if(res.status!=200){
//		if (res.data.code !== 200) {
//     	 alert(res.data.message)
// 		 }
//		  
//	}
// return res.data
//
//}


function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
           status: -404,
  		}
}

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status !== 200) {
      alert('error');
   }
  return res
}



export default {
    post(url, data) {
        return axios({
            method: 'post',
            url,
            data: qs.stringify(data),
            timeout: 30000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(checkStatus).then(checkCode)
    },
    get(url, params) {
        return axios({
            method: 'get',
            url,
            params,
            timeout: 30000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(checkStatus).then(checkCode)
    }
}
//这里的 data 为什么需要用qs.stringify(data)包一下, 
// 主要是配合下面headers里的Content-Type, 转成表单提交, 让后端可以直接用 $_POST 拿到数据
//这样, 一个大概的封装就完成了