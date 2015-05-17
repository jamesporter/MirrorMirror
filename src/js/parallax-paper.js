var canvasElement = $('#mirror');

var canvasWidth = canvasElement.width(),
    canvasHeight = canvasElement.height(),
    canvasCenter = new Point(canvasWidth / 2, canvasHeight / 2);

var minDimension;

if (canvasWidth < canvasHeight){
  minDimension = canvasWidth;
} else {
  minDimension = canvasHeight;
}

// var squares = ['square01', 'square02', 'square03', 'square04', 'square05', 'square06'];

// for (var i = squares.length - 1; i >= 0; i--) {
//   new Raster({
//     source: squares[i],
//     position: [canvasWidth * Math.random(), canvasHeight * Math.random()]
//   }).scale((Math.floor(Math.random() * 3) + 2) / 10) ;
// }

// var children = project.activeLayer.children;
// function onFrame(event) {
//   for (var c = children.length - 1; c >= 0; c--) {
//     var angle;
//     if (c % 2 === 0) {
//       angle = 0.1;
//     } else {
//       angle = -0.1;
//     }

//     children[c].rotate(angle);
//   }
// }

new Raster({
  source: 'square01',
  position: view.center
});


var children = project.activeLayer.children;
function onFrame(event) {
  console.log('paper!!!', x,y);
}