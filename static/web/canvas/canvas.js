
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

/*

// 绘制矩形

// fillRect(x, y, width, height)
// 绘制一个填充的矩形
// strokeRect(x, y, width, height)
// 绘制一个矩形的边框
// clearRect(x, y, width, height)
// 清除指定矩形区域，让清除部分完全透明。

ctx.fillStyle = "rgb(200, 0, 0)";
ctx.fillRect(10, 10, 55, 50);

ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect (30, 30, 55, 50);

ctx.fillRect(25, 25, 100, 100);
ctx.clearRect(45, 45, 60, 60);
ctx.strokeRect(50, 50, 50, 50);

*/




// 绘制路径

// beginPath()
// 新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
// closePath()
// 闭合路径之后图形绘制命令又重新指向到上下文中。
// stroke()
// 通过线条来绘制图形轮廓。
// fill()
// 通过填充路径的内容区域生成实心的图形。



// 绘制一个三角形

// ctx.beginPath();
// ctx.moveTo(75,50);
// ctx.lineTo(100,75);
// ctx.lineTo(100,25);
// ctx.fill();



// 绘制一个笑脸

// ctx.beginPath();
// ctx.arc(75,75,50,0,Math.PI*2,true); // 绘制
// ctx.moveTo(110,75);
// ctx.arc(75,75,35,0,Math.PI,false);   // 口(顺时针)
// ctx.moveTo(65,65);
// ctx.arc(60,65,5,0,Math.PI*2,true);  // 左眼
// ctx.moveTo(95,65);
// ctx.arc(90,65,5,0,Math.PI*2,true);  // 右眼
// ctx.stroke();



// // 填充三角形

// ctx.beginPath();
// ctx.moveTo(25,25);
// ctx.lineTo(105,25);
// ctx.lineTo(25,105);
// ctx.fill();

// // 描边三角形

// ctx.beginPath();
// ctx.moveTo(125,125);
// ctx.lineTo(125,45);
// ctx.lineTo(45,125);
// ctx.closePath();
// ctx.stroke();



// 圆弧

// for(var i=0;i<4;i++){
//   for(var j=0;j<3;j++){
//     ctx.beginPath();
//     var x              = 25+j*50;               // x 坐标值
//     var y              = 25+i*50;               // y 坐标值
//     var radius         = 20;                    // 圆弧半径
//     var startAngle     = 0;                     // 开始点
//     var endAngle       = Math.PI+(Math.PI*j)/2; // 结束点
//     var anticlockwise  = i%2==0 ? false : true; // 顺时针或逆时针

//     ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

//     if (i>1){
//       ctx.fill();
//     } else {
//       ctx.stroke();
//     }
//   }
// }



// 贝塞尔（bezier）以及二次贝塞尔 

// 对话气泡

// ctx.beginPath();
// ctx.moveTo(75,25);
// ctx.quadraticCurveTo(25,25,25,62.5);
// ctx.quadraticCurveTo(25,100,50,100);
// ctx.quadraticCurveTo(50,120,30,125);
// ctx.quadraticCurveTo(60,120,65,100);
// ctx.quadraticCurveTo(125,100,125,62.5);
// ctx.quadraticCurveTo(125,25,75,25);
// ctx.stroke();



//三次曲线 绘制心形

// ctx.beginPath();
// ctx.moveTo(75,40);
// ctx.bezierCurveTo(75,37,70,25,50,25);
// ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
// ctx.bezierCurveTo(20,80,40,102,75,120);
// ctx.bezierCurveTo(110,102,130,80,130,62.5);
// ctx.bezierCurveTo(130,62.5,130,25,100,25);
// ctx.bezierCurveTo(85,25,75,37,75,40);
// ctx.fill();



// 著名的游戏人物

// roundedRect(ctx,12,12,150,150,15);
// roundedRect(ctx,19,19,150,150,9);
// roundedRect(ctx,53,53,49,33,10);
// roundedRect(ctx,53,119,49,16,6);
// roundedRect(ctx,135,53,49,33,10);
// roundedRect(ctx,135,119,25,49,10);

// ctx.beginPath();
// ctx.arc(37,37,13,Math.PI/7,-Math.PI/7,false);
// ctx.lineTo(31,37);
// ctx.fill();

