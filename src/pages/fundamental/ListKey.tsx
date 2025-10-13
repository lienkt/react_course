import React from "react"

function ListKey() {
  const [timestamp, setTimestamp] = React.useState(Date.now());
  const [todos, setTodos] = React.useState([
    { title: 'react' },
    { title: 'angular' }
  ]);

  const todosFilerted = todos.map((item, index) => {
    const newItem = {
      ...item,
      id: item.title + index,
      // id: Math.floor(Math.random() * 12)
    }
    console.log('newItem: ', newItem)
    return (
      <div key={newItem.id}>
        Title: {newItem.title}
      </div>
    )
  })

  // console.log("todosFilerted: ", todosFilerted  )

  return (
    <div>
      <h1>ListKey</h1>
       Map: {todosFilerted} 
       <br />
       <button type="button" onClick={() => setTimestamp(Date.now())}>Update timestamp</button>
    </div>
  )
}

export default ListKey