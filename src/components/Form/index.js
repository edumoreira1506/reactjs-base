import React, { useState } from 'react';

const Form = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  return (
    <div>
      <input value={todo} onChange={e => setTodo(e.target.value)} />
      <button type="button" onClick={() => addTodo(todo)}>Adicionar!</button>
    </div>
  )
}

export default Form;
