const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;


canvas.width = 700;
canvas.height = 700;

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y); 
    ctx.stroke();
  }
}

function handeRangeChange (event) {
  const strokeSize = event.target.value;
  ctx.lineWidth = strokeSize;  
}


function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  //console.log(event.target.style);
}

function handeModeClick() {
  if(filling) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "PAINT";
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

if(range) {
  range.addEventListener("input", handeRangeChange);
}

if(mode) {
  mode.addEventListener("click", handeModeClick);
}

//console.log(Array.from(colors));

Array.from(colors).forEach(color => color.addEventListener("click",handleColorClick));