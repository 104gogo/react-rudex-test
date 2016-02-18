import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../app/store/configureStore';
import routes from '../app/routes';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

render((
	<Provider store={ store } >
	  	<Router>
	  		{ routes }
	  	</Router>
	</Provider>
), document.getElementById('root'));
