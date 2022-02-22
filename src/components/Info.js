import React from 'react'
import './Info.scss'

function Info({ currentSession, sessionLength, breakLength, minutes }) {
  const calculateTotalMin = () => {
    const session = currentSession.session
    const brk = currentSession.break

    const status =
      currentSession.session === currentSession.break ? 'session' : 'break'

    const sessionPastMinutes = (session - 1) * sessionLength
    const breakPastMinutes = (brk - 1) * breakLength
    const totalPastMinutes = sessionPastMinutes + breakPastMinutes

    const sessionMinutes =
      status === 'session' ? sessionLength - minutes - 1 : 0
    const breakMinutes = status === 'break' ? breakLength - minutes - 1 : 0
    const totalMinutes = sessionMinutes + breakMinutes

    const allMinutes = totalPastMinutes + totalMinutes

    return allMinutes === -1 ? 0 : allMinutes
  }

  const calculateTotal = () => {
    const min = calculateTotalMin()

    if (min < 60) {
      return `00:${min < 10 ? '0' + min : min}`
    } else {
      const newMin = min % 60
      const hours = Math.floor(min / 60)

      const hoursShow = hours < 10 ? '0' + hours : hours
      const newMinShow = newMin < 10 ? '0' + newMin : newMin

      return hoursShow + ':' + newMinShow
    }
  }

  return (
    <div className="Info">
      <h2>Info</h2>
      <ul>
        <li>Session: {currentSession.session}</li>
        <li>Break: {currentSession.break}</li>
        <li>Session Time: {sessionLength} minutes</li>
        <li>Break Time: {breakLength} minutes</li>
        <li>Total Minutes Passed: {calculateTotalMin()} minutes</li>
        <li>Total Time Passed: {calculateTotal()} hours</li>
      </ul>
    </div>
  )
}

export default Info
