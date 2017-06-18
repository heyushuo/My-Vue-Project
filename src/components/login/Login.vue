<template>
	<div id="login">
		<form id="form">
			<div class="head"><a id="head" href="javascript:history.back(-1);" class="back pull-left iconfont icon-zuojiantou"></a><span class="pull-left">登录</span></div>
			<div class="login">
				<div class="account">
					<label>账号:</label>
					<input class="common-left" v-model.trim="userData.phone" type="text" placeholder="请输入手机号" />
				</div>
				<div class="password">
					<label>密码:</label>
					<input type="password"  v-model.trim="userData.password" placeholder="请输入密码" />
				</div>
			</div>
			<p><input @click="doLogin($event)" type="button" value="登录" /></p>
		</form>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				userData:{
					phone:"",
					password:""
				}
			}
		},
		methods:{
			doLogin: async function(ev){
				  //校验
				  var re2=new RegExp(/^1[34578]\d{9}$/);
				  if(this.userData.phone==""){
				  	alert("手机号不能为空");
				  	return false;
				  }
				  if(!re2.test(this.userData.phone)){
				  	alert("请填写正确的手机号");
				  	return false;
				  }
				  if (this.password==""){
					   alert('密码不能为空');
					   return false;
				    }
			        
			        if (this.password.length<6){
					   alert('密码长度不能小于6');
					   return false;
				    }
				  ev.target.setAttribute("disabled",true);
			      const res = await this.api.post('/api/user/doLogin.do', this.userData);
			      if (res.status== 200) {
			      	var user=res.data.user;
			      	var status=res.data.status;
			      	console.log(status)
			      		if (status==1) {
			      			localStorage.setItem("user",JSON.stringify(user));
			      			this.$router.push({ path: '/home' })
			      			
			      		}else if(status==0){
			      			alert("服务端异常");
			      		}else if(status==2){
			      			alert("手机号或密码错误");
			      		}
    				}else{
    					 ev.target.removeAttribute("disabled");
    				}
			      	
		   }
		}
	}
</script>

<style scoped="scoped">
	.login{
		background: #FFFFFF;
		margin-top: 0.2rem;
		padding: 0px 0.2rem;
		font-size: 0.16rem;
		border-bottom: 1px solid #E4E3E6;
		border-top: 1px solid #E4E3E6;
	}
	.account{
		padding: 0.2rem 0px;
		border-bottom: 1px solid #E4E3E6;
	}
	.account input{
		border:none;
		height: 0.2rem;
		outline: none;
		font-size: 0.16rem;
	}
	.password{
		padding: 0.2rem 0px;
	}
	.password input{
		border: none;
		height: 0.2rem;
		outline: none;
		font-size: 0.16rem;
	}
	p{
		text-align: center;
		margin-top: 0.25rem;
	}
	p input{
		width: 85%;
		height: 0.4rem;
		background: #007AFF;
		color: #FFFFFF;
		text-align: center;
		border: none;
		outline: none;
		-webkit-border-radius: 0.05rem;
		-moz-border-radius: 0.05rem;
		border-radius: 0.05rem;
		font-size: 0.16rem;
	}	
</style>