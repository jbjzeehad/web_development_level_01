import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
import Book from './Book'

function App() {
  const actors = ['Sakib', 'Raj', 'Jasim', 'Rubel'];
  const singers = [
    { id: 1, name: 'Mahfuz', age: 38 },
    { id: 2, name: 'Eva', age: 56 },
    { id: 3, name: 'Shuvo Dev', age: 58 },
    { id: 4, name: 'Pritom', age: 45 }];
  const books = [
    { id: 1, name: 'Physics', price: 1600 },
    { id: 2, name: 'Chemistry', price: 1400 },
    { id: 3, name: 'Math', price: 1200 },
    { id: 4, name: 'Biology', price: 1300 },
  ]
  return (
    <>
      <h3>Vite + React</h3>
      <Book books={books}></Book>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* {
      <Todo task='Learn React' isDone={true}></Todo>
      <Todo task='Explore Core concept' isDone={false}></Todo>
      <Todo task='Try JSX' isDone={true}></Todo>
      }
      {
      
      <Student grade='10' score='100'></Student>
      <Student></Student>
      <Student></Student>
      <Developer></Developer>
      <Device name='laptop' price='55'></Device> } */}
    </>
  )
}

function Device(props) {
  // console.log(props);
  return <h2>This Device: {props.name} price: {props.price}</h2>
}

const { grade, score } = { grade: '7', score: '99' };

function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding:</p>
    </div>
  )
}

export default App
