<template>
	<div id="send" class="box">
		<div style="position:fixed;width: 100%;height: 100%;background: rgba(0,0,0,0.5);z-index: 999;display: none;" @click="labelHide" id="label">
			<labelView :labelData="labelData" @labelHide="labelHide"></labelView>
		</div>
		<div class="head"><a id="head" href="javascript:;" @click="$router.go(-1)" class="back pull-left iconfont icon-zuojiantou"></a><span class="pull-left">发协作</span></div>
		<input type="hidden"  v-model="arrData.promoterUserId" id="promoterUserId"/>
		<input type="hidden"  v-model="arrData.departmentId" id="departmentId"  /><!--协作发起人所属部门  -->
		<mt-field label="协作状态 :" v-model.trim="arrData.status"></mt-field>
		<mt-field label="协作编号 :" v-model.trim="arrData.number"></mt-field>
		<mt-field label="悬赏积分 :" v-model.trim="arrData.rewIntegral"></mt-field>
		<mt-field label="现金(元) :" v-model.trim="arrData.money"></mt-field>
		<mt-field label="标签 :" style="display: none;" v-model.trim="arrData.labelText"></mt-field>
		<mt-field label="标签 :" @click.native="labelShow1" v-model.trim="arrData.labelName"></mt-field>
		<mt-field label="发起人姓名" v-model.trim="arrData.userName"></mt-field>
		<mt-field label="协作状态" v-model.trim="arrData.userPhone"></mt-field>
		<mt-field label="协作状态" v-model.trim="arrData.connectName"></mt-field>
		<mt-field label="协作单位 :" v-model.trim="arrData.cooperationDeptName"></mt-field>
		<mt-field label="协作单位 :" style="display: none;" v-model.trim="arrData.cooperationDeptId"></mt-field>
		<mt-field label="标题 :" v-model.trim="arrData.title"></mt-field>
		<div   style="background: white;">
			<h1  class="border-none">查询对象列表<span id="addQueryObj" style="margin-right:1em;" class="pull-right">添加</span></h1>
			<div class="scroll">
		    	<table id="addSearchObj" class="zonghetongji" border="1" style="border-collapse: collapse;" >
		    	<tr id="first"><td>操作</td><td>查询对象类别</td><td>查询对象名称</td><td>备注</td><td>增加时间</td></tr>
			    </table>
		    </div>
		</div>
	    <div class="send-unit1" style="background: white;">
			<div class="unit1">
				<label class="text" for="cooperationType">协作类型</label>
				<select id="cooperationType" v-model="arrData.cooperationType">
					<option value="-1">请选择</option>
					<option value="1">落地查证类</option>
					<option value="2">信息查询类</option>
				</select>
				<!--<SelectView :arrData="selectData" @selectChange="change1"></SelectView>-->
			</div>
			<div class="unit1">
				<label class="text" for="timeLimit">反馈时限(小时)</label>
				<input type="text" v-model.trim="arrData.timeLimit" id="timeLimit" value="48">
			</div>
		</div>
		<mt-field label="协作内容" placeholder="协作内容" type="textarea" rows="4" v-model.trim="arrData.cooperationContent"></mt-field>
		<div class="send-unit1" style="background: white;">
			<div class="unit1">
				<label class="text" for="requestCauseId">请求事由</label>
				<select id="requestCause" v-model="arrData.requestCauseId" @change="requestCause"> <!--shuo-->
					<option value="-1">请选择</option>
					<option v-for="item in requestData" :value="item.id">{{item.content}}</option>
				</select>
			</div>
			<div class="unit1">
				<label class="text" for="twoRequestCauseId">二级请求事件</label>
				<select id="twoRequestCause" v-model="arrData.twoRequestCauseId">
					<option value="-1">请选择</option>
					<option v-for="item in tworesData" :value="item.id">{{item.content}}</option>
				</select>
			</div>
		</div>
		<div style="text-align: center;margin: 10px 0px;">
			<mt-button type="primary" style="margin-right: 40px;" size="normal">发送</mt-button>
			<mt-button type="danger" size="normal">保存</mt-button>
		</div>
	</div>
	<!--增加查询对象-->
</template>

