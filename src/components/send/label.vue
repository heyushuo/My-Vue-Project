<template>
	<div id="label" class="label" @click.stop="">
		<div id="box" style="padding:10px 10px;margin-bottom:0;text-align:center;">
			<input type='button' :class="{active : checkActive(index)}" @click="addClass(index,$event)" v-for="(item,index) in labelData" :value="item.lableContent" :id="item.id"  />
		</div>
		<div style='text-align:center;'>
			<input id="btnSure" @click="btnsure" type="button" style="padding: 6px 12px;margin-top:10px;border:1px solid #ccc;background:#5cb85c;color:#fff;outline:none;" value="确认" />
			<input type="button" @click="closelayer" style="padding: 6px 12px;margin-top:10px;border:1px solid #ccc;background:#5cb85c;color:#fff;outline:none;" value="取消" />
		</div>
	</div>
</template>

<script>
	export default{
		mounted(){
			console.log()
		},
		props:[
			"labelData"
		],
		data(){
			return {
				flag:false,
				nowIndex:[],
				label:[]
			}
		},
		methods:{
			closelayer(){
				console.log(11111111111111);
				this.$emit("labelHide");
			},
			addClass(index,ev){
				var _this=this;
				var objId=ev.target.getAttribute("id");
				var objVal=ev.target.value;
				console.log(objVal)
				if (_this.nowIndex.indexOf(index)==-1) {
					_this.nowIndex.push(index);
					_this.label.push({"id":objId,"name":objVal})
					console.log(_this.nowIndex)
					console.log(_this.label)
				}else{
					_this.nowIndex.forEach((el,idx)=>{
						if (index==_this.nowIndex[idx]) {
							_this.nowIndex.splice(idx,1);
							_this.label.splice(idx,1);
						}
					})
					console.log(_this.nowIndex)
					console.log(_this.label)
				}
				
			},
			checkActive(index){
				return this.nowIndex.indexOf(index)!==-1
			},
			btnsure(){
				this.$emit("labelHide",this.label)
			}
		}
	}
</script>

<style scoped="scoped">
	input[type='button']{
		color: #333;
	    background-color: #fff;
	    border:1px solid #ccc;
	    display: inline-block;
	    padding: 3px 6px;
	    margin-bottom: 0;
	    font-size: 14px;
	    font-weight: normal;
	    text-align: center;
	    white-space: nowrap;
	    vertical-align: middle;
	    cursor: pointer;
		margin: 5px 2px;
		outline: none;
	}
	.label{
		width: 100%;
		padding: 20px 0;
		background: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.active{
	    background: rgb(100, 149, 237)!important;
		color: rgb(255, 255, 255)!important;
	}
</style>