import React, { useEffect } from 'react'
import Ball from './../../model/ball'

const VelocityAxis = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')

    var ball = new Ball()
    ball.x = canvas.width / 4
    ball.y = canvas.height / 4

    var vx = 1,
      vy = 1

    const drawFrame = () => {
      window.requestAnimationFrame(drawFrame, canvas)
      context.clearRect(0, 0, canvas.width, canvas.height)

      ball.x += vx
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

export default VelocityAxis
