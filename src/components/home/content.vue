<template>
	<div id="content">
		<div class="index-content">
			<div class="yaowen active common">
				<div id="importNews" style="background: #FFFFFF;">
					<!--onclick=Detail("+data.list[i].id+")-->
					<div class='item' tag='div' v-for='item in arrData'>
						<router-link  :to="{path : /detail/+item.id}">
							<div class='pull-right item2' style='margin-right: 0.05rem;' >{{item.releaseDate | normalData}}</div>
							<div class='item1'>{{item.messHeader}}</div>
						</router-link>
					</div>
				</div>
				<div class="loadMore" v-show="this.arrData.length==0" style="padding: 0.1rem 0;text-align: center;">暂无数据...</div>
				<div class="loadMore" v-show="showMore" @click="loadMore()"  style="padding: 0.1rem 0;text-align: center;">点击加载更多>></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		mounted(){
			
		},
		props:{
			arrData:{
				type:Array,
				default:[]
			}
		},
		computed:{
			showMore(){
				if(this.arrData==0){
					return false;
				}else if(this.arrData.length%10==0){
					return true;
				}else{
					return false;
				}
			}
		},
		data(){
			return {
				nowIndex:2
			}
		},
		methods:{
			loadMore(){
				console.log(this.nowIndex)
				this.$emit('getMore',this.nowIndex);
				this.nowIndex++;
			}
		},
		watch:{
			arrData(){
			}
		}
		
	}
</script>

<style>
</style>