import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

// 1
const rootReducer = combineReducers(reducers);

// 2
const store = createStore(rootReducer);

/**
 * 3.查看状态
 */
const { getState, dispatch, subscribe } = store;
console.log(`初始状态：${JSON.stringify(getState())}`);

/**
 * 4.改变状态
 */
dispatch({ type: 'DECREMENT' });
dispatch({ type: 'INCREMENT' });
console.log(`当前状态：${JSON.stringify(getState())}`);

/**
 * 5.订阅
 */
const render = () => console.log(`订阅状态：${JSON.stringify(getState())}`);
subscribe(render);
dispatch({ type: 'DECREMENT' });
dispatch({ type: 'INCREMENT' });