// for(var i=0;i<8;i++){
//   ctx.fillRect(51+i*16,35,4,4);
// }

// for(i=0;i<6;i++){
//   ctx.fillRect(115,51+i*16,4,4);
// }

// for(i=0;i<8;i++){
//   ctx.fillRect(51+i*16,99,4,4);
// }

// ctx.beginPath();
// ctx.moveTo(83,116);
// ctx.lineTo(83,102);
// ctx.bezierCurveTo(83,94,89,88,97,88);
// ctx.bezierCurveTo(105,88,111,94,111,102);
// ctx.lineTo(111,116);
// ctx.lineTo(106.333,111.333);
// ctx.lineTo(101.666,116);
// ctx.lineTo(97,111.333);
// ctx.lineTo(92.333,116);
// ctx.lineTo(87.666,111.333);
// ctx.lineTo(83,116);
// ctx.fill();

// ctx.fillStyle = "white";
// ctx.beginPath();
// ctx.moveTo(91,96);
// ctx.bezierCurveTo(88,96,87,99,87,101);
// ctx.bezierCurveTo(87,103,88,106,91,106);
// ctx.bezierCurveTo(94,106,95,103,95,101);
// ctx.bezierCurveTo(95,99,94,96,91,96);
// ctx.moveTo(103,96);
// ctx.bezierCurveTo(100,96,99,99,99,101);
// ctx.bezierCurveTo(99,103,100,106,103,106);
// ctx.bezierCurveTo(106,106,107,103,107,101);
// ctx.bezierCurveTo(107,99,106,96,103,96);
// ctx.fill();

// ctx.fillStyle = "black";
// ctx.beginPath();
// ctx.arc(101,102,2,0,Math.PI*2,true);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(89,102,2,0,Math.PI*2,true);
// ctx.fill();

// function roundedRect(ctx,x,y,width,height,radius){
//   ctx.beginPath();
//   ctx.moveTo(x,y+radius);
//   ctx.lineTo(x,y+height-radius);
//   ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
//   ctx.lineTo(x+width-radius,y+height);
//   ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
//   ctx.lineTo(x+width,y+radius);
//   ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
//   ctx.lineTo(x+radius,y);
//   ctx.quadraticCurveTo(x,y,x,y+radius);
//   ctx.stroke();
// }



// Path2D 对象

// 正如我们在前面例子中看到的，你可以使用一系列的路径和绘画命令来把对象“画”在画布上。
// 为了简化代码和提高性能，Path2D对象已可以在较新版本的浏览器中使用，用来缓存或记录绘画命令，这样你将能快速地回顾路径。

// var rectangle = new Path2D();
//     rectangle.rect(10, 10, 50, 50);

// var circle = new Path2D();
// 	circle.moveTo(125, 35);
// circle.arc(100, 35, 25, 0, 2 * Math.PI);

// ctx.stroke(rectangle);
// ctx.fill(circle);








// 色彩 ColorsEDIT
// 到目前为止，我们只看到过绘制内容的方法。如果我们想要给图形上色，有两个重要的属性可以做到：fillStyle 和 strokeStyle。

// fillStyle = color
// 设置图形的填充颜色。
// strokeStyle = color
// 设置图形轮廓的颜色。

// for (var i=0;i<6;i++){
//     for (var j=0;j<6;j++){
//       ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + 
//                        Math.floor(255-42.5*j) + ',0)';
//       ctx.fillRect(j*25,i*25,25,25);
//     }
// }

// for (var i=0;i<6;i++){
//     for (var j=0;j<6;j++){
//         ctx.strokeStyle = 'rgb(0,' + Math.floor(255-42.5*i) + ',' + 
//                          Math.floor(255-42.5*j) + ')';
//         ctx.beginPath();
//         ctx.arc(212.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
//         ctx.stroke();
//   	}
// }

