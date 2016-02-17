import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Login from './containers/Login';
import Index from './containers/Index';

export default (
	<Route path="/">
		<Route path="login" component={ Login } />
	  	<Route path="app" component={ App }>
	  		<Route path="index" component= { Index } />
	  	</Route>
	</Route>
)