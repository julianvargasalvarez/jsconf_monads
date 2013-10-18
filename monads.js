// f:number  -> number

var sine = function(x){ return Math.sin(x); };
var cube = function(x){ return x*x*x; };

var compose = function(f, g){
  return function(x){
    return f(g(x));
  }
}
var sineCubed = compose(sine, cube);
console.log(sineCubed(30));
