import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import todo from '../reducers/todo';
import * as Todo from '../models/Todo';

const dependencies = {
  Todo
};

const reducer = combineReducers({
  todo
});

const store = createStore(
  reducer, composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument(dependencies)
    )
  )
);

export default store;
