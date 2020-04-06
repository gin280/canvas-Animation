import React, { useEffect } from 'react'
import Ball from './../../model/ball'

const LinearVerticalMotion = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')

    var angle = 0,
      range = 50,
      xspeed = 1,
      yspeed = 0.05

    var ball = new Ball()

    const drawFrame = () => {
      window.requestAnimationFrame(drawFrame, canvas)
      context.clearRect(0, 0, canvas.width, canvas.height)
      ball.x += xspeed
      if (ball.x > canvas.width + ball.radius) {
        ball.x = -ball.radius
      }
      ball.y = canvas.height / 2 + Math.sin(angle) * range
    // angle += 0.05; //加上就变成wave运动
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

export default LinearVerticalMotion
