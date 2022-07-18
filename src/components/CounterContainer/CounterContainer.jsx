import React, { useState } from 'react'

import Counter from '../Counter/Counter'
import CounterArea from '../context/CounterArea'

import { ErrorBoundary } from 'react-error-boundary'
import { logError, ErrorFallback } from '../../Error'



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
      <ErrorBoundary onError={logError} FallbackComponent={ErrorFallback} >
        <Counter />
      </ErrorBoundary>
    </CounterArea>
  )
}

export default CounterContainer