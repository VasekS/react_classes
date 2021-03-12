var nameVar = 'Vasek';
var nameVar = 'Kara';

console.log('nameVar', nameVar);

//with 'let' I can not redifine the variable
let nameLet = 'Jen';
console.log('nameLet', nameLet);

//cant be reassigned
const nameConst = 'Frank';
console.log('nameConst', nameConst);


// Block scoping

const fullName = 'Vaclav Sekret';
const firstName;

if(fullName) {
	firstName = fullName.split(' ')[0];
	console.log(firstName);
}

console.log(firstName);