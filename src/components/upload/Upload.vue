<template>
	<div id="upload">
		<form id="fileForm">
			<div class="box">
				<div class="head"><a id="head" href="javascript:;" @click="$router.go(-1)" class="back pull-left iconfont icon-zuojiantou"></a><span class="pull-left">上传附件</span></div>
				<div class="form">
					<form id="form">
						<h1 style="background: #6786ED;color: white;">上传文件</h1>
						<div @change="upload($event)" align="left" class="a-upload fujian"><input class="files" type="file" name="fileName" id="fileName" multiple="multiple"><span class="fileContent" >点击这里上传文件</span><span id="fileName1" class="fileName"></span></div>
						<div class="addBtn btnbox">
							<input class="btn btn-width1" type="button" @click="btnSure" value="上传" id="uploadFile"/>
							<input class="btn btn-width1" type="button" value="取消" @click="$router.go(-1)" />
						</div>
					</form>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	export default{
		methods:{
			upload(ev){
				var file=ev.target.files[0];
				document.getElementById("fileName1").innerHTML=file.name;
			},
			btnSure:async function(){
				var fd=document.getElementById("form");
				var formData=new FormData(fd);
				const res = await this.api.postFile('/api/admin/upload/uploadFile.do',formData);
				if (res.status== 200) {
					console.log(res.data)
					if(res.data.status==1){
						alert("上传成功");
						this.$router.go(-1);
					}
				}
			}
		}
	}
</script>

<style>
	@import url("../../../static/css/faxiezuo.css");
</style>