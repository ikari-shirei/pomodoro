import { React, useState, useEffect } from 'react'
import './App.scss'
import TimeSettings from './components/TimeSettings'
import Clock from './components/Clock'
import Buttons from './components/Buttons'

function App() {
  const [currentSession, setCurrentSession] = useState({ session: 1, break: 1 })

  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)

  const [minutes, setMinutes] = useState(sessionLength)
  const [seconds, setSeconds] = useState(0)

  const [timerStarted, setTimerStarted] = useState(false)
  const [paused, setPaused] = useState(false)

  const [clockTime, setClockTime] = useState(
    `${minutes < 10 ? `0` + minutes : minutes}:${
      seconds < 10 ? `0` + seconds : seconds
    }`
  )

  // Update clock seconds on sessionLength change
  useEffect(() => {
    setMinutes(sessionLength)
  }, [sessionLength])

  // Update clock seconds on reset
  useEffect(() => {
    if (!timerStarted) {
      setMinutes(sessionLength)
    }
  }, [timerStarted])

  // Update clock view
  useEffect(() => {
    setClockTime(
      `${minutes < 10 ? `0` + minutes : minutes}:${
        seconds < 10 ? `0` + seconds : seconds
      }`
    )
  }, [minutes, seconds])

  useEffect(() => {
    const newInterval = setInterval(() => {
      clearInterval(newInterval)

      if (!timerStarted || paused) {
        clearInterval(newInterval)
        return
      }

      // Countdown functionality
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59)
          setMinutes(minutes - 1)
        }
      } else {
        setSeconds(seconds - 1)
      }

      console.log(minutes, seconds)
      console.log(currentSession)

      // Time out
      if (seconds === 0 && minutes === 0) {
        alert('owari')

        // Change session to break
        if (currentSession.session === currentSession.break) {
          setCurrentSession({
            ...currentSession,
            session: currentSession.session + 1,
          })

          setMinutes(breakLength)
          setSeconds(0)
        }
        // Change break to session
        else {
          setCurrentSession({
            ...currentSession,
            break: currentSession.break + 1,
          })

          setMinutes(sessionLength)
          setSeconds(0)
        }
      }
    }, 1000)

    return () => clearInterval(newInterval)
  })

  const startStopButtonHandle = (e) => {
    if (!timerStarted) {
      setTimerStarted(true)
    }

    if (timerStarted && !paused) {
      e.target.textContent = 'Start'
      setPaused(true)
      console.log(paused, 'paused')
    }

    if (timerStarted && paused) {
      e.target.textContent = 'Pause'
      setPaused(false)
      console.log(paused, 'paused')
    }
  }

  const resetButtonHandle = () => {
    setTimerStarted(false)
    setPaused(false)
    setClockTime('25:00')
    setSessionLength(25)
    setBreakLength(5)
    setCurrentSession({ session: 1, break: 1 })
    setMinutes(sessionLength)
    setSeconds(0)
  }

  return (
    <div className="App">
      <h1 id="timer-label" className="total-sb">
        {currentSession.session === currentSession.break
          ? 'Session '
          : 'Break '}
        {currentSession.session === currentSession.break
          ? currentSession.session
          : currentSession.break}
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
