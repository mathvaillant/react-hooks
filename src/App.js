import React, { useState, useMemo, useEffect } from 'react'

export default function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  // useMemo() it saves from having to re-render the whole component when there's a value that didn't change
  // only use it when the function is large. It can cause performance issues
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
    // it takes a dependency to watch for changes
  }, [number])

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  }

  useEffect(() => {
    console.log('Theme Changed')
  }, [themeStyles])

  return (
    <>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

function slowFunction(num) {
  console.log('Calling Slow Function')
  for (let i = 0; i <= 1000000000; i++) {
    return num * 2
  }
}
