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
var composeDebug = function(f, g) {
  return function(x) {
    // x = 3
    var gx = g(x), // [27, 'cube was called']
        y = gx[0], // 27
        s = gx[1], // 'cube was called'
        fx = f(y), // f(27) -> [0.9, 'sine was called']
        z = fx[0], // 0.9
        t = fx[1]; // 'sine was called'
    return [z, s+', '+t];// [0.9, 'cube was called, sine was called']
  }
}

var sineCubed = composeDebug(sine, cube);
console.log(sineCubed(3));
