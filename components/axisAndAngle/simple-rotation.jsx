import React, { useEffect } from 'react'
import Ball from './../../model/ball'

const SimpleRotation = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d'),
      ball = new Ball(),
      vr = 0.05,
      angle = 0,
      radius = 150,
      centerX = canvas.width / 2,
      centerY = canvas.height / 2

    const drawFrame = () => {
      window.requestAnimationFrame(drawFrame, canvas)
      context.clearRect(0, 0, canvas.width, canvas.height)

      ball.x = centerX + Math.cos(angle) * radius
      ball.y = centerY + Math.sin(angle) * radius
      angle += vr

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

export default SimpleRotation
