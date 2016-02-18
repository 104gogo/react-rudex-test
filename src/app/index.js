import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

//引入样式
import '../css/index.css';

//挂载点
const mountId = document.getElementById('root');
//渲染
render((
	<Provider store={ store } >
	  	<Router>
	  		{ routes }
	  	</Router>
	</Provider>
), mountId)
