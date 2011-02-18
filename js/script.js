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
}
function drawEverything(family,school,health,social,dating,purpose,environment,plans) {
	var wheel = document.getElementById('wheel').getContext('2d');
	
	//clear it
	wheel.clearRect(0,0,480,480);
	
	//draw the wheel
	drawWheel();
	
	//draw the wedgies
	//family
	wheel.fillStyle = "#f6e677"
	wheel.beginPath();
	wheel.arc(240,240,family*24, 270 * Math.PI/180, 315 * Math.PI/180, false);
	wheel.fill();
	wheel.closePath();
	
	wheel.fillStyle = "#faf0b3"
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
	wheel.fillStyle = "#d4e9ea"
	wheel.beginPath();
	wheel.arc(240,240,health*24, 0 * Math.PI/180, 45 * Math.PI/180, false);
	wheel.fill();
	wheel.closePath();
	
	wheel.fillStyle = "#e3f1f2"
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
  }