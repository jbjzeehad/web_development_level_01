import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>React Core Concepts Recap</h3>
      <ol>
        <li>Components </li>
        <li>JSX </li>
        <li>Props</li>
        <li>Event handleer</li>
        <li>State</li>
        <li>Load Data</li>
      </ol>
      <hr />
      <Posts></Posts>
    </>
  )
}

export default App
