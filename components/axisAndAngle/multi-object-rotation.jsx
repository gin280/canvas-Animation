import React, { useEffect } from 'react'
import Ball from './../../model/ball'
import { captureMouse } from './../../utils'

const MultiObjectRotation = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d'),
      mouse = captureMouse(canvas),
      balls = [],
      numBalls = 10,
      angle,
      centerX = canvas.width / 2,
      centerY = canvas.height / 2,
      cos,
      sin

    for (let ball, i = 0; i < numBalls; i++) {
      ball = new Ball(Math.random() * 30 + 10, 'pink')
      ball.x = Math.random() * canvas.width
      ball.y = Math.random() * canvas.height
      balls.push(ball)
    }
    console.log(balls)
    function move(ball) {
      var x1 = ball.x - centerX,
        y1 = ball.y - centerY,
        x2 = cos * x1 - sin * y1,
        y2 = cos * y1 + sin * x1
      ball.x = centerX + x2
      ball.y = centerY + y2
    }

    function draw(ball) {
      ball.draw(context)
    }
    const drawFrame = () => {
      window.requestAnimationFrame(drawFrame, canvas)
      context.clearRect(0, 0, canvas.width, canvas.height)

      angle = (mouse.x - centerX) * 0.0005
      cos = Math.cos(angle)
      sin = Math.sin(angle)
      balls.forEach(move)
      balls.forEach(draw)
    }

    drawFrame()
  }, [])

  return (
    <canvas id="canvas" width="500" height="500" style={{ background: '#000' }}>
      your browser not support canvas!
    </canvas>
  )
}

export default MultiObjectRotation
