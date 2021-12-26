function setup(){
    canvasvar = createCanvas(700,500);
    canvasvar.center();
    videovar = createCapture(VIDEO);
    videovar.hide();
    filtercolourvar = "";
}

function draw(){
    image(videovar,0,0,700,500);
    tint(filtercolourvar);
}

function applyfilter(){
    filtercolourvar = document.getElementById("colour").value;
}

function take_snapshot(){
    save("Name.png");
}