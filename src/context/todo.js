import React, { useState, createContext } from 'react';
import * as Todo from '../models/todo';

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => setTodos(Todo.addTodo(todos, todo));

  const removeTodo = todo => setTodos(Todo.removeTodo(todos, todo));

  return (
    <TodoContext.Provider value={[todos, addTodo, removeTodo]}>
      { children }
    </TodoContext.Provider>
  )
}
