interface TodoDeleteButtonProps {
  onClick: any
}

function TodoDeleteButton({ onClick }: TodoDeleteButtonProps) {

  return (
    <button onClick={onClick}>Delete</button>
  )
}

export default TodoDeleteButton