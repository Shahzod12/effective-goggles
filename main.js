function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
        var left_wrist
        var right_wrist
    }    
}
function draw() {
    background('#969A97');
}
function textSize() {
    Fill(#RRGGBB)
    var text to be displayed Shahzod :x coordinate 40: left_wrist - y coordinate right_wrist 70

}


function floor(params) 
{
    var floor
}