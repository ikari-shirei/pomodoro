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
  /* Break */

  const breakLengthIncrease = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1)
    }
  }

  const breakLengthDecrease = () => {
    if (breakLength !== 0 && breakLength > 0) {
      setBreakLength(breakLength - 1)
    }
  }

  const breakInputChange = (e) => {
    const value = Number(e.target.value)

    if (value > 60) {
      setBreakLength(5)
      alert('Break length can`t be greater than 60.')
      e.preventDefault()
      return false
    }

    setBreakLength(value)
  }

  const checkBreakInput = (e) => {
    const key = e.key
    const numberReg = /^\d+$/

    if (!numberReg.test(Number(key)) && key !== 'Backspace') {
      e.preventDefault()
      return false
    }
  }

  /* Session */

  const sessionLengthIncrease = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1)
    }
  }

  const sessionLengthDecrease = () => {
    if (sessionLength !== 0 && sessionLength > 0) {
      setSessionLength(sessionLength - 1)
    }
  }

  const sessionInputChange = (e) => {
    const value = Number(e.target.value)

    if (value > 60) {
      setSessionLength(60)
      alert('Sessions length can`t be greater than 60.')
      e.preventDefault()
      return false
    }

    setSessionLength(value)
  }

  const checkSessionInput = (e) => {
    const key = e.key
    const numberReg = /^\d+$/

    if (!numberReg.test(Number(key)) && key !== 'Backspace') {
      e.preventDefault()
      return false
    }
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
            onKeyDown={checkBreakInput}
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
            onKeyDown={checkSessionInput}
            max={60}
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
