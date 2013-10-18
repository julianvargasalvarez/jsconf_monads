// f:number  -> number

var sine = function(x){ return Math.sin(x); };
var cube = function(x){ return x*x*x; };
var sineCubed = function(x) { return sine(cube(x)); };

console.log(sineCubed(3));
