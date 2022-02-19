import React from 'react'
import './Clock.scss'

function Clock({ clockTime }) {
  return (
    <div className="Clock">
      <div>
        <h1 id="time-left">{clockTime}</h1>
      </div>
    </div>
  )
}

export default Clock
