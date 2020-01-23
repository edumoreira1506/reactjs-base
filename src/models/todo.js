export const addTodo = (todos, todo) => [...todos, todo];

export const removeTodo = (todos, todo) => todos.filter(item => item !== todo);
