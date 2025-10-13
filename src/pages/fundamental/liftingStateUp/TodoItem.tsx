import TodoDeleteButton from './TodoDeleteButton'
import type { ITodoItem } from '../LiftingStateUp'

interface TodoItemProps {
  todo: ITodoItem,
   deleteTodo: (id: number) => void
}

function TodoItem({ todo, deleteTodo }: TodoItemProps) {
  return (
    <>
      {todo.title}
      <TodoDeleteButton 
        onClick={() => deleteTodo(todo.id)}
      />
    </>
  )
}

export default TodoItem