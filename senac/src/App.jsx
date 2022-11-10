import { useState } from 'react'

import './App.css'
import RoutesApp from './assets/Routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <RoutesApp/>
    </div>
  )
}

export default App
