import { useState } from 'react'

export default function Ball() {
  const boardWidth = 600
  const boardHeight = 500

  const maxVelocityY = 3

  const [velocityX, setVelocityX] = useState(2)
  const [velocityY, setVelocityY] = useState(2)

  const [x, setX] = useState(boardWidth / 2 - 10)
  const [y, setY] = useState(boardHeight / 2 - 10)

  requestAnimationFrame(Tick)
  function Tick() {
    requestAnimationFrame(Tick)

    if (x >= boardWidth - 5 && velocityX > 0) {
      setVelocityX(-velocityX * 1.1)
      SetRandomYVelocity()
    }

    if (x <= 5 && velocityX < 0) {
      setVelocityX(-velocityX * 1.1)
      SetRandomYVelocity()
    }

    if (y >= boardHeight - 5 && velocityY > 0) {
      setVelocityY(-velocityY)
    }

    if (y <= 5 && velocityY < 0) {
      setVelocityY(-velocityY)
    }

    setX(x + velocityX)
    setY(y + velocityY)
  }

  function SetRandomYVelocity() {
    setVelocityY(Math.floor(Math.random() * maxVelocityY * 2 - maxVelocityY))
  }

  return (
    <div
      className="ball"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    ></div>
  )
}
