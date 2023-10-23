import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'

function App() {

  function handleClick() {
    alert('button clicked');
  }
  const handleClick2 = () => {
    alert('button 2 clicked');
  }
  const aaddToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>Vite + React</h3>
      <Counter></Counter>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('third clicked') }}>Click 3</button>
      <button onClick={() => { aaddToFive(3) }}>button 4</button>
    </>
  )
}

export default App
