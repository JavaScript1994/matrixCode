let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let str = "A+jk js:2  @dfs 17 tr YY ufds M5r P87 #18 %!& ^dfs $Ew er JH # $ * - (! ;) ,: :";
let matrix = str.split("");
let font = 12;
let col = width/font;
let arr  = [];

for (let index = 0; index < col; index++) {
    arr[index] = 1;
}

const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,width,height);
    ctx.fillStyle = "#00FF00";
    ctx.font = `${font}px system-ui`;

    for (let index = 0; index < arr.length; index++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        // ctx.fillText(txt , index*font, arr[index] * font);
        ctx.fillText(txt, index * font, arr[index] * font);
        if(arr[index] * font > height && Math.random() > 0.975){
            arr[index] = 0;
        }
        arr[index]++;
    }
}

setInterval(draw, 20);
window.addEventListener("resize",() => location.reload());