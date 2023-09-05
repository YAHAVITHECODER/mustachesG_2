function preload()
{
    
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();
    
    pn = ml5.poseNet(video,modelLoaded);
    pn.on('pose',gotPoses);
}

function draw()
{
    image(video, 0, 0, 300, 300);
}

function modelLoaded()
{
    console.log('Model has been loaded successfully')
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);

        nx = results[0].pose.nose.x-10;
        ny = results[0].pose.nose.y-10;
    }
}