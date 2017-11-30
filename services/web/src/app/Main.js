//Libs
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Header from './components/Header';
import Nav from './components/Nav';
import Supporting from './components/Supporting';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import NotFound from './NotFound';

class Main extends Component {
  render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' render={({path}) => (
						<div>
							<Header />
							<Nav />
							<Supporting />
							<Jumbotron />
							<Footer />
						</div>
					)} />
					<Route path="*" component={NotFound} />
				</Switch>
			</div>
    );
  }
}

export default Main;
