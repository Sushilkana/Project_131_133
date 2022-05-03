var img = "";
var status = false;
var object = [];

function preload(){
	
}

function setup(){
	canvas = createCanvas(700,400);
	canvas.center();

	Object_Detector = ml5.objectDetector('cocossd', modelLoaded);
}

function draw(){
	image(img,0,0,700,400);
}

function modelLoaded(){
	console.log("The cocossd madel is loaded...");
	status = true;
	document.getElementById("Status").innerHTML = "Status: Object Detecting...";
	Object_Detector.detect(image.gotresult);
}

function gotresult(error,results){
	if(error){
		console.log(error);
	} else{
		console.log(results);
		object  = results;
	}
}

function back(){
	window.location = "index.html";	
}