/*
// globalAlpha 示例

ctx.fillStyle = '#FD0';
ctx.fillRect(0,0,75,75);
ctx.fillStyle = '#6C0';
ctx.fillRect(75,0,75,75);
ctx.fillStyle = '#09F';
ctx.fillRect(0,75,75,75);
ctx.fillStyle = '#F30';
ctx.fillRect(75,75,75,75);
ctx.fillStyle = '#FFF';

// set transparency value
ctx.globalAlpha = 0.2;

// Draw semi transparent circles
for (var i=0;i<7;i++){
  	ctx.beginPath();
  	ctx.arc(75,75,10+10*i,0,Math.PI*2,true);
  	ctx.fill();
}


ctx.fillStyle = 'rgb(255,221,0)';
ctx.fillRect(0,0,150,37.5);
ctx.fillStyle = 'rgb(102,204,0)';
ctx.fillRect(0,37.5,150,37.5);
ctx.fillStyle = 'rgb(0,153,255)';
ctx.fillRect(0,75,150,37.5);
ctx.fillStyle = 'rgb(255,51,0)';
ctx.fillRect(0,112.5,150,37.5);

// Draw semi transparent rectangles
for (var i=0;i<10;i++){
	ctx.fillStyle = 'rgba(255,255,255,'+(i+1)/10+')';
	for (var j=0;j<4;j++){
	  	ctx.fillRect(5+i*14,5+j*37.5,14,27.5)
	}
}

*/



// 线型 Line styles

// lineWidth = value
// lineCap = type
// lineJoin = type
// miterLimit = value




// 状态的保存和恢复 Saving and restoring state

/*

ctx.fillRect(0,0,150,150);   // Draw a rectangle with default settings
ctx.save();                  // Save the default state

ctx.fillStyle = '#09F'       // Make changes to the settings
ctx.fillRect(15,15,120,120); // Draw a rectangle with new settings

ctx.save();                  // Save the current state
ctx.fillStyle = '#FFF'       // Make changes to the settings
ctx.globalAlpha = 0.5;    
ctx.fillRect(30,30,90,90);   // Draw a rectangle with new settings

ctx.restore();               // Restore previous state
ctx.fillRect(45,45,60,60);   // Draw a rectangle with restored settings

ctx.restore();               // Restore original state
ctx.fillRect(60,60,30,30);   // Draw a rectangle with restored settings

*/




/*

ctx.fillRect(0,0,150,150);
  ctx.translate(75,75);

  // Create a circular clipping path
  ctx.beginPath();
  ctx.arc(0,0,60,0,Math.PI*2,true);
  ctx.clip();

  // draw background
  var lingrad = ctx.createLinearGradient(0,-75,0,75);
  lingrad.addColorStop(0, '#232256');
  lingrad.addColorStop(1, '#143778');
  
  ctx.fillStyle = lingrad;
  ctx.fillRect(-75,-75,150,150);

  // draw stars
  for (var j=1;j<50;j++){
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.translate(75-Math.floor(Math.random()*150),
                  75-Math.floor(Math.random()*150));
    drawStar(ctx,Math.floor(Math.random()*4)+2);
    ctx.restore();
  }
  

function drawStar(ctx,r){
  ctx.save();
  ctx.beginPath()
  ctx.moveTo(r,0);
  for (var i=0;i<9;i++){
    ctx.rotate(Math.PI/5);
    if(i%2 == 0) {
      ctx.lineTo((r/0.525731)*0.200811,0);
    } else {
      ctx.lineTo(r,0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
  }

  */





/*
var sun = new Image();
var moon = new Image();
var earth = new Image();
function init(){
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('c1').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,300,300); // clear canvas

  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.strokeStyle = 'rgba(0,153,255,0.4)';
  ctx.save();
  ctx.translate(150,150);

  // Earth
  var time = new Date();
  ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
  ctx.translate(105,0);
  ctx.fillRect(0,-12,50,24); // Shadow
  ctx.drawImage(earth,-12,-12);

  // Moon
  ctx.save();
  ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
  ctx.translate(0,28.5);
  ctx.drawImage(moon,-3.5,-3.5);
  ctx.restore();

  ctx.restore();
  
  ctx.beginPath();
  ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
  ctx.stroke();
 
  ctx.drawImage(sun,0,0,300,300);

  window.requestAnimationFrame(draw);
}

init();
*/


