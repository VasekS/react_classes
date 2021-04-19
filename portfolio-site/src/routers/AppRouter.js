import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import PortfolioDashboardpage from '../components/PortfolioDashboardPage';
import Portfolio1 from '../components/Portfolio1';
import Portfolio2 from '../components/Portfolio2';
import Contact from '../components/Contact';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';


const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
				<Switch>
				<Route path="/"component={HomePage} exact={true}/>
				<Route path="/portfolio"component={PortfolioDashboardpage} exact={true}/>
				<Route path="/portfolio/1"component={Portfolio1} />
				<Route path="/portfolio/2"component={Portfolio2} />
				<Route path="/contact"component={Contact} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;