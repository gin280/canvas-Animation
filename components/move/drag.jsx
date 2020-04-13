import React, { useEffect } from 'react'
import Ball from './../../model/ball'
import { captureMouse, containsPoint } from './../../utils'

const Drag = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d'),
      mouse = captureMouse(canvas),
      ball = new Ball(20, 'purple')

    ball.x = canvas.width / 2
    ball.y = canvas.height / 2

    var w = 0,
      h = 0

    canvas.addEventListener(
      'mousedown',
      function(event) {
        if (containsPoint(ball.getBounds(), mouse.x, mouse.y)) {
          w = mouse.x - ball.x
          h = mouse.y - ball.y
          canvas.addEventListener('mouseup', onMouseUp, false)
          canvas.addEventListener('mousemove', onMouseMove, false)
        }
      },
      false,
    )
    function onMouseUp(event) {
      canvas.removeEventListener('mouseup', onMouseUp, false)
      canvas.removeEventListener('mousemove', onMouseMove, false)
    }

    function onMouseMove(event) {
      ball.x = mouse.x - w
      ball.y = mouse.y - h
    }
    const drawFrame = () => {
      window.requestAnimationFrame(drawFrame, canvas)
      context.clearRect(0, 0, canvas.width, canvas.height)
      ball.draw(context)
    }
    drawFrame()
  }, [])

  return (
    <canvas id="canvas" width="500" height="500" style={{ background: '#000' }}>
      your browser not support canvas!
    </canvas>
  )
}

export default Drag
