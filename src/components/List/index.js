import React from 'react';
import { useSelector } from 'react-redux';

const List = () => {
  const todos = useSelector(state => state.todo.todos);

  return (
    <ul>
      { todos.map(todo => <li key={todo}>{ todo }</li>) }
    </ul>
  )
}

export default List;
