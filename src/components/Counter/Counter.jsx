import React from 'react'

import StyledCounter from './Counter.styled'

const Counter = ({ count, handlePlusBtnClick, handleMinusBtnClick }) => {
  return (
    <StyledCounter>
      <div className='count'>{count}</div>
      <button className='btn btn--plus' onClick={handlePlusBtnClick}>+</button>
      <button className='btn btn--minus' onClick={handleMinusBtnClick}>-</button>
    </StyledCounter>
  )
}

export default Counter