import PaddleL from './PaddleL'
import PaddleR from './PaddleR'
import Ball from './Ball'

function Board() {
  //console.log('Hello World')

  return (
    <div id="Board" className="GameBoard">
      <PaddleL />

      {/* <Ball /> */}

      <PaddleR />
    </div>
  )
}

export default Board
