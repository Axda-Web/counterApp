import React, { createContext } from 'react'

export const CounterContext = createContext()

const CounterArea = ({children, counter}) => {
  return (
    <CounterContext.Provider value={counter}>
        {children}
    </CounterContext.Provider>
  )
}

export default CounterArea