import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import { TodoProvider, TodoConsumer } from '../context/todo';

const App = () => (
  <TodoProvider>
    <TodoConsumer>
      {
        ([todos, addTodo, removeTodo]) => (
          <>
            <Form addTodo={addTodo} />
            <List todos={todos} removeTodo={removeTodo} />
          </>
        )
      }
    </TodoConsumer>
  </TodoProvider>
)

export default App;
