// Libs
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import NotFound from './NotFound';

// Routes
const routes = (
  <Router>
		<div>
			<Switch>
				<Route exact path='/' render={({path}) => (
					<div>
						<Header />
						<Nav />
						<Main />
						<Jumbotron />
						<Footer />
					</div>
				)} />
				<Route path="*" component={NotFound} />
			</Switch>
		</div>
  </Router>
);

export default routes;
