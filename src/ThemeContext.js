// useContext is for passing down props  all the way down into any of the children of the provider
// It's a global app level state avaiable to all children

import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

// Custom hooks to use the context
export function useTheme() {
  return useContext(ThemeContext)
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}

// ThemeProvider handles ....
export function ThemeProvider({ children }) {
  // ...creating the state...
  const [darkTheme, setDarkTheme] = useState(true)

  // ...updating the state...
  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme)
  }

  return (
    // ... and persists both of the values down into the children
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}
