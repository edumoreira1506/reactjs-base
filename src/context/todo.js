import React, { useState, createContext } from 'react';

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => setTodos([...todos, todo]);

  const removeTodo = todo => setTodos(todos.filter(item => item !== todo));

  return (
    <TodoContext.Provider value={[todos, addTodo, removeTodo]}>
      { children }
    </TodoContext.Provider>
  )
}

export const TodoConsumer = ({ children }) => (
  <TodoContext.Consumer>
    { children }
  </TodoContext.Consumer>
)
