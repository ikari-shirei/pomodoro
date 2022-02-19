import React from 'react'
import './Buttons.scss'

function Buttons({
  startStopButtonHandle,
  resetButtonHandle,
  timerStarted,
  paused,
  setPaused,
}) {
  return (
    <div className="Buttons">
      <button id="start_stop" onClick={startStopButtonHandle}>
        {!timerStarted && !paused ? 'Start' : 'Pause'}
      </button>
      <button
        id="reset"
        className={timerStarted ? 'reset' : 'reset-disabled'}
        onClick={resetButtonHandle}
      >
        Reset Timer
      </button>
    </div>
  )
}

export default Buttons
