function Task(obj,topStep,leftStep){
	this.obj=obj;
	this.topStep=topStep;
	this.leftStep=leftStep;
}
//moveStep方法将当前元素对象移动一步
Task.prototype.moveStep=function(){
	var style=getComputedStyle(this.obj,null);
	var top=parseInt(style.top);
	var left=parseInt(style.left);
	this.obj.style.top=top+this.topStep+"px";
	this.obj.style.left=left+this.leftStep+"px";
}
//清楚元素对象的样式，使其返回原地
Task.prototype.clear=function(){
	this.obj.style.left="";
	this.obj.style.top="";
}

var animation={
	times:10,//每个动画10步完成
	interval:10,//200毫秒迈一步
	timer:null,//保存定时器id的属性
	tasks:[],//保存每次需要移动的任务
	addTask:function(source,target){
		           //00      02
	console.log(source+","+target);
var sourceDiv=
	document.getElementById("c"+source);
    
var targetDiv=
	document.getElementById("c"+target);
var sourceStyle=getComputedStyle(sourceDiv);
var targetStyle=getComputedStyle(targetDiv);
var topStep=(parseInt(targetStyle.top)-
	    parseInt(sourceStyle.top))/this.times;
var leftStep=(parseInt(targetStyle.left)-
	    parseInt(sourceStyle.left))/this.times;
var task=new Task(sourceDiv,topStep,leftStep);
this.tasks.push(task);	
	},
	start:function(){
		this.timer=setInterval(function(){
			for(var i=0;i<animation.tasks.length;i++){
				animation.tasks[i].moveStep();
			}
			animation.times--;
			if(animation.times==0){
				for(var i=0;i<animation.tasks.length;i++){
				animation.tasks[i].clear();
				}
				clearInterval(animation.timer);
				animation.timer=null;
				animation.tasks=[];
				animation.times=10;
			}
		},this.interval);
	}
}