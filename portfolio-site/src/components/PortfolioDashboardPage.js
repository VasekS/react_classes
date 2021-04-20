import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioDashboardpage = (props) => (
	<div>
		<h1>My Work</h1>
		<p>Check out few things I worked on:</p>
		<p>
			<Link to="/portfolio/1" activeClassName="is-active">ItemOne</Link>
			<Link to="/portfolio/2" activeClassName="is-active">ItemTwo</Link>
		</p>
	</div>
);

export default PortfolioDashboardpage;