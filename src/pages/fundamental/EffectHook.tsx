import React from 'react'


/*
Perform side effects from a function component after the function component renders.  (data fetching, subscriptions …)
You can use more than a single effect in a component.
Important: React runs the effects after every render - including the first render.

When we use useEffect? -> we want to perform next action after function render

clean up function only run for component re-render (not run for component first render)
*/
function EffectHook() {
  const [count, setCount] = React.useState(0);
  const [timestamp, setTimestamp] = React.useState(Date.now());
  const [todos, setTodos] = React.useState<any>([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    console.log('useEffect with no dependencies');

    return () => {
      console.log('cleanup useEffect with no dependencies');
    }
  });

  React.useEffect(() => {
    console.log('useEffect with empty dependencies');

    return () => {
      console.log('cleanup useEffect with empty dependencies');
    }
  }, []);

  React.useEffect(() => {
    console.log('useEffect with values dependencies');
    async function fetchTodos() {
      try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=2`);
        const json = await data.json();
        setTodos(json);
      } catch (err) {
        console.log('can not error', err)
      }
    }
    fetchTodos();

    return () => {
      console.log('cleanup useEffect with values dependencies');
    }
  }, [page]); // only run once time when component first render

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect with no dependencies');

    return () => {
      console.log('cleanup useLayoutEffect with no dependencies');
    }
  });

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect with empty dependencies');

    return () => {
      console.log('cleanup useLayoutEffect with empty dependencies');
    }
  }, []);

  function updateCount() {
    setCount(prevState => prevState + 1);
  }

   function updateTimestamp() {
    setTimestamp(Date.now());
  }

  console.log('-----------------------', count, timestamp)
  return (
    <div>
      <h1>EffectHook</h1> <br />

      Timestamp: {timestamp} <br />
      Count: {count} <br />
      <button type="button" onClick={updateCount}>Update Count</button>
      <button type="button" onClick={updateTimestamp}>Update Timestamp</button>
      <br /><br />
      Todo List: <br />
      {todos.map((todo: any) => (
        <div key={todo.id}>
            Title: {todo.title}
        </div>
      ))}
      <button type="button" onClick={() => setPage(prevState => prevState - 1)}>Prev Page</button>
      <span>{page}</span>
      <button type="button" onClick={() => setPage(prevState => prevState + 1)}>Next Page</button>
    </div>
  )
}

export default EffectHook