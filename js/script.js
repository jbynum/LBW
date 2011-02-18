function drawWheel(){			
    var wheel = document.getElementById('wheel').getContext('2d');
	
	wheel.lineWidth = 1;
	wheel.lineJoine = "bevel";
	wheel.strokeStyle = "#7F7F7F";
	
	for(var i = 0; i < 11; i++) {
	wheel.beginPath();
	wheel.arc(240, 240, i*24, 0, Math.PI*2, true);
	wheel.stroke();
	wheel.closePath();
	}
	
	wheel.beginPath();
	wheel.moveTo(0,240);
	wheel.lineTo(480,240);
	wheel.moveTo(240,0);
	wheel.lineTo(240, 480);
	wheel.moveTo(70,70);
	wheel.lineTo(410,410);
	wheel.moveTo(70,410);
	wheel.lineTo(410,70);
	wheel.stroke();
	wheel.closePath();
	
	//label it!
	wheel.font = "bold 20px sans-serif";
	wheel.fillStyle = "#ffffff"
	wheel.fillText("Family", 270, 80);
	wheel.fillText("School Work", 325, 200);
	wheel.fillText("Health Fitness", 315, 300);
	wheel.fillText("Social Fun", 260, 400);
	wheel.fillText("Dating/Friends", 96, 400);
	wheel.fillText("Purpose", 40, 270);
	wheel.fillText("Spirituality", 40, 290);
	wheel.fillText("Religion", 40, 310);
	wheel.fillText("Physical", 40, 180);
	wheel.fillText("Environment", 40,200);
	wheel.fillText("Future Plans", 110, 80);
}
function drawEverything(family,school,health,social,dating,purpose,environment,plans) {
	var wheel = document.getElementById('wheel').getContext('2d');
	
	//clear it
	wheel.clearRect(0,0,480,480);
	
	//draw the wheel
	drawWheel();
	
	//draw the wedgies
	//family
	wheel.fillStyle = "#8d7f2b"
	wheel.beginPath();
	wheel.arc(240,240,family*24, 270 * Math.PI/180, 315 * Math.PI/180, false);
	wheel.fill();
	wheel.closePath();
	
	wheel.fillStyle = "#ffe64e"
	wheel.beginPath();
	wheel.moveTo(240,240);
	wheel.lineTo(240,240 - family*24);
	wheel.lineTo(240 + family*(17),240 - family*(17));
	wheel.fill();
	wheel.closePath();

	//school
	//var school = 4;
	wheel.fillStyle = "#cdda4e"
	wheel.beginPath();
	wheel.arc(240,240,school*24, 315 * Math.PI/180, 360 * Math.PI/180, false);
	wheel.fill();
	wheel.closePath();
	
	wheel.fillStyle = "#e0e69c"
	wheel.beginPath();
	wheel.moveTo(240,240);
	wheel.lineTo(240 + school*24, 240);
	wheel.lineTo(240 + school*(17),240 - school*(17));
	wheel.fill();
	wheel.closePath();
	
	//health
	//var health = 6;
	wheel.fillStyle = "#305355"
	wheel.beginPath();
	wheel.arc(240,240,health*24, 0 * Math.PI/180, 45 * Math.PI/180, false);
	wheel.fill();
	wheel.closePath();
	
	wheel.fillStyle = "#6eb9bd"
	wheel.beginPath();
	wheel.moveTo(240,240);
	wheel.lineTo(240 + health*24, 240);
	wheel.lineTo(240 + health*(17),240 + health*(17));
	wheel.fill();
	wheel.closePath();
	
	//social
	//var social = 8;
	wheel.fillStyle = "#eaaf37"
	wheel.beginPath();
	wheel.arc(240,240,social*24, 45 * Math.PI/180, 90 * Math.PI/180, false);
	wheel.fill();
	wheel.closePath();
	
	wheel.fillStyle = "#f1ce8c"
	wheel.beginPath();
	wheel.moveTo(240,240);
	wheel.lineTo(240, 240 + social*24);
	wheel.lineTo(240 + social*(17),240 + social*(17));
	wheel.fill();
	wheel.closePath();
	
	//dating
	//var dating = 10;
	wheel.fillStyle = "#5682bf"
	wheel.beginPath();
	wheel.arc(240,240,dating*24, 90 * Math.PI/180, 135 * Math.PI/180, false);
	wheel.fill();
	wheel.closePath();
	
	wheel.fillStyle = "#98a9d5"
	wheel.beginPath();
	wheel.moveTo(240,240);
	wheel.lineTo(240, 240 + dating*24);
	wheel.lineTo(240 - dating*(17),240 + dating*(17));
	wheel.fill();
	wheel.closePath();
	
	//purpose
	//var purpose = 8;
	wheel.fillStyle = "#d44733"
	wheel.beginPath();
	wheel.arc(240,240,purpose*24, 135 * Math.PI/180, 180 * Math.PI/180, false);
	wheel.fill();
	wheel.closePath();
	
	wheel.fillStyle = "#e39a7a"
	wheel.beginPath();
	wheel.moveTo(240,240);
	wheel.lineTo(240 - purpose*24, 240);
	wheel.lineTo(240 - purpose*(17),240 + purpose*(17));
	wheel.fill();
	wheel.closePath();
	
	//envrionment
	//var env = 6;
	wheel.fillStyle = "#5fab60"
	
	wheel.beginPath();
	wheel.arc(240,240,environment*24, 180 * Math.PI/180, 225 * Math.PI/180, false);
	wheel.fill();
	wheel.closePath();
	
	wheel.fillStyle = "#a4c89c"
	wheel.beginPath();
	wheel.moveTo(240,240);
	wheel.lineTo(240 - environment*24, 240);
	wheel.lineTo(240 -environment*(17),240 -environment*(17));
	wheel.fill();
	wheel.closePath();
	
	//plans
	//var plans = 4;
	wheel.fillStyle = "#457287"
	wheel.beginPath();
	wheel.arc(240,240,plans*24, 225 * Math.PI/180, 270 * Math.PI/180, false);
	wheel.fill();
	wheel.closePath();
	
	wheel.fillStyle = "#8b9cac"
	wheel.beginPath();
	wheel.moveTo(240,240);
	wheel.lineTo(240,240 - plans*24);
	wheel.lineTo(240 -plans*(17),240-plans*(17));
	wheel.fill();
	wheel.closePath();	
	
	//make the lines
	wheel.beginPath();
	wheel.moveTo(0,240);
	wheel.lineTo(480,240);
	wheel.moveTo(240,0);
	wheel.lineTo(240, 480);
	wheel.moveTo(70,70);
	wheel.lineTo(410,410);
	wheel.moveTo(70,410);
	wheel.lineTo(410,70);
	wheel.stroke();
	wheel.closePath();
	
	//label it!
	wheel.font = "bold 20px sans-serif";
	wheel.fillStyle = "#ffffff"
	wheel.fillText("Family", 270, 80);
	wheel.fillText("School Work", 325, 200);
	wheel.fillText("Health Fitness", 315, 300);
	wheel.fillText("Social Fun", 260, 400);
	wheel.fillText("Dating/Friends", 96, 400);
	wheel.fillText("Purpose", 40, 270);
	wheel.fillText("Spirituality", 40, 290);
	wheel.fillText("Religion", 40, 310);
	wheel.fillText("Physical", 40, 180);
	wheel.fillText("Environment", 40,200);
	wheel.fillText("Future Plans", 110, 80);
			
  }