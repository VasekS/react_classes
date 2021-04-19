import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioDashboardpage = (props) => (
	<div>
		<h1>My Work</h1>
		<p>Check out few things I worked on:</p>
		<p>
			<NavLink to="/portfolio/1" activeClassName="is-active">ItemOne</NavLink>
			<NavLink to="/portfolio/2" activeClassName="is-active">ItemTwo</NavLink>
		</p>
	</div>
);

export default PortfolioDashboardpage;