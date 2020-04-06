import React, { useEffect } from 'react'
import Ball from './../../model/ball'

const WaveWithTwoAngles = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')

    var ball = new Ball()

    var angleX = 0,
      angleY = 0,
      range = 80,
      xspeed = 0.05,
      yspeed = 0.2

    ball.x = canvas.width / 2
    ball.y = canvas.height / 2

    const drawFrame = () => {
      window.requestAnimationFrame(drawFrame, canvas)
      context.clearRect(0, 0, canvas.width, canvas.height)
      ball.x = canvas.width / 2 + Math.sin(angleX) * range
      ball.y = canvas.height / 2 + Math.cos(angleY) * range
      angleX += xspeed
      angleY += yspeed
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

export default WaveWithTwoAngles
