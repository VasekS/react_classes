console.log('App.js is running!');

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: ['One', 'Two']
};

const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.options.length > 0 ? 'Here are your options' : 'There are no options'}</p>
		<ol>
			<li>Item One</li>
			<li>Item Two</li>
		</ol>
	</div>
);

const templateTwo = {
	<div>
		<h1>Count: {}</h1>
	</div>
};

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);