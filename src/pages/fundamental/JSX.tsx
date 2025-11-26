import React from 'react'

function JSX() {

  const expression1 = (
    <div>Express {1 + 1}</div>
  )

  return (
    <React.Fragment key={1}>
      <h1>JSX</h1>
      <div>123</div>
      <div>dasdsad</div>

      Expression 1: {expression1}
    </React.Fragment>
  )
}

export default JSX