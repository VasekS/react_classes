console.log('App.js is running!');

// JSX - JavaScript XML
// JS language extension

//var template = <p>This is JS from app.js!</p>;
var template = /*#__PURE__*/React.createElement("p", null, "This is JS from app.js!");
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);