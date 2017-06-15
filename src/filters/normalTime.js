//年月日小时秒
export const normalData = (time) => {
	if(time){
		var oDate=new Date();
		oDate.setTime(time);//讲时间戳转化为正常的new Date();
		
		var y = oDate.getFullYear();
		var m = oDate.getMonth()+1;
		var d = oDate.getDate();
		if(m<10){
			m="0"+m;
		}
		if(d<10){
			d="0"+d;
		}
		return y+"-"+m+"-"+d;
	}
}

//年月日小时秒
export const normalTime = (time) => {
	if(time){
		var oDate=new Date();
		oDate.setTime(time);//讲时间戳转化为正常的new Date();
		
		var y = oDate.getFullYear();
		var m = oDate.getMonth()+1;
		var d = oDate.getDate();
		var h= oDate.getHours();
		var mm= oDate.getMinutes();
		var s=oDate.getSeconds();
		return y+"-"+m+"-"+d+" "+h+":"+m+":"+s;
	}
}