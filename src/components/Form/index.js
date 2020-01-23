import React, { useState, useContext } from 'react';
import { TodoContext } from '../../context/todo';

const Form = () => {
  const [todo, setTodo] = useState('');
  const [, addTodo] = useContext(TodoContext);

  return (
    <div>
      <input value={todo} onChange={e => setTodo(e.target.value)} />
      <button type="button" onClick={() => addTodo(todo)}>Adicionar!</button>
    </div>
  )
}

export default Form;
