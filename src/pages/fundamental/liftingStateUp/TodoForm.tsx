import React from 'react'

interface TodoFormProps {
  updateTodo: (title: string) => void
}

function TodoForm({ updateTodo }: TodoFormProps) {
  const [title, setTitle] = React.useState('');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    updateTodo(title);
    setTitle('');
  }

  return (
    <form onSubmit={onSubmit}>
      Title: 
      <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
      <button>Add Todo</button>
    </form>
  )
}

export default TodoForm