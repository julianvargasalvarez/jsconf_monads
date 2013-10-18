// f:number  -> (number, string)

var sine = function(x){
  return [Math.sin(x), 'sine was called'];
};
var cube = function(x){
  return [x*x*x, 'cube was called'];
};

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

var sineCubed = compose(bind(sine), bind(cube));
console.log(sineCubed([3, '']));













