<template>
	<div>
		<div class="head"><a id="head" href="javascript:history.back(-1)" class="back pull-left iconfont icon-zuojiantou"></a><span class="pull-left"></span></div>
		<div class="box1">
    		<div class="content">
				<h1 class="header" id="header">{{detailData.messHeader}}</h1>
				<div class="small-title clearfix">
						<div class="pull-left left">
							<span>来源于:</span><span v-if="departmentName" class="a1">{{detailData.departmentName}}</span><span v-else class="a1">公安部</span>
						</div>
						<div class="main">
							<span>发表于:</span><span class="a2">{{detailData.releaseDate|normalData}}</span>
						</div>
						<div class="pull-left right">
							<span>浏览量:</span><span class="a3">{{detailData.readNum}}</span>
						</div>
					<!--<span class="resourse">来源:<span id="resourse"></span></span>  <span class="publish"><span>发表于:</span><span id="time">2017-1-6</span></span> <span class="view">浏览量:<span></span></span>-->
				</div>
				<div class="contentM" id="contentM">
					<p v-html="detailData.content"></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		mounted(){
			this.fetchData();
		},
		computed:{
			departmentName(){
				if(typeof(this.detailData.departmentName)=='undefined'){
					return false;
				}else{
					return true;
				}
			}
		},
//		activated(){
//			//vue.js 2.x 能否设置某个组件不被keep-alive 的解决方案
//			this.fetchData();
//		},
		data(){
			return {
				detailData:{}
			}
		},
		methods:{
			fetchData: async function(){
					const id=this.$route.params.id;
					console.log(id)
			    	let params = {
			    		"id":id,
			      	}
			      const res = await this.api.get('/api/app/contentpublish/toView.do', params)
			      console.log(res)
			      if (res.status== 200) {
			      		this.detailData=res.data.contentPublish;
    				}
			      	
		   }
		}
	}
</script>

<style scoped="scoped">
	.box1{
		width: 95%;
		margin: 0 auto;
		overflow-x: hidden;
		
	}
	.content{
		width: 100%;
	}
	.content .header{
		text-align: center;
		font-size: 0.16rem;
		padding: 0.1rem 0 0.05rem 0;
	}
	.small-title{
		padding: 0.05rem 0px;
		font-size: 12px;
		width: 100%;
	}
	.small-title .left{
		width: 38%;
	}
	.small-title .right{
		width: 25%;
	}
	.small-title .main{
		float: left;
		width: 37%;
	}
	.contentM p{
		text-indent: 2em;
	}
	.small-title span{
		vertical-align: top;
	}
	.small-title .a1{
		max-width: ;
		display: inline-block;
		width: 65%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.small-title .a2{
		max-width: ;
		display: inline-block;
		width: 63%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.small-title .a3{
		max-width: ;
		display: inline-block;
		width: 48%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>