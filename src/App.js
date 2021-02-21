import React, { useState, useReducer } from 'react'
import Todo from './Todo'
// The magic of useReducer() is:
// 1  - it takes a dispatch with a type and a payload.
// The type is essentialy what we are going to do.
// The payload are the parameters for the action being performed

// It's better to store the diff action types in a variable
export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
}

// takes the initial state and the action to be fired
function reducer(todos, action) {
  // to handle multiple/different states we pass a type (action.type) for each change -> switch(action.type){}
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id)
    default:
      return todos
  }
}

// function to handle the action type of add-todo
function newTodo(name) {
  return { id: Date.now(), name: name, complete: false }
}

function App() {
  // useReducer takes a function, and a initial state
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    // dispatch({type: the action type, payload: the data})
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    setName('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
    </>
  )
}

export default App
