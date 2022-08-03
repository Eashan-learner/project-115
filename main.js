function preload(){

}
function setup(){
Canvas=createCanvas(450,300);
Canvas.center();
Canvas.position(450,200);
video = createCapture(VIDEO);
video.size(450,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}
function modelLoaded(){
    console.log('PoseNet is initialized');
}
function draw(){
    image(video, 0, 0, 450, 300);
}
function lit(){
    save("myMUSTACHEapp.jpg");
}