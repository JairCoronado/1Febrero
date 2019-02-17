function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	if(mouseIsPressed){
		if(mouseX > 150 && mouseX < 250){
			backgraund(0, 255, 0);
		}
}
	rect(150, 150, 100, 100);
	console.log(mouseX, mouseY);
}
