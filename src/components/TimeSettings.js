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
}) {
  /* Break */

  const breakLengthIncrease = () => {
    if (breakLength < 60 && !timerStarted) {
      setBreakLength(breakLength + 1)
    }
  }

  const breakLengthDecrease = () => {
    if (breakLength > 1 && !timerStarted) {
      setBreakLength(breakLength - 1)
    }
  }

  /* Session */

  const sessionLengthIncrease = () => {
    if (sessionLength < 60 && !timerStarted) {
      setSessionLength(sessionLength + 1)
    }
  }

  const sessionLengthDecrease = () => {
    if (sessionLength > 1 && !timerStarted) {
      setSessionLength(sessionLength - 1)
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
