// arguments object - no longer bound with arrow fction

const add = (a, b) => {
	//console.log(arguments);
	return a + b;
};
console.log(add(5,6));

// this keyboard - no longer bound

const user = {
	name: 'Vasek',
	cities: ['Los Angeles', 'London', 'Opava'],
	printPlacesLived() {
		return this.cities.map((city) => {
			return this.name + ' has lived in ' + city;
		});
	}
};
console.log(user.printPlacesLived());


//Challenge area

const multiplier = {
	//numbers - array of numbers that we want to multiply
	numbers: [10, 20, 30],
	multiplyBy: 5,
	multiply() {
		 return this.numbers.map((newNumbers) => newNumbers * this.multiplyBy);
		 	//{
			// return this.multiplyBy * newNumbers;
		// });
	}
	//multiplyBy - single number
	//method multiply: will terurn a new array where the number have been multiplied
};

console.log(multiplier.multiply()); // [1, 2, 3] 2 [2, 4, 6]