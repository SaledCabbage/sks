/*
	课时自动添加
 */

//鉴权
if ($(".has-dropdown a:first").text() === "UserName") {

//获取网页参数信息
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function is_courseapp(){
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		if(vars[i] == "course-app-course"){return(true);}
	}
	return(false);
}

var kecheng_id = getQueryVariable("contentid");

function kuaisujiashi(){

	//var shengyu_time = setting.lefttime - minute;//计算课程剩余时间;

	if (!kecheng_id||!is_courseapp()) {
		alert("这不是学习页面，大哥你别逗我。好好学习！");
		return -1;
	}

//进行课时叠加操作
$.get('index.php?course-app-course-recordtxttime&courseid='+kecheng_id+'&time=60&coursetime='+setting.lefttime+'&' + Math.random(), function (data) {
                    console.log(data);
                    var second = parseInt(data);
                    var minute = parseInt(second) / 60;
                    if(minute>=600)
                    {
                        minute='600';
                    }
                    $('#sss'+kecheng_id).text(minute);
                    alert("你已经学习了 "+minute+" 分钟了。\nyou have learned for "+minute+" minutes.");

                }, 'text');

}


//设置一个页面按钮，使它点击运行一次
var add_btn = document.createElement("button");
add_btn.className = "btn btn-info ";
var btn_node = document.createTextNode("快速加时");
add_btn.appendChild(btn_node);
add_btn.onclick = function() {
	kuaisujiashi();
};
add_btn.setAttribute('style', 'position: fixed !important;right:1%;bottom: 5%;z-index:999;');
$("#fh5co-hero").remove();
// 添加一个签到指令
submitAjax({'url':'index.php?user-center-index-signin'});
$("body").append(add_btn);
}