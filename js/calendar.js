//每月的总的天数
var moday=[ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
//2月份的天数必须得区分今年是不是闰年
var d=new Date();
var month=d.getMonth()+1;//当前的月份
var days=d.getDate();//当前月的号数
var years=d.getFullYear();//当前的年份
var run=years%4;//看看是不是闰年
if(run!=0){
    moday[1]=28;//2月份的天数
}else{
    moday[1]=29;
}

//看一下当前月份的一号对应的是星期几
var date=new Date();
date.setDate(1);

//日历星期日在第一位，星期六在最后一位
var momatch=[0,1,2,3,4,5,6];//这个存的是当前月的一号前面有多少空位，周日没有，周一一个以此类推
var dangqian=momatch[date.getDay()];
var calendar=document.getElementById("calendar");
for(i=1;i<=parseInt(dangqian);i++){
    calendar.innerHTML+='<div class="day">'+'&nbsp;'+'</div>';
}

for(var i=parseInt(dangqian+1);i<=parseInt(moday[month-1]+dangqian);i++){
    if(i%7==1 && i!=1) {
        calendar.innerHTML+='<br>';
    }//每七个是一行
    calendar.innerHTML+='<div class="day">'+parseInt(i-dangqian)+'</div>';
}