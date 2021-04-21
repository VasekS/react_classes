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

const book = {
	title: 'Ego is the Enemy',
	author: 'Ryan Holiday',
	publisher: {
		name: 'Penguin'
	}
};

const { name: publisherName = 'Self-Published' } = book.publisher

console.log(publisherName); //Penguin, default set to Self-Published
