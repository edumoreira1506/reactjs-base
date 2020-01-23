import React, { useContext } from 'react';
import { TodoContext } from '../../context/todo';

const List = () => {
  const [todos, setTodos] = useContext(TodoContext);

  const removeTodo = todo => setTodos(prevTodos => prevTodos.filter(item => item !== todo))

  return (
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
}

export default List;
