import React, { useEffect } from 'react'
import Box from './../../model/box'
import { intersects } from './../../utils'

const Boxes = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d'),
      boxes = [],
      gravity = 0.02

    const createBox = () => {
      let color = 'pink'
      let box = new Box(Math.random() * 40 + 10, Math.random() * 40 + 10, color)
      box.x = Math.random() * canvas.width
      boxes.push(box)
      return box
    }
    const drawBox = box => {
      if (activeBox != box && intersects(activeBox, box)) {
        activeBox.y = box.y - activeBox.height
        activeBox = createBox()
      }
      box.draw(context)
    }
    let activeBox = createBox()
    window.addEventListener(
      'keydown',
      function(event) {
        switch (event.keyCode) {
          case 37:
            activeBox.x -= 5
            break
          case 39:
            activeBox.x += 5
            break
          case 40:
            gravity = 2
            break
        }
      },
      false,
    )
    window.addEventListener(
      'keyup',
      function(event) {
        gravity = 0.02
      },
      false,
    )

    const drawFrame = () => {
      window.requestAnimationFrame(drawFrame, canvas)
      context.clearRect(0, 0, canvas.width, canvas.height)

      activeBox.vy += gravity
      activeBox.y += activeBox.vy

      if (activeBox.y + activeBox.height > canvas.height) {
        activeBox.y = canvas.height - activeBox.height
        activeBox = createBox()
      }
      if (activeBox.x < 0) {
        activeBox.x = 0
      }
      if (activeBox.x + activeBox.width > canvas.width) {
        activeBox.x = canvas.width - activeBox.width
      }

      boxes.forEach(drawBox)
    }
    drawFrame()
  }, [])

  return (
    <canvas id="canvas" width="500" height="500" style={{ background: '#000' }}>
      your browser not support canvas!
    </canvas>
  )
}

export default Boxes
