song1="";
song2="";
function preload(){
    song1=loadSound("Music1.mp3");
    song2=loadSound("Music2.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
     
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    Image(video,0,0,600,500);

}