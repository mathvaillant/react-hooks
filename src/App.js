import './App.css'
import React from 'react'
import FunctionContextComponent from './FunctionContextComponent'
import { ThemeProvider } from './ThemeContext'

export default function App() {
  return (
    // ThemeProvider handles all the login and pushes to all the children down
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  )
}
