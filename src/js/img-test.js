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

var squares = ['square01', 'square02', 'square03', 'square04', 'square05', 'square06']

for (var i = squares.length - 1; i >= 0; i--) {
  new Raster({
    source: squares[i],
    position: [canvasWidth * Math.random(), canvasHeight * Math.random()]
  }).scale((Math.floor(Math.random() * 3) + 2) / 10) ;
};

var children = project.activeLayer.children;
function onFrame(event) {
  for (var c = children.length - 1; c >= 0; c--) {
    children[c].rotate(.1);
    children[c].position += [0.2]
  };
}

// var children = project.activeLayer.children;
// function onFrame(event) {
//   for (var i = 0, l = children.length; i < l; i++) {
//     var item = children[i];
//     var delta = (mousePoint - item.position) / (i + 5);
//     item.rotate(Math.sin((event.count + i) / 10) * 7);
//     if (delta.length > 0.1)
//       item.position += delta;
//   }
// }