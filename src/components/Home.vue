<template>
<div id="home">
	<div class="box">
		<div class="home-head clearfix">
			<div class="logo pull-left">
				<img src="../../static/img/logo.png"/>
			</div>
			<div class="search pull-left">
				<a href="javascript:;" class="iconfont icon-11"></a>
				<input type="text" class="common-left" placeholder="搜索" id="searchValue"/>
			</div>
			<button id="search" class="pull-right" style="color: #333333;margin-right: 0.1rem;padding: 0.06rem;margin-top: 0.04rem;border-radius: 3px;border: none;" >搜索</button>
		</div>
		<div class="nav">
			<ul class="clearfix">
				<li class="tabActive"><a href="javascript:;">要闻</a></li>
				<li><a href="javascript:;">简报</a></li>
				<li><a href="javascript:;">专栏</a></li>
				<li><a href="javascript:;">案例</a></li>
			</ul>
		</div>
		<mt-swipe :auto="4000" style="height:1.5rem;" class="swiper">
		  <mt-swipe-item><img src="../../static/img/lunbo.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../static/img/lunbo.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../static/img/lunbo.jpg"/></mt-swipe-item>
		</mt-swipe>
	</div>
</div>
</template>

<script>
	export default{
		mounted(){
			this.fetchData();
		},
		data(){
			return{
				arrData:[]
			}
		},
		methods:{
			 fetchData: async function(){	
			    	let params = {
			    		"pageNo":1,
			    		"pagaSize":10,
			    		"messType":1,
			    		"province":1
			      }
			      const res = await this.api.get('/api/gongan/app/contentpublish/ajaxPageList.do', params)
			      	if(res.list.length>0){
			      		this.arrData=res.list;
			      		console.log(this.arrData)
			      	}
		    }
		}
	}
</script>

<style scoped="scoped">
	@import url("../../static/css/theme.css");
	.swiper img{
		width: 100%;
		height: 100%;
	}
</style>