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