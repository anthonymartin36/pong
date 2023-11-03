import { useState, useEffect } from 'react'
import { KeyboardEvent } from 'react'

function PaddleR() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    function handleKeyPress(evt: KeyboardEvent<any>) {
      //get current location
      //get event request (up/down)
      //set direction of div tag
      console.log(evt.key, evt.code, evt.keyCode)
      if (evt.key === 'ArrowDown') {
        setPosition((p) => Math.min(p + 10, 440))
      }

      if (evt.key === 'ArrowUp') {
        setPosition((p) => Math.max(p - 10, 0))
      }
    }

    document.body.addEventListener('keydown', handleKeyPress)

    return () => {
      document.body.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return <div style={{ top: `${position}px` }} className="PaddleR"></div>
}

export default PaddleR
