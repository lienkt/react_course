import React from 'react'
import TodoForm from './liftingStateUp/TodoForm';
import TodoCount from './liftingStateUp/TodoCount';
import TodoList from './liftingStateUp/TodoList';

export interface ITodoItem {
  id: number,
  title: string
}

function LiftingStateUp() {
  const [todos, setTodos] = React.useState<ITodoItem[]>([]);

  function updateTodo(title: string) {
    setTodos(prevState => {
      const newTodoItem = {
        id: Date.now(),
        title
      }
      return [...prevState, newTodoItem]
    })
  }

  function deleteTodo(todoId: number) {
    setTodos(prevState => {
      return prevState.filter(todo => todo.id !== todoId)
    })
  }

  console.log('todos: ', todos)

  return (
    <div>
      <h1>LiftingStateUp</h1>

      <TodoForm updateTodo={updateTodo} />
      <br />
      <TodoCount todos={todos} />
      <br />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default LiftingStateUp