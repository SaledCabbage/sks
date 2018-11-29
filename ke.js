/*
	课时自动刷新不间断
 */
 	'use strict';
// 人员列表
var ver_people = ["UserName"
];
var UserName = $(".has-dropdown a:first").text();
var hd_reset = 0;

function  verified_people(UserName){
	for (var item of ver_people) {
		if (UserName === item) {
			return true;
		}
	}
	return false;
}

function exec_hd(){
	// 执行主函数信息
	console.log('插件已生效！');
	var sj_f=0;
	if(typeof hd!="undefined"){
		hd_reset=setInterval(function(){sj_f=$('#timer_m').text();if(sj_f>10){console.info(sj_f);}hd+=1;console.log('已完成');console.info(hd);},25000);
		$("#hd_btn").html("停止挂机");
		alert('挂机已开始，点击确定继续。\n注意：手机请勿后台或锁定屏幕！');
		console.log('任务完成！');
	}
	else {console.log('该页面不是课程页面！');}
}

var is_verified = verified_people(UserName);

var add_btn = document.createElement("button");
$(add_btn).addClass("btn btn-info disabled");
$(add_btn).css({"position":"fixed","right":"3%","bottom":"1%","z-index":"999"});
$(add_btn).html("您好，请先登录。");
$(add_btn).attr("id","hd_btn");
$("body").append(add_btn);

if (is_verified) {
	// 正经函数在这里
	$("#fh5co-hero").remove();
	$("#hd_btn").removeClass("disabled");
	$("#hd_btn").html(UserName+"&nbsp;您好，点击开始挂机。");
	$("#hd_btn").click(function(){
		if (hd_reset) {
			clearInterval(hd_reset);
			$("#hd_btn").html(UserName+"&nbsp;您好，点击开始挂机。");
			console.log("已停止");
			alert('挂机已停止');
			hd_reset = 0;
		}
		else{
			exec_hd();
		}		
	});
}
else{
	if (UserName != "") {
		console.warn("好好学习，好好工作，别投机取巧。");
		$("#hd_btn").html(UserName+"，您未获得授权。");
	}
}
