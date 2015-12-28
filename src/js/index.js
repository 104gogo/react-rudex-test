import 'babel-core/polyfill';
import React                from 'react';
import { render }           from 'react-dom';
import { Router }           from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './store/configureStore';
import routes from './common/routes';

const history = createBrowserHistory();
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

//引入样式
//import "../../public/css/index.css";

//挂载点
const mountId = document.getElementById('root');
//渲染
console.log(mountId);
render(
    <Provider store={store} >
        <Router children={routes} history={history} />
    </Provider>,
    mountId
);