/*
// 动画时钟

function clock(){
  var now = new Date();
  var ctx = document.getElementById('c1').getContext('2d');
  ctx.save();
  ctx.clearRect(0,0,150,150);
  ctx.translate(75,75);
  ctx.scale(0.4,0.4);
  ctx.rotate(-Math.PI/2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";

  // Hour marks
  ctx.save();
  for (var i=0;i<12;i++){
    ctx.beginPath();
    ctx.rotate(Math.PI/6);
    ctx.moveTo(100,0);
    ctx.lineTo(120,0);
    ctx.stroke();
  }
  ctx.restore();

  // Minute marks
  ctx.save();
  ctx.lineWidth = 5;
  for (i=0;i<60;i++){
    if (i%5!=0) {
      ctx.beginPath();
      ctx.moveTo(117,0);
      ctx.lineTo(120,0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI/30);
  }
  ctx.restore();
 
  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr  = now.getHours();
  hr = hr>=12 ? hr-12 : hr;

  ctx.fillStyle = "black";

  // write Hours
  ctx.save();
  ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20,0);
  ctx.lineTo(80,0);
  ctx.stroke();
  ctx.restore();

  // write Minutes
  ctx.save();
  ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28,0);
  ctx.lineTo(112,0);
  ctx.stroke();
  ctx.restore();
 
  // Write seconds
  ctx.save();
  ctx.rotate(sec * Math.PI/30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30,0);
  ctx.lineTo(83,0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0,0,10,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95,0,10,0,Math.PI*2,true);
  ctx.stroke();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.arc(0,0,3,0,Math.PI*2,true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#325FA2';
  ctx.arc(0,0,142,0,Math.PI*2,true);
  ctx.stroke();

  ctx.restore();

  window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);

*/



/*
var raf;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: 'blue',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
	  ball.vy = -ball.vy;
	}
	if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
	  ball.vx = -ball.vx;
	}
  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover', function(e){
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout",function(e){
  window.cancelAnimationFrame(raf);
});

ball.draw();
*/









/**

	自用背景 ( 点线图 )

*/

var height = canvas.height,
	width = canvas.width;


resize();
window.addEventListener('resize', function() {
	resize();
})


function resize() {
	width = canvas.width = Math.floor( ( window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ) * 0.8 );
    height = canvas.height = Math.floor( ( window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ) * 0.8 );
}

 var RAF = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                window.setTimeout(callback, 1000 / 60);
        	};
})();

var mouse = {x: null, y: null, max: 20000};
    window.onmousemove = function(e){
        e = e || window.event;
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    };
    window.onmouseout = function(e){
        mouse.x = null;
        mouse.y = null;
    };


var dots = [];

for (var i = 0; i < 100; i++) {
	var x = Math.random() * width;
    var y = Math.random() * height;
    var xa = Math.random() * 2 - 1;
    var ya = Math.random() * 2 - 1;

    dots.push({
    	x: x,
    	y: y,
    	xa: xa,
    	ya: ya,
    	max: 6000
    });
}

setTimeout(function(){
    animate();
}, 100);

function animate() {
	ctx.clearRect(0, 0, width, height);

	var ndots  = [mouse].concat(dots);

	dots.forEach(function(dot) {
		dot.x += dot.xa;
		dot.y += dot.ya;

		dot.xa *= (dot.x > width || dot.x < 0) ? -1 : 1;
		dot.ya *= (dot.y > height || dot.y < 0) ? -1 : 1;

		ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1);


		var i = 0, len = ndots.length;
		for (; i < len; i++) {
			var d2 = ndots[i];

			if (dot === d2 || d2.x === null || d2.y === null) continue;

			var xc = dot.x - d2.x;
			var yc = dot.y - d2.y;

			var dis = xc * xc + yc * yc;

			var  ratio;

			if(dis < d2.max) {
				ratio = (d2.max - dis) / d2.max;

				ctx.beginPath();
				ctx.lineWidth = ratio / 2;
				ctx.strokeStyle = 'rgba(0, 0, 0,' + (ratio + 0.2) + ')';
				ctx.moveTo(dot.x, dot.y);
				ctx.lineTo(d2.x, d2.y);
				ctx.stroke();
			}
		}

		ndots.splice(ndots.indexOf(dot), 1);
	});

	RAF(animate);
}






























