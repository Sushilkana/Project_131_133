var img = "";
var status = "";
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

		r = random(255);
        g = random(255);
        b = random(255);
        Object_Detector.detect(video, gotresult);
        for (i = 0; i <= object.length; i++) {
            document.getElementById("Status").innerHTML = "Status: Detected Objects";
            document.getElementById("nameofobject").innerHTML = object.lenght;

            fill(r,g,b);
            noFill();
            stroke(r,g,b);

            percent = floor(object[i].confidence * 100);
            text(object[i].lable + " " + percent + "%", object[i].x, object[i].y);

            rect(object[i].x, object[i].y, object[i].width, object[i].height);
}

function modelLoaded(){
	console.log("The cocossd madel is loaded...");
	status = "true";
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