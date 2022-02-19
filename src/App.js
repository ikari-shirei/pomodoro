import { React, useState, useEffect } from 'react'
import './App.scss'
import TimeSettings from './components/TimeSettings'
import Clock from './components/Clock'
import Buttons from './components/Buttons'

function App() {
  const [currentSession, setCurrentSession] = useState({ session: 1, break: 1 })

  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [seconds, setSeconds] = useState(0)

  const [timerStarted, setTimerStarted] = useState(false)
  const [paused, setPaused] = useState(false)

  const [clockTime, setClockTime] = useState(sessionLength)

  const now = () => new Date().getTime()

  const countdown = () => {}

  const startStopButtonHandle = (e) => {
    if (!timerStarted) {
      setTimerStarted(true)
    }

    if (timerStarted && !paused) {
      e.target.textContent = 'Start'
      setPaused(true)
    }

    if (timerStarted && paused) {
      e.target.textContent = 'Pause'
      setPaused(false)
    }
  }

  const resetButtonHandle = () => {
    setTimerStarted(false)
    setPaused(false)
    setClockTime('25:00')
    setSeconds('0')
    setSessionLength(25)
    setBreakLength(5)
    setCurrentSession({ session: 1, break: 1 })
  }

  return (
    <div className="App">
      <h1 id="timer-label" className="total-sb">
        Session 1
      </h1>
      <Clock clockTime={clockTime} />
      {timerStarted ? (
        ''
      ) : (
        <TimeSettings
          breakLength={breakLength}
          setBreakLength={setBreakLength}
          sessionLength={sessionLength}
          setSessionLength={setSessionLength}
        />
      )}

      <Buttons
        startStopButtonHandle={startStopButtonHandle}
        resetButtonHandle={resetButtonHandle}
        timerStarted={timerStarted}
        paused={paused}
        setPaused={setPaused}
      />
    </div>
  )
}

export default App
