var ellipse = function(context, cx, cy, rx, ry){
  context.save();
  context.beginPath();

  context.translate(cx-rx, cy-ry);
  context.scale(rx, ry);
  context.arc(1, 1, 1, 0, 2 * Math.PI, false);

  context.restore(); // restore to original state
  context.fill();
};

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var mirrorCanvas = document.getElementById('mirror');
mirrorCanvas.width = window.innerWidth;
mirrorCanvas.height = window.innerHeight;
var mirrorCtx = mirrorCanvas.getContext('2d');

var faceX = 0;
var faceY = 0;
var tracker = new tracking.ObjectTracker('face');

var cx = mirrorCanvas.width/2, cy = mirrorCanvas.height/2;
var x = cx, y = cy;

tracker.setInitialScale(2);
tracker.setStepSize(2);

tracking.track('#video', tracker, { camera: true });

tracker.on('track', function(event) {
  context.clearRect(0, 0, canvas.width, canvas.height);



  event.data.forEach(function(rect) {
    context.strokeStyle = '#a64ceb';
    context.strokeRect(rect.x, rect.y, rect.width, rect.height);
    context.font = '11px Helvetica';
    context.fillStyle = "#fff";
    context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
    context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);

    var mx = mirrorCanvas.width * rect.x/canvas.width,
        my = mirrorCanvas.height * rect.y/canvas.height,
        mw = mirrorCanvas.width * rect.width/canvas.width,
        mh = mirrorCanvas.height * rect.height/canvas.height;

        mx = mirrorCanvas.width - (mx + mw);

        cx = mx + mw/2;
        cy = my + mh/2;

        x += (cx - x)/10;
        y += (cy - y)/10;

    // mirrorCtx.fillStyle = "#fff";
    // mirrorCtx.fillRect(mx, my, mw, mh);

      console.log(x,y);
    });

});


var redraw = function(){
    mirrorCtx.fillStyle = "#000";
    mirrorCtx.fillRect(0,0, mirrorCanvas.width, mirrorCanvas.height);

    mirrorCtx.fillStyle = "#fff";
    //mirrorCtx.fillRect(x-50,y-50,100,100);
    ellipse(mirrorCtx, x, y, 65, 80);
    setTimeout(redraw, 60);
};

setTimeout(redraw, 60);
