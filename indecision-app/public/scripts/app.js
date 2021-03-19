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
