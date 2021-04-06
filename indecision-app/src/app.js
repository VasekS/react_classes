 // import './utils.js';
 // import subtract, { square, add } from './utils.js';
 // 
 // console.log("App js is running");
 // console.log(square(5));
 // console.log(add(5, 2));
 // console.log(subtract(100, 50));

//person.js
//named export isAdult(18) - true if adult, otherwise false
//named export acanDrink(18) - true if 21 and over, otherwise false

//import isAdult and canDrink
// use both printing result to the console

 import isSenior, { isAdult,canDrink } from './person.js';
 
 console.log(isAdult(18));
 console.log(canDrink(21));
 console.log(isSenior(65));