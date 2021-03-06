var canvasElement = $('#mirrorCanvas');

var canvasWidth = canvasElement.width(),
    canvasHeight = canvasElement.height(),
    canvasCenter = new Point(canvasWidth / 2, canvasHeight / 2);

var minDimension;

if (canvasWidth < canvasHeight){
  minDimension = canvasWidth;
} else {
  minDimension = canvasHeight;
}

var squares = ['square01', 'square02', 'square03', 'square04', 'square05', 'square06'];

var triangles = ['triangle01', 'triangle02', 'triangle03', 'triangle04', 'triangle05', 'triangle06'];

for (var s = squares.length - 1; s >= 0; s--) {
  new Raster({
    source: squares[s],
    position: [canvasWidth * Math.random(), canvasHeight * Math.random()]
  }).scale((Math.floor(Math.random() * 3) + 2) / 10) ;
}

for (var t = triangles.length - 1; t >= 0; t--) {
  new Raster({
    source: triangles[t],
    position: [canvasWidth * Math.random(), canvasHeight * Math.random()]
  }).scale((Math.floor(Math.random() * 3) + 2) / 10) ;
}

var children = project.activeLayer.children;
function onFrame(event) {
  for (var c = children.length - 1; c >= 0; c--) {
    var angle;
    if (c % 2 === 0) {
      angle = 0.1;
    } else {
      angle = -0.1;
    }

    children[c].rotate(angle);
    children[c].position += 0.2;
  }
}