<template>
	<div id="content">
		<div class="index-content">
			<div class="yaowen active common">
				<div id="importNews" style="background: #FFFFFF;">
					<!--onclick=Detail("+data.list[i].id+")-->
					<div class='item' v-for='item in arrData' >
						<div class='pull-right item2' style='margin-right: 0.05rem;' >{{item.releaseDate | normalData}}</div>
						<div class='item1'>{{item.messHeader}}</div>
					</div>
				</div>
				<div class="loadMore" v-show="arrData.length==0" id="loadMore" style="padding: 0.1rem 0;text-align: center;">点击加载更多>></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			arrData:{
				type:Array,
				default:[]
			}
		}
		
	}
</script>

<style>
</style>