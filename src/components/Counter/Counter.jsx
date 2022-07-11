import React from 'react'

const Counter = ({ count, handlePlusBtnClick, handleMinusBtnClick }) => {
  return (
    <div>
      <div>{count}</div>
      <button onClick={handlePlusBtnClick}>+</button>
      <button onClick={handleMinusBtnClick}>-</button>
    </div>
  )
}

export default Counter