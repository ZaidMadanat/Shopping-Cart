import { useState } from 'react'

//import nav bar to go to each different file
import NavBar from './components/Navigation'

// Using app.jsx as the home
import Home from './components/Home'

function App() {
  

  return (
    <>
      <NavBar />
      <Home />
    </>
  )
}

export default App
