import React from "react"

function ListKey() {
  const [todos, setTodos] = React.useState([
    { title: 'react' },
    { title: 'angular' }
  ]);

  const todosFilerted = todos.map((item, index) => {
    const newItem = {
      ...item,
      id: item.title + index
    }
    return (
      <div key={newItem.id}>
        Title: {newItem.title}
      </div>
    )
  })

  console.log("todosFilerted: ", todosFilerted  )

  return (
    <div>
      <h1>ListKey</h1>
       Map: {todosFilerted}
    </div>
  )
}

export default ListKey