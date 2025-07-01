import React from 'react'

function EventFunction() {
  const [count, setCount] = React.useState(1);

  // click -> () => {} -> increment -> () => {} -> execute function
  const increment = (num: number) => {
    setCount(prev => prev + num + 1)
  }

  // click -> increment -> () => {} -> execute function
  // const increment = (num: number) => () => {
  //   setCount(prev => prev + num + 1)
  // }

  return (
    <div>
      <h1>EventFunction</h1>
      Count: {count}
      <button type="button" onClick={() => increment(20)}>Increment</button>
      {/* <button type="button" onClick={increment(20)}>Increment</button> */}
    </div>
  )
}

export default EventFunction