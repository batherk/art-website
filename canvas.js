var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.addEventListener('mousemove', function(e) {
    var x = e.clientX - canvas.getBoundingClientRect().x;
    var y = e.clientY - canvas.getBoundingClientRect().y;
    console.log(x,y)
    draw(x,y);
})

function draw(x,y){

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawRec1(x,y);
    drawRec2(x,y);
    drawCirc1(x,y);
    drawTriangle(x,y);
    drawHexagon(x,y);

};

draw();


function drawRec1(x,y){
    
    var rec_x = 10;
    var rec_y = 10;
    var width = 100;
    var height = 100;
    if (x>=rec_x && y>=rec_y && x<=rec_x+width && y<=rec_y+height){
        ctx.globalAlpha = 0.3;
    }
    ctx.fillStyle = "#00a3cc";
    ctx.fillRect(rec_x,rec_y,width,height);
    ctx.globalAlpha = 1;
    
};

function drawRec2(x,y){
    ctx.strokeStyle = '#005266';
    ctx.fillStyle = "#005266";
    var rec_x = 150;
    var rec_y = 50;
    var width = 100;
    var height = 50;
    if (x>=rec_x && y>=rec_y && x<=rec_x+width && y<=rec_y+height){
        ctx.fillRect(rec_x,rec_y,width,height);
    }else{
        ctx.strokeRect(rec_x,rec_y,width,height);
    }
    
};

function drawCirc1(x,y){
    ctx.fillStyle = '#003d4d';
    ctx.beginPath();
    ctx.arc(100,200,20,0,Math.PI*2);
    ctx.fill();
    if (ctx.isPointInPath(x,y)){
        ctx.arc(100,200,30,0,Math.PI*2);
        ctx.fill();
    }
    ctx.closePath();
};

function drawTriangle(x,y){
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(200, 250);
    ctx.lineTo(225, 207);
    if (ctx.isPointInPath(x,y)){
        ctx.fillStyle = '#005266';
    }else{
        ctx.fillStyle = '#b3f0ff';
    }
    ctx.fill();
    ctx.closePath();
};

function drawHexagon(x,y){
    
    ctx.beginPath();
    ctx.moveTo(170, 130);
    ctx.lineTo(195, 130);
    ctx.lineTo(208, 152);
    ctx.lineTo(195, 174);
    ctx.lineTo(170, 174);
    ctx.lineTo(157, 152);
    ctx.lineTo(170, 130);
    if (ctx.isPointInPath(x,y)){
        ctx.strokeStyle = '#005266';
    }else{
        ctx.strokeStyle = '#33d6ff';
    };
    ctx.stroke();
    ctx.closePath();
};
