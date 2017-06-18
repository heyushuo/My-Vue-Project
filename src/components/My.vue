<template>
<div id="my">
	<div class="box">
			<!--<div class="qiandao">
				
			</div>-->
			<div class="pic-head">
				<div class="my-zhezhao clearfix ">
					<div class="pull-left" onclick="clicked('barcode_scan.html',true,true);" id="scanCode">扫一扫</div>
					<div class="pull-right"  @click="loginOut" id="logout"><i class="iconfont icon-zhuxiao"></i><span>注销</span></div>
				</div>
				<div class="login" ><div><a href="javascript:;"><p>登录</p><p>注销</p></a></div></div>
				<div class="randInfo"><span>积分值:<span id="userScore">{{infoData.userScore}}</span>&nbsp;|&nbsp;</span><span id="geren" >个人排名:<span id="userRanking">{{infoData.userRanking}}</span>&nbsp;|&nbsp;</span><span id="danwei" >单位排名:<span id="userDeptRanking">{{infoData.userDeptRanking}}</span></span></div>
			</div>
			<div class="my-content">
				<div class="tool">
					<span>协作</span>
				</div>
				<ul id="chuli" class="clearfix chuli">
					<li>
						<a  href="view/deal/myXieZuoList.html">
							<div class="iconfont icon-my-cooperation" style="color:#5276e5;"></div>
							<p style="font-size:0.1rem;color:black;">我的协作</p>
						</a>
					</li>
					<li>
						<a href="view/deal/participateList.html">
							<div class="iconfont icon-guangbo" style="color:green;"></div>
							<p style="font-size:0.1rem;color:black;">参与的协作</p>
						</a>
					</li>
					<li>
						<a href="view/deal/faxiezuo.html">
							<div class="iconfont icon-renren"  style="color:#FB9F23;"></div>
							<p style="font-size:0.1rem;color:black;">发协作</p>
						</a>
					</li>
					<li>
						<a href="view/deal/faguangbo.html">
							<div class="iconfont icon-guangbo"  style="color:#DD271A;"></div>
							<p style="font-size:0.1rem;color:black;">发广播</p>
						</a>
					</li>
					<li class="daiqianshou">
						<a href="view/deal/daiqianshou.html">
							<div class="iconfont icon-fankui" style="color:#8F30EE;"></div>
							<p style="font-size:0.1rem;color:black;">待签收</p>
							<span class="warn1 warn" v-if="infoData.toBeSigned!=0" id="toBeSigned">{{infoData.toBeSigned}}</span>
						</a>
					</li>
					<li class="daiqianshou">
						<a href="view/deal/daifankui.html">
							<div class="iconfont icon-fankui1" style="color:#FCB434;"></div>
							<p style="font-size:0.1rem;color:black;">待反馈</p>
							<span class="warn2 warn" v-if="infoData.toFeedback!=0" id="toFeedback">{{infoData.toFeedback}}</span>
						</a>
					</li>
					<li class="daiqianshou">
						<a href="view/deal/daipinggu.html">
							<div class="iconfont icon-pinggu" style="color:#F92F73;"></div>
							<p style="font-size:0.1rem;color:black;">待评估</p>
							<span class="warn3 warn" v-if="infoData.toEvaluation!=0" id="toEvaluation">{{infoData.toEvaluation}}</span>
						</a>
					</li>
					<li class="daiqianshou">
						<a href="view/deal/daishenpi.html">
							<div class="iconfont icon-guangbo" style="color:#279EF7;"></div>
							<p style="font-size:0.1rem;color:black;">待审批</p>
							<span class="warn4 warn" id="" v-if="infoData.toExamine!=0" >{{infoData.toExamine}}</span>
						</a>
					</li>
					<li>
						<a href="view/deal/dubanxinxi.html">
							<div class="iconfont icon-duchaduban" style="color:#279EF7;"></div>
							<p style="font-size:0.1rem;color:black;">督办信息</p>
						</a>
					</li>
					<li class="daiqianshou">
						<a href="view/deal/shenpitongzhi.html">
							<div class="iconfont icon-guangbo" style="color:#C40000;"></div>
							<p style="font-size:0.1rem;color:black;">审批通知</p>
							<!--<span class="warn6 warn" ></span>-->
						</a>
					</li>
					<li class="daiqianshou" id="signed" @click="signed">
						<a href="javascript:;">
							<div class="iconfont icon-guangbo" style="color:#C40000;"></div>
							<p  style="font-size:0.1rem;color:black;">签到</p>
						</a>
					</li>
					<li class="daiqianshou">
						<a href="javascript:;">
							<div class="iconfont icon-guangbo" style="color:#C40000;"></div>
							<p id="searchFace" style="font-size:0.1rem;color:black;">公情搜脸</p>
						</a>
					</li>
					<li class="daiqianshou">
						<router-link :to="{path:'/upload'}">
							<div class="iconfont icon-guangbo" style="color:#C40000;"></div>
							<p id="searchFace" style="font-size:0.1rem;color:black;">文件上传</p>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
</div>
</template>

<script>
	export default{
		mounted(){
			var userInfo=JSON.parse(localStorage.getItem("user"));
		 	var userId=userInfo.id;//发起人id
		 	this.userId=userId;
			this.getInfo();
			
		},
		data(){
			return{
				infoData:{},
				userId:null
			}
		},
		methods:{
			loginOut(){
				if(localStorage.getItem("user")){
					localStorage.removeItem("user");
					this.$router.push({path:"/home"});
				}
			},
			getInfo: async function(){
			 	var params={
			 		"userId":this.userId
			 	}
				const res = await this.api.get('/api/user/doSelectUser.do',params);
				if (res.status== 200) {
					this.infoData=res.data;		
					console.log(this.infoData)
				}
			},
			signed: async function(){
				var data={
					"userId":this.userId
				}
				const res = await this.api.get('/api/user/doSign.do',data);
				if (res.status== 200) {
					var status=res.data.status;
					if(status==1){
	  	      		  	alert("今日签到加分:"+data.addScore);
	  	      		  }else if(status==3){
	  	      		  	alert("今日已签到");
	  	      		  }else{
	  	      			  alert("签到失败");
	  	      		  }
				}
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("../../static/css/my.css");
</style>