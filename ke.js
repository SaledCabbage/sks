/*
	课时自动刷新不间断
 */
console.log('插件已生效！');
var sj_f=0;
if(typeof hd!="undefined"){
var hd_reset=setInterval(function(){sj_f=$('#timer_m').text();if(sj_f>10){console.info(sj_f);}hd+=1;console.log('已完成');console.info(hd);},25000);
hd_reset();
console.log('任务完成！');
}
else {console.log('该页面不是课程页面！');}