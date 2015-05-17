var sq = new Raster({
  source: 'square01',
  position: view.center
});

function onFrame(event) {
  sq.position = new Point(faceX, faceY);
}
