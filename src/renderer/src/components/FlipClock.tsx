import { useEffect, useState } from 'react'
import FlipCard from './FlipCard'
import './FlipClock.scss'

export default function FlipClock(): React.JSX.Element {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = time.getHours().toString().padStart(2, '0')
  const minutes = time.getMinutes().toString().padStart(2, '0')
  const seconds = time.getSeconds().toString().padStart(2, '0')

  return (
    <div className="flip-clock">
      <div className="flip-clock-group">
        <FlipCard value={hours[0]} />
        <FlipCard value={hours[1]} />
      </div>
      <div className="flip-clock-separator">:</div>
      <div className="flip-clock-group">
        <FlipCard value={minutes[0]} />
        <FlipCard value={minutes[1]} />
      </div>
      <div className="flip-clock-separator">:</div>
      <div className="flip-clock-group">
        <FlipCard value={seconds[0]} />
        <FlipCard value={seconds[1]} />
      </div>
    </div>
  )
}
