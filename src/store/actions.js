export default{
	showFooter:({commit})=>{
		commit('showFooter')
	},
	login:({ commit },params) => {
	  _.busy();               //loding开始
	  return new Promise((resolve, reject)=> { 
		    axios({
		      method:'get',
		      url: 'teacher/login',
		      params: {
		        moblie:params.mobile,
		        password:params.password,
		      }
		    })
		    .then((response) => {
		        commit(types.LOGIN,response.data.data); //获得的数据通过mutation，存入store中
		        _.leave();  //loding结束
		        resolve(response);
		    })
		    .catch((error) => {
		      _.leave();  //loding结束
		    })
	  });
	}
}