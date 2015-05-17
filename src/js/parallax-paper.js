var paths = [];
var N = 50;

view.size
console.log(view.size.width, view.size.height);

for(var i=0; i<N; i++){
    var tree = new Path.Line(new Point(0, 10 * i),
                             new Point(0, view.size.height - 10 * i));
    tree.idNum = i;
    tree.position.x = (1.5 * Math.random() - 0.25) * view.size.width;
    tree.origPos = tree.position;
    tree.strokeColor = 'white';
    tree.strokeWidth = 20/ (i+1);
    paths.push(tree);
}

var pos;

function onFrame(){
    if(!!faceX){
        for(var idx in paths){
            var tree = paths[idx];
            tree.position.x = tree.origPos.x + 0.1 * (tree.idNum + 1) * (view.center.x - faceX);

            //tree.position.y = tree.origPos.x + 0.001 * (tree.idNum + 1) * (view.center.y - faceY);

        }
    }
}
