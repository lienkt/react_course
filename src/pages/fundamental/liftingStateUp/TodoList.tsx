import TodoItem from './TodoItem'
import type { ITodoItem } from '../LiftingStateUp'

interface TodoItemProps {
  todos: ITodoItem[],
  deleteTodo: (id: number) => void
}

function TodoList({ todos, deleteTodo }: TodoItemProps) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <TodoItem todo={todo} deleteTodo={deleteTodo} />
        </li>
      ))}
    </ul>
  )
}

export default TodoList