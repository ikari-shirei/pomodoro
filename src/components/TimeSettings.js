import React from 'react'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import './TimeSettings.scss'

function TimeSettings() {
  return (
    <div className="TimeSettings">
      <div id="break-label">
        <button id="break-increment">
          <ArrowUpward className="arrow-icon" />
        </button>

        <div className="label-input">
          <label for="break-length">Break</label>
          <input type="text" id="break-length" name="break-length" value="5" />
        </div>

        <button id="break-decrement">
          <ArrowDownward className="arrow-icon" />
        </button>
      </div>
      <div id="session-label">
        <button id="session-increment">
          <ArrowUpward className="arrow-icon" />
        </button>

        <div className="label-input">
          <label for="session-length">Session</label>
          <input
            type="text"
            id="session-length"
            name="session-length"
            value="25"
          />
        </div>

        <button id="session-decrement">
          <ArrowDownward className="arrow-icon" />
        </button>
      </div>
    </div>
  )
}

export default TimeSettings
