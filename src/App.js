import React, { useState, useRef, useEffect } from 'react'

function App() {
  const [name, setName] = useState('')
  // useRef persists values accross renders
  //const inputRef = useRef()
  const prevName = useRef()

  /* function focus() {
    // works similarly to .querySelector() but it DOES NOT updates the state of the component
    inputRef.current.focus()
    inputRef.current.value = 'Some Value'
  } */

  // useRef() is also useful to store the previous value

  useEffect(() => {
    prevName.current = name
  }, [name])

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and used to be {prevName.current}{' '}
      </div>
    </>
  )
}

export default App
