import React from 'react'
import './Clock.scss'

function Clock({ clockTime, timerStarted, paused }) {
  return (
    <div className="Clock">
      <div
        className={
          timerStarted && !paused
            ? 'timer-started'
            : timerStarted && paused
            ? 'paused'
            : ''
        }
      >
        <h1 id="time-left">{clockTime}</h1>
      </div>
    </div>
  )
}

export default Clock
