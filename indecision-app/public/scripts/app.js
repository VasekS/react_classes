'use strict';

// arguments object - no longer bound with arrow fction

var add = function add(a, b) {
	//console.log(arguments);
	return a + b;
};
console.log(add(5, 6));

// this keyboard - no longer bound

var user = {
	name: 'Vasek',
	cities: ['Los Angeles', 'London', 'Opava'],
	printPlacesLived: function printPlacesLived() {
		var _this = this;

		return this.cities.map(function (city) {
			return _this.name + ' has lived in ' + city;
		});
	}
};
console.log(user.printPlacesLived());

//Challenge area

var multiplier = {
	//numbers - array of numbers that we want to multiply
	numbers: [10, 20, 30],
	multiplyBy: 5,
	multiply: function multiply() {
		var _this2 = this;

		return this.numbers.map(function (newNumbers) {
			return newNumbers * _this2.multiplyBy;
		});
		//{
		// return this.multiplyBy * newNumbers;
		// });
	}
	//multiplyBy - single number
	//method multiply: will terurn a new array where the number have been multiplied

};

console.log(multiplier.multiply()); // [1, 2, 3] 2 [2, 4, 6]
