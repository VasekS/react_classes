'use strict';

console.log('App.js is running!');

var app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: ['One', 'Two']
};

function getOptions(options) {
	if (options.length > 0) {
		return React.createElement(
			'p',
			null,
			'Here are your options: ',
			options[0] + ', ' + options[1]
		);
	} else return React.createElement(
		'p',
		null,
		'No Options'
	);
}

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		app.subtitle
	),
	getOptions(app.options),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item One'
		),
		React.createElement(
			'li',
			null,
			'Item Two'
		)
	)
);

var user = {
	name: 'Andrew',
	age: 26,
	location: 'Los Angeles'
};
function getLocation(location) {
	if (location) {
		return React.createElement(
			'p',
			null,
			'Location: ',
			location
		);
	}
}

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name ? user.name : 'Anonymus'
	),
	user.age && user.age >= 18 && React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
