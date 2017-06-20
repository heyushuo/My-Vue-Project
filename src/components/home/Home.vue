<template>
<div id="home">
	
	<div class="box">
		<div class="home-head clearfix">
			<div @click="tabMenu" class="logo pull-left">
				<img src="../../../static/img/logo.png"/>
			</div>
			<div class="search pull-left">
				<a href="javascript:;" class="iconfont icon-11"></a>
				<input type="text" class="common-left" placeholder="搜索" id="searchValue"/>
			</div>
			<button id="search" class="pull-right" style="color: #333333;margin-right: 0.1rem;padding: 0.06rem;margin-top: 0.04rem;border-radius: 3px;border: none;" >搜索</button>
		</div>
		<div class="nav">
			<ul class="clearfix">
				<li v-for='(item,index) in tabData' @click="tabswitch(index+1)" :class="{tabActive:(index+1)==nowIndex}"><a href="javascript:;" >{{item}}</a></li>
			</ul>
		</div>
		<mt-swipe :auto="4000" style="height:1.5rem;" class="swiper">
		  <mt-swipe-item><img src="../../../static/img/lunbo.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../../static/img/lunbo.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../../static/img/lunbo.jpg"/></mt-swipe-item>
		</mt-swipe>
		<contentView :arrData='arrData' @getMore="fetchData1"></contentView>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		
	</div>
	<div id="show" style="display: none;">
		<h1>何玉硕</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
		<h1>sdkljads</h1>
	</div>
	
</div>
</template>

<script>
	import contentView from './content.vue'
	export default{
		mounted(){
			this.fetchData();
		},
		data(){
			return{
				arrData:[],
				messType:1,
				pageNo:1,
				tabData:['要闻','简报','专栏','案例'],
				nowIndex:1,
			}
		},
		components:{
			contentView
		},
		methods:{
			 fetchData: async function(){
			 	console.log(this.messType)
			    	let params = {
			    		"pageNo":this.pageNo,
			    		"messType":this.messType,
			      }
			      const res = await this.api.get('/api/app/contentpublish/ajaxPageList.do', params)
			      if (res.status== 200) {
			      		if(res.data.list.length>=0){
				      		this.arrData=res.data.list;
				      	}
    				}
			      	
		   },
		   fetchData1: async function(data){
			 		this.pageNo=data;
			 		var _this=this;
			    	let params = {
			    		"pageNo":this.pageNo,
			    		"messType":this.messType,
			      }
			      const res = await this.api.get('/api/app/contentpublish/ajaxPageList.do', params)
			      if (res.status== 200) {
			      		if(res.data.list.length>=0){
				      		res.data.list.forEach(function(value,index){
				      			console.log(value)
				      			console.log(index)
				      			_this.arrData.push(value);
				      		})
				      	}
    				}
			      	
		   },
		   tabswitch(num){
		   	    this.nowIndex=num;
		   		this.messType=num;
		   		this.pageNo=1;
		   		this.arrData=[];
		   		this.fetchData();
		   },
		   tabMenu(){
		   	var html=document.getElementById("show").innerHTML;
		   	layer.open({
		   		type:1,
		   		content:html,
		   		style:'position:fixed;left:0;bottom:0;width:100%;height:500px;overflow-y:scroll;',
		   		anim:'up'
		   	})
		   }
		}
	}
</script>

<style scoped="scoped">
	@import url("../../../static/css/theme.css");
	.swiper img{
		width: 100%;
		height: 100%;
	}
</style>