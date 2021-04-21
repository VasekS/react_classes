//
// Object Destructuring
//

// const person = {
// 	name: 'Vasek',
// 	age: 26,
// 	location: {
// 		city: 'Los Angeles',
// 		temp: 90
// 	}
// };
// 
// const { name = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;
// 
// console.log(`${name} is ${age}.`);
// 
// const { city, temp: temperature } = person.location
// 
// if (city && temperature){
// 	console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };
// 
// const { name: publisherName = 'Self-Published' } = book.publisher
// 
// console.log(publisherName); //Penguin, default set to Self-Published

//
//Array Destructuring
//

// const address = ['22892 Concord Drive', 'Santa Clarita', 'California', '91350'];
// const [, city, state = 'Opava'] = address;
// console.log(`You are in ${city}, ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , mediumPrice] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}`);


