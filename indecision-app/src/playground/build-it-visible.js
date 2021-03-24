let visibility = false;

const toggleVisibility = () => {
	visibility = !visibility;
	renderVisibilityApp();
};

const appRoot = document.getElementById('app');

const renderVisibilityApp = () => {
	const visibilityToggle = (
		<div>
			<h1>Visibility App</h1>
			<button onClick={toggleVisibility}>
				{visibility ? 'Hide details' : 'Show Details'}	
			</button>
			{visibility && (
				<div>
					<p>Hey. These are some details here!</p>
				</div>
			)}
		</div>
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