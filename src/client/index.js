import React from 'react';
import { render } from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import configureStore from '../app/store/configureStore';
import routes from '../app/routes';

//引入样式
import '../../public/css/index.css';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const history = useRouterHistory(createHashHistory)({ queryKey: false });

render((
	<Provider store={ store } >
	  	<Router history={ history } routes={ routes } />
	</Provider>
), document.getElementById('root'));
