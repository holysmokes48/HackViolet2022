var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

var blockSize = 20;
var widthInBlocks = width / blockSize;
var heightInBlocks = height / blockSize;

var drawGrid = function (w, h, id) {
ctx.canvas.width = w;
ctx.canvas.height = h;
  var data = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 501 501"><defs><style>.cls-1{fill:none;stroke:#808285;}.cls-1,.cls-2{stroke-miterlimit:10;}.cls-2{fill:#231f20;stroke:#231f20;}</style></defs><rect class="cls-1" x="0.5" y="0.5" width="500" height="500"/><line class="cls-1" x1="0.5" y1="480.5" x2="500.5" y2="480.5"/><line class="cls-1" x1="0.5" y1="460.5" x2="500.5" y2="460.5"/><line class="cls-1" x1="0.5" y1="440.5" x2="500.5" y2="440.5"/><line class="cls-1" x1="0.5" y1="420.5" x2="500.5" y2="420.5"/><line class="cls-1" x1="0.5" y1="400.5" x2="500.5" y2="400.5"/><line class="cls-1" x1="0.5" y1="380.5" x2="500.5" y2="380.5"/><line class="cls-1" x1="0.5" y1="360.5" x2="500.5" y2="360.5"/><line class="cls-1" x1="0.5" y1="340.5" x2="500.5" y2="340.5"/><line class="cls-1" x1="0.5" y1="320.5" x2="500.5" y2="320.5"/><line class="cls-1" x1="0.5" y1="300.5" x2="500.5" y2="300.5"/><line class="cls-1" x1="0.5" y1="280.5" x2="500.5" y2="280.5"/><line class="cls-1" x1="0.5" y1="260.5" x2="500.5" y2="260.5"/><line class="cls-1" x1="0.5" y1="240.5" x2="500.5" y2="240.5"/><line class="cls-1" x1="0.5" y1="220.5" x2="500.5" y2="220.5"/><line class="cls-1" x1="0.5" y1="200.5" x2="500.5" y2="200.5"/><line class="cls-1" x1="0.5" y1="180.5" x2="500.5" y2="180.5"/><line class="cls-1" x1="0.5" y1="160.5" x2="500.5" y2="160.5"/><line class="cls-1" x1="0.5" y1="140.5" x2="500.5" y2="140.5"/><line class="cls-1" x1="0.5" y1="120.5" x2="500.5" y2="120.5"/><line class="cls-1" x1="0.5" y1="100.5" x2="500.5" y2="100.5"/><line class="cls-1" x1="0.5" y1="80.5" x2="500.5" y2="80.5"/><line class="cls-1" x1="0.5" y1="60.5" x2="500.5" y2="60.5"/><line class="cls-1" x1="0.5" y1="40.5" x2="500.5" y2="40.5"/><line class="cls-1" x1="0.5" y1="20.5" x2="500.5" y2="20.5"/><line class="cls-1" x1="480.5" y1="0.5" x2="480.5" y2="500.5"/><line class="cls-1" x1="460.5" y1="0.5" x2="460.5" y2="500.5"/><line class="cls-1" x1="440.5" y1="0.5" x2="440.5" y2="500.5"/><line class="cls-1" x1="420.5" y1="0.5" x2="420.5" y2="500.5"/><line class="cls-1" x1="400.5" y1="0.5" x2="400.5" y2="500.5"/><line class="cls-1" x1="380.5" y1="0.5" x2="380.5" y2="500.5"/><line class="cls-1" x1="360.5" y1="0.5" x2="360.5" y2="500.5"/><line class="cls-1" x1="340.5" y1="0.5" x2="340.5" y2="500.5"/><line class="cls-1" x1="320.5" y1="0.5" x2="320.5" y2="500.5"/><line class="cls-1" x1="300.5" y1="0.5" x2="300.5" y2="500.5"/><line class="cls-1" x1="280.5" y1="0.5" x2="280.5" y2="500.5"/><line class="cls-1" x1="260.5" y1="0.5" x2="260.5" y2="500.5"/><line class="cls-1" x1="240.5" y1="0.5" x2="240.5" y2="500.5"/><line class="cls-1" x1="220.5" y1="0.5" x2="220.5" y2="500.5"/><line class="cls-1" x1="200.5" y1="0.5" x2="200.5" y2="500.5"/><line class="cls-1" x1="180.5" y1="0.5" x2="180.5" y2="500.5"/><line class="cls-1" x1="160.5" y1="0.5" x2="160.5" y2="500.5"/><line class="cls-1" x1="140.5" y1="0.5" x2="140.5" y2="500.5"/><line class="cls-1" x1="120.5" y1="0.5" x2="120.5" y2="500.5"/><line class="cls-1" x1="100.5" y1="0.5" x2="100.5" y2="500.5"/><line class="cls-1" x1="80.5" y1="0.5" x2="80.5" y2="500.5"/><line class="cls-1" x1="60.5" y1="0.5" x2="60.5" y2="500.5"/><line class="cls-1" x1="40.5" y1="0.5" x2="40.5" y2="500.5"/><line class="cls-1" x1="20.5" y1="0.5" x2="20.5" y2="500.5"/><rect class="cls-2" x="0.5" y="0.5" width="340" height="40"/><rect class="cls-2" x="0.5" y="40.5" width="40.01" height="340"/><rect class="cls-2" x="40.51" y="80.5" width="79.99" height="40"/><rect class="cls-2" x="340.5" y="0.5" width="160" height="20"/><rect class="cls-2" x="480.5" y="20.5" width="20" height="20"/><rect class="cls-2" x="360.5" y="40.5" width="140" height="100"/><rect class="cls-2" x="400.5" y="140.5" width="100" height="100"/><rect class="cls-2" x="260.5" y="240.5" width="240" height="80"/><rect class="cls-2" x="440.5" y="300.5" width="60" height="80"/><rect class="cls-2" x="480.5" y="380.5" width="20" height="120"/><rect class="cls-2" x="0.5" y="380.5" width="20" height="120"/><rect class="cls-2" x="20.5" y="480.5" width="40" height="20"/><rect class="cls-2" x="40.5" y="440.5" width="100" height="60"/><rect class="cls-2" x="40.5" y="400.5" width="60" height="40"/><rect class="cls-2" x="440.5" y="480.5" width="40" height="20"/><rect class="cls-2" x="420.5" y="420.5" width="20" height="80"/><rect class="cls-2" x="140.5" y="480.5" width="280" height="20"/><rect class="cls-2" x="120.5" y="400.5" width="320" height="20"/><rect class="cls-2" x="160.5" y="420.5" width="20" height="40"/><rect class="cls-2" x="180.5" y="440.5" width="220" height="20"/><rect class="cls-2" x="40.51" y="340.5" width="379.99" height="40"/><rect class="cls-2" x="220.5" y="280.5" width="20" height="60"/><rect class="cls-2" x="80.5" y="160.5" width="40" height="180"/><rect class="cls-2" x="320.5" y="160.5" width="60" height="60"/><rect class="cls-2" x="320.5" y="40.5" width="20" height="120"/><rect class="cls-2" x="240.5" y="40.5" width="40" height="120"/><rect class="cls-2" x="160.5" y="40.5" width="40" height="180"/><rect class="cls-2" x="200.5" y="200.5" width="40" height="20"/><rect class="cls-2" x="160.5" y="240.5" width="80" height="21.82"/><rect class="cls-2" x="160.5" y="262.32" width="20" height="78.18"/><rect class="cls-2" x="260.5" y="200.5" width="60" height="20"/></svg>';

  var DOMURL = window.URL || window.webkitURL || window;

  var img = new Image();
  var svg = new Blob([data], { type: 'image/svg+xml;charset=utf-8' });
  var url = DOMURL.createObjectURL(svg);

  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    DOMURL.revokeObjectURL(url);
  }
  img.src = url;
};

var gameOver = function (){
  //clearInterval(intervalId);
  ctx.font = "40px Roboto Mono";
  ctx.fillStyle = "Red";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Game Over: R to reset", width/2, height/2);
};
drawGrid(500, 500, "Layer_1");

var circle = function (x, y, radius, fillCircle){
  ctx.beginPath();
  ctx.arc(x, y, radius, Math.PI * 2, false);
  if (fillCircle){
    ctx.fill();
  }else{
    ctx.stroke();
  }
};

var Block = function(col, row){
  this.col = col;
  this.row = row;
};

Block.prototype.drawCircle = function (color){
  var centerX = this.col * blockSize + blockSize/2;
  var centerY = this.row * blockSize + blockSize/2;
  ctx.fillStyle = color;
  circle(centerX, centerY, blockSize/2, true);
};

Block.prototype.drawSquare(color){
  var x = this.col * blockSize;
  var y = this.row * blockSize;
  ctx.fillStyle = color;
  ctx.fillRect(x,y,blockSize,blockSize);
};



