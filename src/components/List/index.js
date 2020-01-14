import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../../actions/todo';

const List = () => {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      { 
        todos.map(todo =>
          <li key={todo}>
            { todo }
            <button onClick={() => dispatch(removeTodo(todo))}>Remover</button>
          </li>
        ) 
      }
    </ul>
  )
}

export default List;
