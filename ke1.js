/*
	课时自动添加
 */

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

var kecheng_id = getQueryVariable("contentid");

function kuaisujiashi(){

	if (!kecheng_id) {
		alert("这不是学习页面，大哥你别逗我。好好学习！");
		return -1;
	}
	//调整一下分钟数

var set_time = function()
        {
        	var hh,mm,ss,tt;
        var init = function()
        {
            userOptions.time = minute*60;
            ss = parseInt(userOptions.time%60);
            mm = parseInt(userOptions.time%3600/60);
            hh = parseInt(userOptions.time/3600);
        }
            if(ss >= 10)
                setting.sbox.html(ss);
            else
                setting.sbox.html('0'+ss);
            if(mm >= 10)
                setting.mbox.html(mm);
            else
                setting.mbox.html('0'+ mm);
            if(hh >= 10)
                setting.hbox.html(hh);
            else
                setting.hbox.html('0'+ hh);
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
                    set_time();
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
$("body").append(add_btn);


/*
//备份一下核心内容
$.get('index.php?course-app-course-recordtxttime&courseid='+kecheng_id+'&time=60&coursetime='+setting.lefttime+'&' + Math.random(), function (data) {
                    console.log(data);
                    var second = parseInt(data);
                    var minute = parseInt(second) / 60;
                    if(minute>=600)
                    {
                        minute='600';
                    }
                    $('#sss101').text(minute);
                }, 'text');
 */