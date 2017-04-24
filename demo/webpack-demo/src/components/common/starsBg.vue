<template>
	<canvas id="bg"></canvas>
</template>

<script>
	export default {
		name: 'starsbg',
		mounted() {
			this.initStarsCanvas();
		},
		methods: {
			initStarsCanvas() {
				var canvas = document.getElementById("bg");
				var ctx = canvas.getContext("2d");

				var height = canvas.height,
					width = canvas.width;

				resize();
				window.addEventListener('resize', function() {
					resize();
				})

				function resize() {
					width = canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
					height = canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
				}

				var RAF = (function () {
					return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
								window.setTimeout(callback, 1000 / 60);
							};
				})();

				var mouse = {x: null, y: null, max: 20000};
					canvas.onmousemove = function(e){
						e = e || window.event;
						mouse.x = e.clientX;
						mouse.y = e.clientY;
					};
					canvas.onmouseout = function(e){
						mouse.x = null;
						mouse.y = null;
					};

				var dots = [];

				for (var i = 0; i < 100; i++) {
					var x = Math.random() * width;
					var y = Math.random() * height;
					var xa = Math.random() - 0.5;
					var ya = Math.random() - 0.5;

					dots.push({
						x: x,
						y: y,
						xa: xa,
						ya: ya,
						max: 5000
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

						ctx.beginPath();
						ctx.arc(dot.x - 0.3, dot.y - 0.3, 0.6, 0, Math.PI * 2);
						ctx.fillStyle = '#fff';
						ctx.fill();
						//ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1);


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
								ctx.strokeStyle = 'rgba(204, 204, 204,' + (ratio + 0.2) + ')';
								ctx.moveTo(dot.x, dot.y);
								ctx.lineTo(d2.x, d2.y);
								ctx.stroke();
							}
						}

						ndots.splice(ndots.indexOf(dot), 1);
					});

					RAF(animate);
				}
			}
		}
	}
</script>

<style>
	#bg {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>