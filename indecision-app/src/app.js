console.log('App.js is running!');

var app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: ['One', 'Two']
};

//USING FUNCTION IS TOO COMPLICATED
function getOptions(options) {
	if (options.length > 0) {
		return <p>Here are your options: {options[0] + ', ' + options[1]}</p>
	} else
		return <p>No Options</p>
}

var template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		{getOptions(app.options)}
		<ol>
			<li>Item One</li>
			<li>Item Two</li>
		</ol>
	</div>
);

var user = {
	name: 'Andrew',
	age: 26,
	location: 'Los Angeles'
};
function getLocation(location) {
	if (location) {
		return <p>Location: {location}</p>;
	}
}

var templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymus'}</h1>
		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);