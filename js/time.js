'use strict'
setInterval('time()', 1000);
var ctxs = document.getElementById('ctx');
var xx = document.getElementById('xx');

var ctx = ctxs.getContext('2d');

var width = window.screen.availWidth;
var height = width;

if(width > 600){
	width = 600;
	height = width;
}

xx.style = "margin: 0 auto;background-color: #fff;width: " + width + "px";
ctxs.width = width;
ctxs.height = height;

//window.screen.availWidth
function time() {

	ctx.clearRect(0,0,width,width);

	var date = new Date();

	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	var sa = s * 6;
	var ma = m * 6;
	var ha = h * 30 + m * 0.5;

	console.log(h + ":" + m + ":" + s);

	//时钟最外层
	ctx.beginPath();
		ctx.lineWidth = "10";
		ctx.strokeStyle = "#000";
		
		ctx.arc(width / 2 , height / 2 , width / 2-30, 0, 360);

		ctx.stroke();
	ctx.beginPath();

	//中心点
	ctx.beginPath();
		ctx.fillStyle = "#000";
		
		ctx.arc(width / 2 , height / 2
, 10, 0, 360);
		ctx.fill(); 
	ctx.beginPath();

	//分钟时刻
	ctx.save(); //设置旋转环境 

	for (var i = 0; i < 60; i++) {

		ctx.beginPath();
			ctx.lineWidth = "6";
			ctx.strokeStyle = "#888";
			
			ctx.moveTo(width / 2,35);
			ctx.lineTo(width / 2,40);

			//ctx.rect(100, 100, 290, 140);

			ctx.stroke();
		ctx.beginPath();

	ctx.translate(width / 2 , height / 2
); //设置旋转点 
	ctx.rotate(6 * Math.PI/180); //旋转画布 
	ctx.translate(-width / 2 , -height / 2);

	}
	ctx.restore(); //还原环境


	//小时时刻
	ctx.save(); //设置旋转环境 

	for (var i = 0; i < 12; i++) {

		ctx.beginPath();
			ctx.lineWidth = "6";
			ctx.strokeStyle = "#000";
			
			ctx.moveTo(width / 2,35);
			ctx.lineTo(width / 2,45);

			ctx.stroke();
		ctx.beginPath();

	ctx.translate(width / 2 , height / 2
);
	ctx.rotate(30 * Math.PI/180); //旋转画布 
	ctx.translate(-width / 2 , -height / 2);

	}
	ctx.restore(); //还原环境

	//时针

	ctx.save(); //设置旋转环境
	ctx.translate(width / 2 , height / 2
);
	ctx.rotate(ha * Math.PI / 180); //旋转画布 
	ctx.translate(-width / 2 , -height / 2);

	ctx.beginPath();

		ctx.lineWidth = '10';
		ctx.strokeStyle = "#000";
		ctx.moveTo(width / 2 , height / 2);
		ctx.lineTo(width / 2 , height / 3);

		ctx.stroke();

	ctx.closePath();

	ctx.restore(); //还原环境

	//分针
	ctx.save(); //设置旋转环境
	ctx.translate(width / 2 , height / 2
);
	ctx.rotate(ma * Math.PI / 180); //旋转画布 
	ctx.translate(-width / 2 , -height / 2);
	ctx.beginPath();

		ctx.lineWidth = '6';
		ctx.strokeStyle = "#444";
		ctx.moveTo(width / 2 , height / 2);
		ctx.lineTo(width / 2 , height / 4);

		ctx.stroke();

	ctx.closePath();
	ctx.restore(); //还原环境


	//秒针
	ctx.save(); //设置旋转环境

	ctx.translate(width / 2 , height / 2
);
	ctx.rotate(sa * Math.PI / 180); //旋转画布 
	ctx.translate(-width / 2 , -height / 2);
	ctx.beginPath();

		ctx.lineWidth = '4';
		ctx.strokeStyle = "#999";
		ctx.moveTo(width / 2 , height / 2);
		ctx.lineTo(width / 2 , height / 6);

		ctx.stroke();

	ctx.closePath();

	ctx.restore(); //还原环境

	//中心点
	ctx.beginPath();
		ctx.fillStyle = "#fff";
		
		ctx.arc(width / 2 , height / 2
, 5, 0, 360);
		ctx.fill(); 
	ctx.beginPath();
}