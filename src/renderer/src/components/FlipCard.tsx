import { useEffect, useState } from 'react'
import './FlipCard.scss'

interface FlipCardProps {
  value: string
}

export default function FlipCard({ value }: FlipCardProps): React.JSX.Element {
  const [currentValue, setCurrentValue] = useState(value)
  const [nextValue, setNextValue] = useState(value)
  const [isFlipping, setIsFlipping] = useState(false)

  useEffect(() => {
    if (value !== currentValue) {
      setNextValue(value)
      setIsFlipping(true)

      const timer = setTimeout(() => {
        setCurrentValue(value)
        setIsFlipping(false)
      }, 600)

      return () => clearTimeout(timer)
    }
  }, [value, currentValue])

  return (
    <div className="flip-card">
      <div className={`flip-card-inner ${isFlipping ? 'flipping' : ''}`}>
        <div className="flip-card-front">
          <span>{currentValue}</span>
        </div>
        <div className="flip-card-back">
          <span>{nextValue}</span>
        </div>
      </div>
    </div>
  )
}
