console.log('App.js is running!');

const app = {
	title: 'Visibility Toggle',
	subtitle: 'Hey. There are some details you can now see!',
	options: []
};

const onShowDetails = () => {
	console.log('its working');
	<p>app.subtitle</p>;
};

const visibilityToggle = (
	<div>
		<h1>{app.title}</h1>
		<button onClick={onShowDetails}>Show Details</button>

	</div>
	);

const appRoot = document.getElementById('app');
ReactDOM.render(visibilityToggle, appRoot);