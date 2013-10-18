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

console.log(roundedSine(unit(30)));
