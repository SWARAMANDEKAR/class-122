function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tintcolor="";
}

function draw()
{
    image(video, 0, 0, 640, 480);
    tint(tintcolor);
}

function take_snapshot()
{
    save('NONE_OF_YOUR_BUISNESS.png');
}

function applyfilter()
{
    tintcolor = document.getElementById("colorname").value;
}