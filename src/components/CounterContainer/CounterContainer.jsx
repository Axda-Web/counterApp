import React, { useState } from 'react'

import Counter from '../Counter/Counter'
import CounterArea from '../context/CounterArea'



const CounterContainer = () => {


const [count, setCount] = useState(0)

const handlePlusBtnClick = () => {
  setCount( count => count + 1)
}

const handleMinusBtnClick = () => {
  setCount( count => count - 1)
}

  return (
    <CounterArea counter={{count, handlePlusBtnClick, handleMinusBtnClick}}>
      <Counter />
    </CounterArea>
  )
}

export default CounterContainer