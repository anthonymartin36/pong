import PaddleL from './PaddleL'
import PaddleR from './PaddleR'
import Ball from './Ball'

function Board() {
  //console.log('Hello World')

  return (
    <div id="Board" className="GameBoard">
      <div className="goalL"></div>
      <PaddleL />

      {/* <Ball /> */}

      <PaddleR />
      <div className="goalR"></div>
    </div>
  )
}

export default Board
