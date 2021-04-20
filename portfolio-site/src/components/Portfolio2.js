import React from 'react';

const Portfolio2 = (props) => (
	<div>
		<h1>A Thing I've Done</h1>
		<p>This page is for item with id {props.match.params.id}</p>
	</div>
);

export default Portfolio2;