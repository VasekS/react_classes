'use strict';

var visibility = false;

var toggleVisibility = function toggleVisibility() {
	visibility = !visibility;
	renderVisibilityApp();
};

var appRoot = document.getElementById('app');

var renderVisibilityApp = function renderVisibilityApp() {
	var visibilityToggle = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Visibility App'
		),
		React.createElement(
			'button',
			{ onClick: toggleVisibility },
			visibility ? 'Hide details' : 'Show Details'
		),
		visibility && React.createElement(
			'div',
			null,
			React.createElement(
				'p',
				null,
				'Hey. These are some details here!'
			)
		)
	);

	ReactDOM.render(visibilityToggle, appRoot);
};

renderVisibilityApp();

//MY SOLUTION
// console.log('App.js is running!');
// 
// 
// const app = {
// 	title: 'Visibility Toggle'
// };
// 
// let buttonBool = false;
// 
// const onShowDetails = () => {
// 	console.log('its working');
// 	if (buttonBool === false) {
// 		buttonBool = true;
// 	} else {
// 		buttonBool = false;
// 	}
// 	renderVisibilityApp();
// };
// 
// const appRoot = document.getElementById('app');
// 
//  const renderVisibilityApp = () => {
// 	const visibilityToggle = (
// 		<div>
// 			<h1>{app.title}</h1>
// 			<button onClick={onShowDetails}>{buttonBool === false ? 'Show Details' : 'Hide Details'}</button>
// 			<p>{buttonBool === true ? 'Hey. There are some details you can now see!' : ' '}</p>
// 		</div>
// 	);
//  	ReactDOM.render(visibilityToggle, appRoot);
//  };
// 
//  renderVisibilityApp();
