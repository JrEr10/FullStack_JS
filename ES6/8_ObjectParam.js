//ES5
var hero = 'Joker';
var universe = 'DC Comics';
var movie = 'Batman Lego';

var objRequest = {
  hero: hero,
  universe: universe,
  movie: movie,
};

console.log(objRequest);

//ES6
//Lo mandará siempre y cuando coincida con el nombre de la variable.
let hero = 'Joker';
let universe = 'DC Comics';
let movie = 'Batman Lego';

let objRequest = {
  hero,
  universe,
  movie,
};

console.log(objRequest);
