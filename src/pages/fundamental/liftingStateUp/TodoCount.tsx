import type { ITodoItem } from '../LiftingStateUp'

interface TodoCountProps {
  todos: ITodoItem[]
}

function TodoCount({ todos }: TodoCountProps) {
  return (
    <div>
      Number Todo: {todos.length}
    </div>
  )
}

export default TodoCount