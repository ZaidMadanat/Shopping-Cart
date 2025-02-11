import { useState } from 'react'

//import nav bar to go to each different file
import NavBar from './components/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
    </>
  )
}

export default App
