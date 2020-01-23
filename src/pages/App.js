import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import { TodoProvider } from '../context/todo';

const App = () => (
  <TodoProvider>
    <Form />
    <List />
  </TodoProvider>
)

export default App;
