// function square(x) {
// 	return x * x;
// };
// 
// console.log(square(3))
// 
// //Arrow Functions are announyimos
// // const squareArrow = (x) => {
// // 	return x * x;
// // };
// 
// //expression syntax, identical as above
// const squareArrow = (x) => x * x;
// 
// 
// console.log(squareArrow(10));

//Challenge - Use Arrow functions ES6
//getFristname ('Mike Smith') -> "Mike"
//Create regular arrow function
//Create arrow func using the shorthand syntax


const getFirstName = (fullName) => {
	return fullName.split(' ')[0];
};

console.log(getFirstName('Vaclav Smith'));

//shorthand
const getFirstNameArrow = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameArrow('Tobby Smith'));