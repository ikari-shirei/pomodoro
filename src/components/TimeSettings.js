import React from 'react'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import './TimeSettings.scss'

function TimeSettings({
  breakLength,
  setBreakLength,
  sessionLength,
  setSessionLength,
}) {
  const breakLengthIncrease = () => {
    setBreakLength(breakLength + 1)
  }

  const breakLengthDecrease = () => {
    if (breakLength !== 0) {
      setBreakLength(breakLength - 1)
    }
  }

  const breakInputChange = (e) => {
    const value = Number(e.target.value)

    setBreakLength(value)
  }

  const sessionLengthIncrease = () => {
    setSessionLength(sessionLength + 1)
  }

  const sessionLengthDecrease = () => {
    if (sessionLength !== 0) {
      setSessionLength(sessionLength - 1)
    }
  }

  const sessionInputChange = (e) => {
    const value = Number(e.target.value)

    setSessionLength(value)
  }

  return (
    <div className="TimeSettings">
      <div id="break-label">
        <button id="break-increment" onClick={breakLengthIncrease}>
          <ArrowUpward className="arrow-icon" />
        </button>

        <div className="label-input">
          <label htmlFor="break-length">Break</label>
          <input
            type="text"
            id="break-length"
            name="break-length"
            value={breakLength}
            onChange={breakInputChange}
          />
        </div>

        <button id="break-decrement" onClick={breakLengthDecrease}>
          <ArrowDownward className="arrow-icon" />
        </button>
      </div>
      <div id="session-label">
        <button id="session-increment">
          <ArrowUpward className="arrow-icon" onClick={sessionLengthIncrease} />
        </button>

        <div className="label-input">
          <label htmlFor="session-length">Session</label>
          <input
            type="text"
            id="session-length"
            name="session-length"
            value={sessionLength}
            onChange={sessionInputChange}
          />
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
