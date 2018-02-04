let canvas = document.getElementById("canvas");
let c = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 512;

// let x = 0;
// let y = 0;
// let dx ="";
// let dy ="";
// let roll = Math.floor((Math.random()*2));


function TenPrint(x,y,dx,dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;

    this.draw = function(){
        c.beginPath();
        c.lineTo(this.x, this.y);
        c.lineTo(this.x*x, this.y*y);
        c.strokeStyle = "red";
        c.stroke();
    }

    this.update = function(){
        if (this.x > innerWidth || this.x < 0) {
            this.dx = -this.dx;
        }
        if (this.y > innerHeight || this.y < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();


    }
}

let printArray = [];

for(let i=0; i<10;i++){

    let x= Math.floor(Math.random()*10);
    let y= Math.floor(Math.random()*10);
    let dx = Math.floor(Math.random()*4);
    let dy = Math.floor(Math.random()*4);
    printArray.push(new TenPrint(x,y,dx,dy))
}

function animate(){
    requestAnimationFrame(animate);
    // c.clearRect(0,0, innerWidth, innerWidth);
    for(let i=0;i<printArray.length; i++){
        printArray[i].update();
    }
}

animate();





