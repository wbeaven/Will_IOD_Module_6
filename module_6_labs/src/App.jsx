import { useState } from 'react'
import './App.css'
import Greeting from '../components/greeting'

function App() {
  return (
    <>
      <Greeting name="William">
        <div>This is my personal greeting message.</div>
      </Greeting>
      <Greeting name="Paige"/>
      <Greeting/>
    </>
  )
}

export default App
