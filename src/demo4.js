import { createStore, combineReducers, bindActionCreators, applyMiddleware } from 'redux';
import reducers from './reducers';
import * as actionCreators from './actions';
import { middleware1, middleware2, thunkMiddleware } from './middlewares';

// 1
const rootReducer = combineReducers(reducers);

/**
 * 2.添加中间件
 */
// let store = createStore(rootReducer);
const store = applyMiddleware(middleware1, middleware2, thunkMiddleware)(createStore)(rootReducer);

/**
 * 3.查看状态
 */
const { getState, dispatch, subscribe } = store;
console.log(`初始状态：${JSON.stringify(getState())}`);

// 4
const actions = bindActionCreators(actionCreators, dispatch);

/**
 * 5.订阅
 */
const render = () => console.log(`订阅状态：${JSON.stringify(getState())}`);
subscribe(render);

/**
 * 6.调用异步action
 */
// dispatch({ type: 'DECREMENT' });
// dispatch({ type: 'INCREMENT' });
// actions.decrement();
// actions.increment();
actions.wait(1000);
