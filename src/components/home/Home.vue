<template>
<div id="home">
	<div class="box">
		<div class="home-head clearfix">
			<div class="logo pull-left">
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
		<contentView :arrData='arrData'></contentView>
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
				tabData:['要闻','简报','专栏','案例'],
				nowIndex:1
			}
		},
		components:{
			contentView
		},
		methods:{
			 fetchData: async function(){	
			    	let params = {
			    		"pageNo":1,
			    		"messType":this.messType,
			    		"province":1
			      }
			      const res = await this.api.get('/api/contentpublish/ajaxPageList.do', params)
			      if (res.status== 200) {
			      		if(res.data.list.length>=0){
				      		this.arrData=res.data.list;
				      	}
    				}
			      	
		   },
		   tabswitch(num){
		   	this.$toast({
				  message: '提示',
				  duration: 1000
				});
		   	    this.nowIndex=num;
		   		this.messType=num;
		   		this.fetchData();
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