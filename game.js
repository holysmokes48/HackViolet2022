var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

var blockSize = 20;
var widthInBlocks = width / blockSize;
var heightInBlocks = height / blockSize;

var validCommands = ["Up", "Down", "Left", "Right"];
var enteredCommands = [];
var commandIndex = 0;

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

var gameOver = function () {
  clearInterval(intervalId);
  ctx.font = "40px Roboto Mono";
  ctx.fillStyle = "Red";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Game Over: R to reset", width / 2, height / 2);
};


var circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

var Block = function (col, row) {
  this.col = col;
  this.row = row;
};

Block.prototype.drawCircle = function (color) {
  var centerX = this.col * blockSize + blockSize / 2;
  var centerY = this.row * blockSize + blockSize / 2;
  ctx.fillStyle = color;
  circle(centerX, centerY, blockSize / 2, true);
};

Block.prototype.drawSquare = function (color) {
  var x = this.col * blockSize;
  var y = this.row * blockSize;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, blockSize, blockSize);
};

var start = function () {
  this.position = new Block(2, 25);
};
start.prototype.draw = function () {
  this.position.drawSquare("Red");
};
var end = function () {
  this.position = new Block(25, 2);
};
end.prototype.draw = function () {
  this.position.drawSquare("Green");
};
var character = function () {
  this.position = new Block(2, 25);
};

character.prototype.draw = function () {
  this.position.drawCircle("Blue");
};
character.prototype.move = function () {
  var newSpot;
  takeCommand();
  if (enteredCommands[commandIndex] === 'Down') {
    newSpot = new Block(this.position.col, this.position.row + 1);
  } else if (enteredCommands[commandIndex] === 'Up') {
    newSpot = new Block(this.position.col, this.position.row - 1);
  } else if (enteredCommands[commandIndex] === 'Left') {
    newSpot = new Block(this.position.col - 1, this.position.row);
  } else if (enteredCommands[commandIndex] === 'Right') {
    newSpot = new Block(this.position.col + 1, this.position.row);
  }
  this.position = newSpot;
  if (this.checkCollision) {
    gameOver();
    return;
  }
  if (this.atEnd) {
    won();
  }
};

character.prototype.atEnd = function () {
  if (this.position.col === 24 && this.position.row === 2) {
    return true;
  } else {
    return false;
  }
}

character.prototype.reset = function () {
  this.position = new Block(2, 24);
}
character.prototype.checkCollision = function () {
  var pos = [this.col * blockSize, this.row * blockSize];
  var x = e.pageX - pos.x;
  var y = e.pageY - pos.y;
  var coordinate = "x=" + x + ", y=" + y;
  var p = ctx.getImageData(x, y, 1, 1).data;
  var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
  if (hex === "#000000") {
    return true;
  } else {
    return false;
  }
}
var rgbToHex = function (r, g, b) {
  if (r > 255 || g > 255 || b > 255)
    throw "Invalid color component";
  return ((r << 16) | (g << 8) | b).toString(16);
}

var takeCommand = function () {
  var input = prompt("Next command (case sensitive):");
  enteredCommands.push(input);
  $("#commands").text(enteredCommands.join(", "));
  commandIndex++;
};

var won = function () {
  clearInterval(intervalId);
  ctx.font = "40px Roboto Mono";
  ctx.fillStyle = "Green";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("You Win!", width / 2, height / 2);
  ctx.font = "20px Roboto Mono";
  ctx.fillText("Press enter to move to next level.", width / 2, (width / 2) + 60);
}

var player = new character();

var intervalId;

function set_main_interval() {
  intervalId = setInterval(function () {
    clearInterval(intervalId);
    //ctx.clearRect(0, 0, width, height);
    drawGrid(500, 500, "Layer_1");
    player.move();
    player.draw();
    set_main_interval();
  }, 3000);
}

function close() {
  drawGrid(500, 500, "Layer_1");
  set_main_interval();
}


// To load first modal
function instructions() {
  var modal = document.getElementById("modal1");
  modal.style.display = "block";
}

function closeModal1() {
  var modal = document.getElementById("modal1");
  modal.style.display = "none";
  close();
}

// To load modal2
function modal2() {
  closeModal1()
  var modal = document.getElementById("modal2");
  modal.style.display = "block"
}

function closeModal2() {
  var modal = document.getElementById("modal2");
  modal.style.display = "none";
}

// To load modal3
function modal3() {
  closeModal2()
  var modal = document.getElementById("modal3");
  modal.style.display = "block"
}

function closeModal3() {
  var modal = document.getElementById("modal3");
  modal.style.display = "none";
}

// To load modal4
function modal4() {
  closeModal3()
  var modal = document.getElementById("modal4");
  modal.style.display = "block"
}

function closeModal4() {
  var modal = document.getElementById("modal4");
  modal.style.display = "none";
}

// To load modal5
function modal5() {
  closeModal4()
  var modal = document.getElementById("modal5");
  modal.style.display = "block"
}

function closeModal5() {
  var modal = document.getElementById("modal5");
  modal.style.display = "none";
}

// To load modal6
function modal6() {
  closeModal5()
  var modal = document.getElementById("modal6");
  modal.style.display = "block"
}

function closeModal6() {
  var modal = document.getElementById("modal6");
  modal.style.display = "none";
}

// To load modal7
function modal7() {
  closeModal6()
  var modal = document.getElementById("modal7");
  modal.style.display = "block"
}

function closeModal7() {
  var modal = document.getElementById("modal7");
  modal.style.display = "none";
}

// To load modal8
function modal8() {
  closeModal7()
  var modal = document.getElementById("modal8");
  modal.style.display = "block"
}

function closeModal8() {
  var modal = document.getElementById("modal8");
  modal.style.display = "none";
}
var codes = {
  82: 'R',
  13: 'enter',
  32: 'space'
};

$("body").keydown(function (event) {
  if (codes[event.keyCode] === 'R') {
    player.reset();
  } else if (codes[event.keyCode] === 'enter') {
    ctx.clearRect(0, 0, width, height);
    ctx.font("20px Roboto Mono");
    ctx.fillStyle = "Black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Next level being built", width / 2, height / 2);
  }
});