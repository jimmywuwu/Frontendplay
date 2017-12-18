window.onload=function (){
	var canvas=document.getElementById("canvas"),
	 	context=canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height =window.innerHeight,
		particles=[],
		particleNum=100;

		for(var i =0; i<particleNum ;i=i+1){
			particles.push(particle.create(width/2,height/2, Math.random()*4+1 , Math.random()*Math.PI*2))
			
		}

		render();

		function render(){
			context.clearRect(0,0,width,height);

			for(var i=0; i <particleNum ;i=i+1){
				var p=particles[i];
				p.update();

				context.beginPath();
				context.arc(p.position.getX(),p.position.getY(),10,1,Math.PI*2,false),
				context.fill();
			}

			requestAnimationFrame(render);

		};

		// 	particleNum=100,
	// 	particles=[];

	// for(var i =0;i<particleNum;i+=1){
	// 	particles.push(particle.create(width/2,height/2,Math.random()*4+1,Math.random()*Math.PI*2));
	// }
	
	// render();

	// function render(){
	// 	context.clearRect(0,0,width,height);
	// 	for(var i =0;i<particleNum;i+=1){
	// 	var p=particles[i];
	// 	p.update();
	// 	console.log(p.position);
	// 	context.beginPath();
	// 	context.arc(p.position.getY(),p.position.getX(),10,0,Math.PI*2,false);
	// 	context.fill();
		
	// 	}

	// 	requestAnimationFrame(render);
	// };
	


};