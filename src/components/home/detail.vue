<template>
	<div>
		<div class="detail">
			1111
		</div>
	</div>
</template>

<script>
	export default{
		mounted(){
			this.fetchData();
			const id=$route.params.id;
					alert(id)
		},
		data(){
			return {
				detailData:{}
			}
		},
		methods:{
			fetchData: async function(){
			    	let params = {
			    		"id":id,
			      	}
			      const res = await this.api.get('/api/contentpublish/toView.do', params)
			      console.log(res)
			      if (res.status== 200) {
			      		if(res.data.list.length>=0){
				      		this.detailData=res.data;
				      	}
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
		/*margin-left: 0.1rem;*/
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