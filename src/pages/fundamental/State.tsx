import React from "react"

/*
first render -> component render UI with initialize state
re-render (next render) -> component render UI with new state
*/

function State() {
  const [count, setCount] = React.useState(1);
  const [message, setMessage] = React.useState({
    text: 'tony',
    city: 'hcm'
  }); // memory A

  function increment() {
    // setCount(count + 1)
    setCount(prevState => prevState + 1)
  }

  function updateMessage() {
    // message.text = 'Tony' + Date.now(); // mutate same memory A
    // const newMessage = {
    //   ...message,
    //   text: 'Tony' + Date.now()
    // }
    // setMessage(newMessage)
    // call function / updater fuction. Syntax code: arrow function
    setMessage((prevState) => {
      return {
        ...prevState,
        text: 'Tony' + Date.now()
      }
    })
  }

  console.log('state render: ', message)
  // UI
  return (
    <div>
      <h1>State</h1>

      Count: {count}<br />
      Message Text: {message.text} <br />
      <button type="button" onClick={increment}>Update Count</button>
      <button type="button" onClick={updateMessage}>Update Message</button>
    </div>
  )
}

export default State