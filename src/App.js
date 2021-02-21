import './App.css'
import React, { useState, useEffect } from 'react'

function App() {
  /* USESTATE HOOK*/
  // Holds state like in this.state from constructor in classes
  const [respositories, setRepositories] = useState([])

  /* USEEFFECT HOOK*/
  // Watches component lifecycle methods
  useEffect(async () => {
    const response = await fetch(
      'https://api.github.com/users/mathvaillant/repos'
    )
    const data = await response.json()
    setRepositories(data)
  }, [])

  function handleAddRepository() {
    setRepositories([
      ...respositories,
      { id: Math.floor(Math.random()), name: 'new repo' },
    ])
  }

  function handleFavorite(id) {
    const newRepositories = respositories.map((repo) => {
      return repo.id === id ? { ...repo, favorite: true } : repo
    })
    setRepositories(newRepositories)
  }

  return (
    <>
      <ul>
        {respositories.map((repo) => (
          <li key={repo.id}>
            {repo.favorite && <span>(FAVORITE)</span>} | {repo.name} |{' '}
            {repo.language}
            <button onClick={() => handleFavorite(repo.id)}>Favorite</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddRepository}>Add repositories</button>
    </>
  )
}

export default App
