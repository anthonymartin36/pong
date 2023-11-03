import PaddleL from './PaddleL'
import PaddleR from './PaddleR'
import Ball from './Ball'
import { useState } from 'react'

function Board() {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`

  const [color, setColor] = useState(getRandomColor)

  const handleClick = (event: UIEvent) => [setColor(getRandomColor)]
  //console.log('Hello World')
  return (
    <div
      id="Board"
      className="GameBoard"
      style={{ color }}
      onClick={handleClick}
    >
      <div className="goalL"></div>
      <PaddleL />

      <Ball />

      <PaddleR />
      <div className="goalR"></div>
    </div>
  )
}

export default Board
