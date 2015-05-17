var paths = [];
var rasters = [];

var N = 20;

view.size
console.log(view.size.width, view.size.height);

var branches = ['branch01', 'branch02', 'branch03', 'branch04', 'branch05', 'branch06'];

var leafIdx = 1;

for(var i=0; i<N; i++){
    var tree = new Raster({
      source: branches[i%6],
      possition: view.center
    }).scale(i / 35, .75);
    tree.position.y = 500;
    tree.position.x = (1.5 * Math.random() - 0.25) * view.size.width;
    tree.origPos = tree.position;
    tree.idNum = i;
    paths.push(tree);




    if( i % 3 == 0){
        leafIdx++;
        var leaf = new Raster({
          source: "leaf0" + leafIdx,
          position: [view.size.width * Math.random(), view.size.width * Math.random()]
        }).scale((Math.floor(Math.random() * 3) + 2) / 10).rotate(- Math.random() * 45) ;

        leaf.origPos = leaf.position;

      rasters.push(leaf);
    }

}

var pos;

function onFrame(){
    if(!!faceX){
        for(var idx in paths){
            var tree = paths[idx];
            tree.position.x = tree.origPos.x + 0.1 * (tree.idNum + 1) * (view.center.x - faceX);

            //tree.position.y = tree.origPos.x + 0.001 * (tree.idNum + 1) * (view.center.y - faceY);

        }

        for(var idx in rasters){
          var leaf = rasters[idx];
          // leaf.position.x = leaf.origPos.x + 100 * (view.center.x - faceX);
          leaf.position.x = Math.random() * view.size.width;
          leaf.origPos.y += 1;
          if (leaf.origPos.y >= view.size.height + 100) {
            leaf.origPos.y = -100;
            leaf.origPos.x = Math.random() * view.size.width;
          }
        }
    }
}
