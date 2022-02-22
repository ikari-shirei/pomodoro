import { HistoryRounded } from '@material-ui/icons'
import { React, useState } from 'react'
import './Info.scss'

function Info({ currentSession, sessionLength, breakLength, minutes }) {
  const [status, setStatus] = useState(false)

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

  const changeStatus = () => {
    setStatus((prev) => !prev)
  }

  return (
    <div className="Info">
      <h2 onClick={changeStatus}>Info</h2>

      <ul className={!status ? 'hide-ul' : 'show-ul'}>
        <li>
          <div>Session</div>
          <div>
            <span>{currentSession.session}</span>
          </div>
        </li>
        <li>
          <div>Break</div>
          <div>
            <span>{currentSession.break}</span>
          </div>
        </li>
        <li>
          <div>Session Time</div>
          <div>
            <span>{sessionLength}</span> minutes
          </div>
        </li>
        <li>
          <div>Break Time</div>
          <div>
            <span>{breakLength}</span> minutes
          </div>
        </li>
        <li>
          <div>Minutes Passed</div>
          <div>
            <span>{calculateTotalMin()}</span> minutes
          </div>
        </li>
        <li>
          <div>Time Passed</div>
          <div>
            <span>{calculateTotal()}</span> hours
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Info
