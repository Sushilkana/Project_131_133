var img = "";
var status = "";
var object = [];

function preload(){
	img = loadImage('bed-design.jpg');
}

function setup(){
	canvas = createCanvas(700,400);
	canvas.center();

	Object_Detector = ml5.objectDetector('cocossd', modelLoaded);
}

function draw(){
	image(img,0,0,700,400);
	
    for (i = 0; i < object.length; i++) {
    	document.getElementById("Status").innerHTML = "Status: Detected Objects";
        document.getElementById("nameofobject").innerHTML = "NO: " + object.length + " " + object[0].label  + ", " + object[i].label;

        fill("white");
        noFill();
        stroke("red");

        percent = floor(object[i].confidence * 100);
        text(object[i].label + " " + percent + "%", object[i].x, object[i].y);

        rect(object[i].x, object[i].y, object[i].width, object[i].height);
	}
}

function modelLoaded(){
	console.log("The cocossd model is loaded...");
	status = "true";
	document.getElementById("Status").innerHTML = "Status: Object Detecting...";
	Object_Detector.detect(img,gotresult);
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