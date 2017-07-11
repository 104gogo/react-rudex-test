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
let preState = getState();
console.log(`初始状态：${JSON.stringify(preState)}`);

/**
 * 4.订阅的作用
 */
const render = () => {
  const curState = getState();

  if (curState === preState) {
    console.log(`状态没变化：${JSON.stringify(curState)}`);
  } else {
    console.log(`新状态：${JSON.stringify(curState)}`);
  }
  preState = curState;
};
subscribe(render);

dispatch({ type: 'CHANGE' });
dispatch({ type: 'INCREMENT' });
dispatch({ type: 'CHANGE' });
