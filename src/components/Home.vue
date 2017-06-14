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
				<select id="sheng" style="border: none;outline: none;float: left;width: 20%;margin-top: 0.03rem;">
				</select>
			</ul>
		</div>
		<mt-swipe :auto="4000" style="height:1.5rem;" class="swiper">
		  <mt-swipe-item><img src="../../static/img/lunbo.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../static/img/lunbo.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../static/img/lunbo.jpg"/></mt-swipe-item>
		</mt-swipe>
		<div class="index-content">
		<div class="yaowen active common">
			<div id="importNews" style="background: #FFFFFF;">
				
			</div>
			<div class="loadMore" id="loadMore" style="padding: 0.1rem 0;text-align: center;display:none;">点击加载更多>></div>
		</div>
	</div>
	</div>
</div>
</template>

<script>
	export default{
		mounted(){
			
		},
		data(){
			return{
				
			}
		},
		methods:{
			getData(){
				this.$http.get("",{
					params:{
						messageType:1
					}
				})
				.then(function (res) {
				    console.log(res);
				})
				.catch(function (er) {
				   	alert(er)
				});
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