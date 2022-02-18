import { React } from 'react'
import './App.scss'
import TimeSettings from './components/TimeSettings'
import Clock from './components/Clock'
import Buttons from './components/Buttons'

function App() {
  return (
    <div className="App">
      <h1 id="timer-label" className="total-sb">
        Session 1
      </h1>
      <Clock />
      <TimeSettings />
      <Buttons />
    </div>
  )
}

export default App
