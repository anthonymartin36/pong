import { useState, useEffect } from 'react'
import { KeyboardEvent } from 'react'

function PaddleL() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    function handleKeyPress(evt: KeyboardEvent<any>) {
      //get current location
      //get event request (up/down)
      //set direction of div tag
      console.log(evt) //evt.code, evt.keyCode)
      if (evt.key === 's') {
        setPosition((p) => Math.min(p + 10, 440))
      }

      if (evt.key === 'w') {
        setPosition((p) => Math.max(p - 10, 0))
      }
    }

    document.body.addEventListener('keydown', handleKeyPress)

    return () => {
      document.body.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return <div style={{ top: `${position}px` }} className="PaddleL"></div>
}

export default PaddleL

//Bar on Screen

// on handle change - move up / down

// fooBar
