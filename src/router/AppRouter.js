import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../components/templates/dashboard';

const AppRouter = () => (
	<BrowserRouter>
		<Switch>
			<Route exact={true} path='/'>
				<Dashboard />
			</Route>
		</Switch>
	</BrowserRouter>
);

export default AppRouter;
