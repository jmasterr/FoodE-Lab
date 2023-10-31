import { useState } from 'react'
import { BASE_URL } from './globals'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <div className="App-header">
        <Header />
      </div>

      <div className="App-main">
        <Main />
      </div>
    </div>
  )
}

export default App
