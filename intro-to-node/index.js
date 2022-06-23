//jshint esversion: 6
//The above line turns off the warning that shows const is only available in ES6

const superheroes = require('superheroes');

var mySuperHeroName = superheroes.random();

console.log(mySuperHeroName);

const supervillains = require('supervillains');

var mySuperVillainName = supervillains.random();

console.log(mySuperVillainName);

console.log(mySuperHeroName + " vs " + mySuperVillainName);

var allSuperVillains = supervillains.all;

console.log(allSuperVillains);
