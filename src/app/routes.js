import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Login from './containers/Login';
import App from './containers/App';
import Main from './containers/Main';

export default (
	<Route path="/">
		<IndexRoute component={ Login } />
		<Route path="login" component={ Login } />
	  	<Route path="app" component={ App }>
	  		<Route path="index" component= { Main } />
	  	</Route>
	</Route>
)