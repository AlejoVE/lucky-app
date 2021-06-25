import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import { FormPage } from '../components/FormPage';
import { HomePage } from '../components/HomePage';
import { ThankYouPage } from '../components/ThankYouPage';

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route path='/register' component={FormPage} />
					<Route path='/thanks' component={ThankYouPage} />
					<Redirect to='/home' />
				</Switch>
			</div>
		</Router>
	);
};
