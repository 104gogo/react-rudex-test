import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './store/configureStore';

import App from './containers/App';
import Login from './containers/Login';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

//引入样式
import '../css/index.css';

//挂载点
const mountId = document.getElementById('root');
//渲染
render((
	<Provider store={store} >
	  	<Router>
	  		<Route path="/">
		    	<Route path="login" component={ Login } />
		      	<Route path="app" component={ App } />
		    </Route>
	  	</Router>
	</Provider>
), mountId)