<script>
	import SelectView from '../../base/Select.vue'
	import labelView from './label.vue'
	export default{
		components:{
			SelectView,
			labelView
		},
		mounted(){
			//选择框数据加载
			this.getSelect();
			//标签框数据加载
			this.getLabel();
			//回填数据
			if(window.localStorage){
			 	var userInfo=JSON.parse(localStorage.getItem("user"));
			 	var userId=userInfo.id;//发起人id
			 	var phone=userInfo.phone;//发起人手号
			 	var name=userInfo.name;//发起人姓名
			 	console.log(userInfo)
			 	console.log(name)
			 	this.arrData.userName=name;
			 	this.arrData.userPhone=phone;
			 	this.arrData.connectName=name;
			 	this.arrData.connectPhone=phone;
			 	this.arrData.promoterUserId=userId;
			 	this.arrData.departmentId=userInfo.departmentId;
			 	//回显编号和协作状态信息
				if(sessionStorage.getItem("number1")){
					this.arrData.number=sessionStorage.getItem("number1");
				}else{
					this.getNumber();
				}
					//悬赏积分超过50会弹框
//				$("#rewIntegral").blur(function(){
//					//12、判断是否是协作员，如果是，看积分是否大于100
//					var isLiaisonMan = userInfo.isLiaisonMan;//是否是联络员
//					var scoreCount = userInfo.scoreCount;//个人积分
//					if(isLiaisonMan==0&&scoreCount<100){
//						alert("积分不足100");
//					} 
//					var rewIntegral=$("#rewIntegral").val();
//					if(rewIntegral>50){
//						alert("悬赏积分不能超过50分");
//					}
//				})

			}
			//一级请求事由
			
		},
		data(){
			return{
				arrData:{
					promoterUserId:"",
					departmentId:'',
					status:"待申请",
					number:"",
					rewIntegral:0,
					money:0,
					labelText:"",
					labelName:"",
					userName:"",
					userPhone:"",
					connectName:"",
					cooperationDeptName:"",
					cooperationDeptId:"",
					title:"关于***的协作",
					cooperationType:-1,
					timeLimit:48,
					cooperationContent:'',
					requestCauseId:-1,
					twoRequestCauseId:-1
					
				},
				selectData:[
					{"text":"落地查证类",value:1},
					{"text":"信息查询类",value:2}
				],
				requestData:[],
				tworesData:[],
				labelData:[]
			}
		},
		methods:{
			getNumber: async function(){
				var param={
					"userId":this.arrData.promoterUserId
				}
				const res=await this.api.get("/api/app/cooperation/toCooperation.do",param);
				if(res.status==200){
					this.arrData.nunber=res.data.coopNumbers;
					sessionStorage.setItem("number1",this.arrData.nunber);
				}
			},
			getSelect:async function(){
				var param={
					"parentId":-1
				}
				const res= await this.api.get("/api/app/dictionaries/getDictionaries.do",param);
				if(res.status==200){
					this.requestData=res.data.list;
				}
			},
			requestCause : async function(){
				this.arrData.twoRequestCauseId=-1;
				if (this.arrData.requestCauseId!=-1) {
					var param={
							"parentId":this.arrData.requestCauseId
						}
						console.log(this.requestCauseId)
						const res= await this.api.get("/api/app/dictionaries/getDictionaries.do",param);
						if(res.status==200){
							this.tworesData=res.data.list;
						}
				}
			},
			getLabel : async function(){
						const res= await this.api.get("/api/admin/cooperation/toGetAllLable.do");
						if(res.status==200){
							var status=res.data.status;
							if (status==1) {
								this.labelData=res.data.lableMap;
							}
						}
			},
			labelShow1(){
				document.getElementById("label").style.display="block";
			},
			labelHide(data){
				if(typeof(data)!="undefined"){
					console.log(data)
					var id=[];
					var name=[];
					data.forEach((el,index)=>{
						id.push(el.id);
						name.push(el.name);
					})
					document.getElementById("label").style.display="none";
					this.arrData.labelText=id.join(",");
					this.arrData.labelName=name.join(",");
//					console.log(data.join(","))
				}else{
					document.getElementById("label").style.display="none";
				}
			
			}
		}
	}
</script>
<style scoped="scoped">
	@import url("../../../static/css/faxiezuo.css");
	.mint-cell{
		margin-bottom: 1px;
	}
</style>