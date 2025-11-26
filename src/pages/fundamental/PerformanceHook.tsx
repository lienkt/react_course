import React from 'react'
import Card from '../../components/Card'
import { useScreenWidth } from '../../hooks/useScreenWidth';

/*
memo
- Higher order-component.
- Prevent the component re-render unnecessary.
- It takes 2 arguments: one for React Component, one for custom compare (option). 
- Shallow comparison.

useCallback
- Returns  a memorized callback.
0 Callback function will re-runs if one of the dependencies has changed.
- Every callback function should be memoized to prevent useless re-rendering of child components that use the callback function” is the reasoning of his teammates.

useMemo
- Returns  a memorized value.
- useMemo() is a built-in React hook that accepts 2 arguments — a function compute that computes a result and the depedencies array.
- During initial rendering, useMemo(compute, dependencies) invokes compute, memoizes the calculation result, and returns it to the component.
- If during next renderings the dependencies don’t change, then useMemo() doesn’t invoke compute but returns the memoized value.
- But if dependencies change during re-rendering, then useMemo() invokes compute, memoizes the new value, and returns it.

*/

function PerformanceHook() {
  const { isScreenWidth } = useScreenWidth();
  const [timestamp, setTimestamp] = React.useState(Date.now());
  const [book, setBook] = React.useState({
    title: 'Utimate Javascript',
    description: 'Learn deep javascript'
  });
  const [price, setPrice] = React.useState([
    { name: 'iphone', price: 1000, quality: 2 },
    { name: 'samsung', price: 500, quality: 3 },
    { name: 'ipad', price: 1500, quality: 2 }
  ]);
  const total = React.useMemo(() => {
    console.log('total useMemo')
    return price.reduce((acc, curr) => {
      acc += curr.price * curr.quality
      return acc;
    }, 0)
  }, [price])

  function addToCard() {
    const newCard = { name: 'apple', price: 500, quality: 3 }
    setPrice(prevState => ([...prevState, newCard]))
  }

  console.log('Performance Hook -----------');

  // re-create every component render
  // const updateBook = () => {
  //   setBook(prevState => ({
  //     ...prevState,
  //     title: 'title' + Date.now()
  //   }))
  // };

  // first render: memories A, timetamp 1
  // update timestamp: 2 -> re-render
  // next render: memories A,  timetamp 1
  const updateBook = React.useCallback(() => {
    setBook(prevState => ({
      ...prevState,
      title: 'title' + Date.now()
    }))
  }, [])

  return (
    <div>
      <h1>PerformanceHook</h1>

      Timestamp: {timestamp} <br />
      Total price: {total} <br />
      <button type="button" onClick={() => setTimestamp(Date.now())}>Update timestamp</button>
      <button type="button" onClick={updateBook}>Update Book</button>
      <button type="button" onClick={addToCard}>Add to card</button>
      
      <Card 
        title="Demo memo hook"
        description='Demo'
        book={book}
      />
      <br />
      This is viewport is: {isScreenWidth ? 'PC' : 'Mobile'}
    </div>
  )
}

export default PerformanceHook