import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todo from '../reducers/todo';

const reducer = combineReducers({
  todo
});

const store = createStore(reducer, composeWithDevTools());

export default store;
