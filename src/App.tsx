// import { useState } from 'react'
import reactLogo from './assets/fenton_headshot.png'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <>
          <div>
              <a href="https://vitejs.dev" target="_blank">
              </a>
              <a href="https://cat-bounce.com/" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo"/>
              </a>
          </div>
          <h1>Fenton Krupp</h1>
          <p className="read-the-docs">
              web designer, writer, and IT professional
          </p>
      </>
  )
}

export default App
