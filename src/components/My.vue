<template>
<div id="my">
	<div class="box">
			<!--<div class="qiandao">
				
			</div>-->
			<div class="pic-head">
				<div class="my-zhezhao clearfix ">
					<div class="pull-left" onclick="clicked('barcode_scan.html',true,true);" id="scanCode">扫一扫</div>
					<div class="pull-right" id="logout"><i class="iconfont icon-zhuxiao"></i><span>注销</span></div>
				</div>
				<div class="login"><div><a href="javascript:;"><p>登录</p><p>注销</p></a></div></div>
				<div class="randInfo"><span>积分值:<span id="userScore"></span>&nbsp;|&nbsp;</span><span id="geren" >个人排名:<span id="userRanking"></span>&nbsp;|&nbsp;</span><span id="danwei" >单位排名:<span id="userDeptRanking"></span></span></div>
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
							<span class="warn1 warn" id="toBeSigned"></span>
						</a>
					</li>
					<li class="daiqianshou">
						<a href="view/deal/daifankui.html">
							<div class="iconfont icon-fankui1" style="color:#FCB434;"></div>
							<p style="font-size:0.1rem;color:black;">待反馈</p>
							<span class="warn2 warn" id="toFeedback"></span>
						</a>
					</li>
					<li class="daiqianshou">
						<a href="view/deal/daipinggu.html">
							<div class="iconfont icon-pinggu" style="color:#F92F73;"></div>
							<p style="font-size:0.1rem;color:black;">待评估</p>
							<span class="warn3 warn" id="toEvaluation"></span>
						</a>
					</li>
					<li class="daiqianshou">
						<a href="view/deal/daishenpi.html">
							<div class="iconfont icon-guangbo" style="color:#279EF7;"></div>
							<p style="font-size:0.1rem;color:black;">待审批</p>
							<span class="warn4 warn" id=""></span>
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
							<span class="warn6 warn" id=""></span>
						</a>
					</li>
					<li class="daiqianshou" id="signed">
						<a href="javascript:;">
							<div class="iconfont icon-guangbo" style="color:#C40000;"></div>
							<p  style="font-size:0.1rem;color:black;">签到</p>
						</a>
					</li>
					<li class="daiqianshou">
						<a href="view/deal/searchFace.html">
							<div class="iconfont icon-guangbo" style="color:#C40000;"></div>
							<p id="searchFace" style="font-size:0.1rem;color:black;">公情搜脸</p>
						</a>
					</li>
				</ul>
				<!-- <div class="tool">
					<span class="iconfont icon-gongju"></span><span>工具</span>
				</div> -->
				<!-- <ul id="gongju" class="clearfix chuli gongju">
					<li><a href="view/deal/xiezuoguangbo.html">
						<div class="iconfont icon-guangbo"></div>
						<p>广播list(去)</p>
					</a></li>
					<li><a href="view/deal/faqingbaoxiaojie.html">
						<div class="iconfont icon-guangbo"></div>
						<p>小节(去)</p>
					</a></li>
					<li><a href="view/deal/jiafenList.html">
						<div class="iconfont icon-guangbo"></div>
						<p>加分(去)</p>
					</a></li>
					<li><a href="view/deal/shensuContent.html">
						<div class="iconfont icon-guangbo"></div>
						<p>申诉(去)</p>
					</a></li>
					<li><a href="view/deal/daipingshen.html">
						<div class="iconfont icon-guangbo"></div>
						<p>待评审(去)</p>
					</a></li>
					<li><a href="./view/deal/jiafenContent.html">
						<div class="iconfont icon-guangbo"></div>
						<p>申请加分</p>
					</a></li>
				</ul> -->
			</div>
		</div>
</div>
</template>

<script>
</script>

<style scoped="scoped">
	@import url("../../static/css/my.css");
</style>