// f:number  -> (number, string)

var sine = function(x){
  return [Math.sin(x), 'sine was called'];
};
var cube = function(x){
  return [x*x*x, 'cube was called'];
};

var round = function(x) { return Math.round(x); };

var compose = function(f, g){
  return function(x){
    return f(g(x));
  }
}

//bind (number,string) -> (number,string)
var bind = function(f) {
  return function(tuple){
    var x=tuple[0],
        s=tuple[1],
        fx = f(x),
        y = fx[0],
        t = fx[1];
    return [y, s+t];
  }
}

var unit = function(x) {
  return [x, ''];
}

var lift = function(f) {
  return function(x) {
    return unit(f(x));
  }
}

var roundDebug = lift(round);
var roundedSine = compose(bind(roundDebug), bind(sine));

//************************************************

var children = function(parentElement) {
  var theChildren = [];
  var nodes = parentElement.childNodes;
  for(var i=0; i<nodes.length; i++){
    theChildren[i] = nodes[i];
  }
  return theChildren;
}
var grandChildren = function(granPha) {
  var result = [];
  var child = children(granPha);
  for(var i=0; i<child.length; i++){
    result = result.concat(children(child[i]));
  }
  return result;
}

var unit = function(htmlElement) { return [htmlElement]; };
var bind = function(f) {
  return function(list) {
    var result = [];
    for(var i=0; i<list.length; i++){
      result = result.concat(f(list[i]));
    }
    return result;
  }
}

var grandChildren = compose(bind(children), bind(children));
grandChildren(unit(head));
$("head").child().child() // jQuery
