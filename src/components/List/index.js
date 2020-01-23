import React from 'react';

const List = ({ todos, removeTodo }) => (
  <ul>
    { 
      todos.map(todo =>
        <li key={todo}>
          { todo }
          <button onClick={() => removeTodo(todo)}>Remover</button>
        </li>
      ) 
    }
  </ul>
)

export default List;
