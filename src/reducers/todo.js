import actions from '../actions';

const INITIAL_STATE = {
  todos: []
};

const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return { ...state, todos: [ ...state.todos, action.todo ] };
    default:
      return state;
  }
};

export default historyReducer;

