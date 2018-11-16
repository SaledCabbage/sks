
/*网页端刷课时专用脚本*/
 
console.log('插件已生效！');
if(typeof hd!="undefined"){
var hd_reset=setInterval(function(){hd+=1;console.log('已完成');console.info(hd);},25000);
hd_reset();
console.log('任务完成！');
}
else  {console.log('该页面不是课程页面！');}