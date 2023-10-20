import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
      <Device></Device>
    </>
  )
}

function Device() {
  return <h2>This Device:Laptop </h2>
}
function Person() {
  const age = 23;
  const money = 20;
  const person = { name: 'Sakib', age: 12 }
  return <h3>I am {person.name} with age: {age + money}</h3>
}
function Student() {
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Name:</p>
      <p>Age:</p>
    </div>
  )
}
function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return (
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding: </p>
    </div>
  )
}

export default App
