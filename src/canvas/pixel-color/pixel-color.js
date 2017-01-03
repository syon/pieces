document.addEventListener("DOMContentLoaded", function(){
  console.log('app.js');

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var image = document.createElement("img");
  image.src = "./sample.jpg";
  image.addEventListener("load", () => {
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0, 500, 500);
  }, false);

  canvas.onmousemove = (evt) => {
    var mouseX = parseInt(evt.offsetX);
    var mouseY = parseInt(evt.offsetY);
    var hex = getHexByXY(mouseX, mouseY);
    var div = document.getElementById("clickedColor");
    div.style = `background-color:${hex}`;
  }
});

function getHexByXY(x, y) {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var imagedata = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = imagedata.data;
  var i = ((y * canvas.width) + x) * 4;
  var r = imagedata.data[i];
  var g = imagedata.data[i+1];
  var b = imagedata.data[i+2];
  var a = imagedata.data[i+3];
  return `#${d2Hex(r)}${d2Hex(g)}${d2Hex(b)}`;
}

function d2Hex(d) {
  // Converts a decimal number to a two digit Hex value
  var hex = Number(d).toString(16);
  while (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex.toUpperCase();
}
