import actions from '../actions';
import { removeTodo } from '../models/Todo';

const INITIAL_STATE = {
  todos: []
};

const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return { ...state, todos: [ ...state.todos, action.todo ] };
    case actions.REMOVE_TODO:
      return { ...state, todos: removeTodo(state.todos, action.todo) };
    default:
      return state;
  }
};

export default historyReducer;

