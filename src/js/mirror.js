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

var divisions = 60;

var rectangles = [];

for (d = divisions; d > 0; d--) {
  var color;

  if (d % 5 === 0) {
    color = 'white';
  } else {
    color = 'black';
  }

  rectangles.push( new Path.Rectangle({
    center: canvasCenter,
    size: [canvasWidth / divisions * d, canvasHeight / divisions * d],
    fillColor: color
  }));
}

function onMouseMove(event) {
  var offset = canvasCenter - event.point;

  console.log( offset );

  for (var i = rectangles.length - 1; i >= 0; i--) {
    rectangles[i].position = canvasCenter - offset / (rectangles.length - i + 1);
  }
}