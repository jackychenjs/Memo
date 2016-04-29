var abc = new Fx.Transitions({
	dom: 'transition_demo',
	fps: 30
});
abc.moveTo({
	x: 300,
	y: 200
});
var aa = document.getElementById('transition_demo');
//console.log(abc);

//console.timeEnd('loading:');