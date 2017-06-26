<template>
	<div class="select">
		<select v-model="selected" @change="change">
			<option value="-1">请选择</option>
			<option v-for="item in arrData" :value="item.value">{{item.text}}</option>
		</select>
	</div>
</template>

<script>
	export default{
		props:[	
			"arrData"
		],
		data(){
			return{
				selected:-1,
			}
		},
		methods:{
			change(){
				this.$emit("selectChange",this.selected);
			}
		}
	}
</script>

<style scoped="scoped">
	.select{
		display: inline-block;
	}
</style>