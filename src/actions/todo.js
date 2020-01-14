import actions from '../actions';

export const addTodo = todo => ({
  type: actions.ADD_TODO,
  todo
});

export const removeTodo = todo => ({
  type: actions.REMOVE_TODO,
  todo
})

