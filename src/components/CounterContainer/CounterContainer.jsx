import React, { useState } from 'react'

import Counter from '../Counter/Counter'

const CounterContainer = () => {

const [count, setCount] = useState(0)

const handlePlusBtnClick = () => {
  setCount( count => count + 1)
}

const handleMinusBtnClick = () => {
  setCount( count => count - 1)
}

  return (
    <Counter  count={count}
              handlePlusBtnClick={handlePlusBtnClick}
              handleMinusBtnClick={handleMinusBtnClick}
            />
  )
}

export default CounterContainer