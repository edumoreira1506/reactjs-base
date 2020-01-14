import React, { useState } from 'react';
import { addTodo } from '../../actions/todo';
import { useDispatch } from 'react-redux';

const Form = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <input value={todo} onChange={e => setTodo(e.target.value)} />
      <button type="button" onClick={() => dispatch(addTodo(todo))}>Adicionar!</button>
    </div>
  )
}

export default Form;
