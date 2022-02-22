import React from 'react'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import './TimeSettings.scss'

function TimeSettings({
  breakLength,
  setBreakLength,
  sessionLength,
  setSessionLength,
  timerStarted,
  paused,
  setSeconds,
  currentSession,
}) {
  const resetSec = () => {
    if (paused) {
      setSeconds(0)
    }
  }

  /* Break */

  const breakLengthIncrease = () => {
    if (breakLength < 60) {
      if (!timerStarted || (timerStarted && paused)) {
        setBreakLength((prev) => prev + 1)

        if (currentSession.session !== currentSession.break) {
          resetSec()
        }
      }
    }
  }

  const breakLengthDecrease = () => {
    if (breakLength > 1) {
      if (!timerStarted || (timerStarted && paused)) {
        setBreakLength((prev) => prev - 1)

        if (currentSession.session !== currentSession.break) {
          resetSec()
        }
      }
    }
  }

  /* Session */

  const sessionLengthIncrease = () => {
    if (sessionLength < 60) {
      if (!timerStarted || (timerStarted && paused)) {
        setSessionLength((prev) => prev + 1)

        if (currentSession.session === currentSession.break) {
          resetSec()
        }
      }
    }
  }

  const sessionLengthDecrease = () => {
    if (sessionLength > 1) {
      if (!timerStarted || (timerStarted && paused)) {
        setSessionLength((prev) => prev - 1)

        if (currentSession.session === currentSession.break) {
          resetSec()
        }
      }
    }
  }

  return (
    <div className="TimeSettings">
      <div id="break-label" className={timerStarted ? 'timer-started' : ''}>
        <button id="break-increment" onClick={breakLengthIncrease}>
          <ArrowUpward className="arrow-icon" />
        </button>

        <div className="label-input">
          <label htmlFor="break-length">Break</label>
          <div className="value" id="break-length" name="break-length">
            {breakLength}
          </div>
        </div>

        <button id="break-decrement" onClick={breakLengthDecrease}>
          <ArrowDownward className="arrow-icon" />
        </button>
      </div>
      <div id="session-label" className={timerStarted ? 'timer-started' : ''}>
        <button id="session-increment">
          <ArrowUpward className="arrow-icon" onClick={sessionLengthIncrease} />
        </button>

        <div className="label-input">
          <label htmlFor="session-length">Session</label>
          <div className="value" id="session-length" name="session-length">
            {sessionLength}
          </div>
        </div>

        <button id="session-decrement">
          <ArrowDownward
            className="arrow-icon"
            onClick={sessionLengthDecrease}
          />
        </button>
      </div>
    </div>
  )
}

export default TimeSettings
