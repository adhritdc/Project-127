The_spectre_song="";
Harry_potter_theme_song="";
function preload()
{
    The_spectre_song = loadSound("Alan-Walker-Spectre(NCS).mp3");
    Harry_potter_theme_song = loadSound("ncs_HARRYPOTTERTHEME.mp3");
}
function setup()
{
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,0,0,600,530);
}
function play()
{
}