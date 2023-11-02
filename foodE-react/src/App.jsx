import { useState } from 'react'
import { BASE_URL } from './globals'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'
import { ErrorBoundary } from 'react-error-boundary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="App-header">
        <Header />
      </div>

      <ErrorBoundary fallback={
        <div className='error'>
          <h2>That didn't work; please try again.</h2>
          <button className='backbutton' onClick={() => window.location.reload()}>Try Again</button>
        </div>}>
        <div className="App-main">
          <Main />
        </div>
      </ErrorBoundary >
    </div>
  )
}

export default App
