'use strict';

console.log('App.js is running!');

var app = {
	title: 'Visibility Toggle',
	subtitle: 'Hey. There are some details you can now see!',
	options: []
};

var onShowDetails = function onShowDetails() {
	console.log('its working');
	React.createElement(
		'p',
		null,
		'app.subtitle'
	);
};

var visibilityToggle = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	React.createElement(
		'button',
		{ onClick: onShowDetails },
		'Show Details'
	)
);

var appRoot = document.getElementById('app');
ReactDOM.render(visibilityToggle, appRoot);
