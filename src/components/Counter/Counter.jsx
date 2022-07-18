import React, { useContext } from 'react'

import StyledCounter from './Counter.styled'
import { CounterContext } from '../context/CounterArea'


const Counter = () => {

  const { count, handlePlusBtnClick, handleMinusBtnClick } = useContext(CounterContext)
  const err = new Error('oops')

  return (
      <StyledCounter>
        <div className='count'>{count}</div>
        <button className='btn btn--plus' onClick={handlePlusBtnClick}>+</button>
        <button className='btn btn--minus' onClick={handleMinusBtnClick}>-</button>
      </StyledCounter>
  )
}

export default Counter