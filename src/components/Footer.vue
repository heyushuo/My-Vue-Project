<template>
<div id="footer">
	<div class="footer">
		<ul class="clearfix">
			<li>
				<router-link :to="{path:'/home'}" >
					<div class="iconfont icon-shouye-shouye"></div>
					<p>首页</p>
				</router-link>
			</li>
			<li><a href="javascript:;" id="faqixiezuo">
				<div class="iconfont icon-renren"></div>
				<p>发起协作</p>
			</a></li>
			<li class="qianshouxiezuo">
				<a href="javascript:;">
					<div class="iconfont icon-pinggu"></div>
					<p>待签收</p>
					<span class="warn5 warn" style="display: none;" id="toBeSigned2"></span>
				</a>
			</li>
			<li class="my">
				<router-link :to="{path:'/detail'}">
					<div :class="[a4 ? 'icon-my':'icon-iconfontwohover','iconfont']"></div>
					<p>我的</p>
					<span></span>
				</router-link>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
	export default{
		data(){
			return{
				a1:true,
				a2:false,
				a3:false,
				a4:false,
			}
		},
		methods:{
			change(){
				this.abb=true;
			}
		}
	}
</script>

<style scoped="scoped">
	.router-link-active div{
		color: #4169E1;
	}
</style>