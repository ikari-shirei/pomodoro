import { React, useState, useEffect } from 'react'
import './App.scss'
import TimeSettings from './components/TimeSettings'
import Clock from './components/Clock'
import Buttons from './components/Buttons'
import beep from './utils/sound.mp3'
import useSound from 'use-sound'

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

  const [play, { stop }] = useSound(beep)

  // Update clock seconds and minutes on sessionLength change
  useEffect(() => {
    setMinutes(sessionLength)
  }, [sessionLength])

  // Update clock seconds and minutes on reset
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
    const newInterval = setTimeout(() => {
      clearTimeout(newInterval)

      if (!timerStarted || paused) {
        clearTimeout(newInterval)
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

      // Time out
      if (seconds === 0 && minutes === 0) {
        play()

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

    return () => clearTimeout(newInterval)
  })

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
    if (timerStarted) {
      setTimerStarted(false)
      setPaused(false)
      setClockTime('25:00')
      setSessionLength(25)
      setBreakLength(5)
      setCurrentSession({ session: 1, break: 1 })
      setMinutes(sessionLength)
      setSeconds(0)

      stop()
    }
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
      <Clock
        clockTime={clockTime}
        timerStarted={timerStarted}
        paused={paused}
      />

      {!timerStarted && (
        <TimeSettings
          breakLength={breakLength}
          setBreakLength={setBreakLength}
          sessionLength={sessionLength}
          setSessionLength={setSessionLength}
          timerStarted={timerStarted}
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
