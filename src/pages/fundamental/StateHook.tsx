import React from 'react'

/*
first render: component committed on DOM with initial state
next render (re-render): re-render component committed on DOM with new state
unmount: when component is be removed on DOM

auto batching state update

useReducer + useContext = redux
*/

function randomCount() {
  return Math.floor(Math.random() * 5);
}

function StateHook() {
  const [count, setCount] = React.useState(randomCount);

  function updateCount() {
    // setCount(count + 1);
    // setCount(count + 2);
    // setCount(count + 3);

    // updater function
    setCount(prevState => prevState + 1);
    setCount(prevState => prevState + 1);
  }

  return (
    <div>
      <h1>StateHook</h1>
      Count: {count} <br />
      <button type="button" onClick={updateCount}>Update Count</button>
    </div>
  )
}

export default StateHook