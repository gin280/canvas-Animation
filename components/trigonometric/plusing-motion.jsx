import React, { useEffect } from 'react'
import Ball from './../../model/ball'

const PlusingMotion = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')

    var angle = 0,
      range = 0.5,
      speed = 0.05,
      centerScale = 1

    var ball = new Ball()

    ball.x = canvas.width / 2
    ball.y = canvas.height / 2

    const drawFrame = () => {
      window.requestAnimationFrame(drawFrame, canvas)
      context.clearRect(0, 0, canvas.width, canvas.height)

      ball.scaleX = ball.scaleY = centerScale + Math.sin(angle) * range
      angle += speed

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

export default PlusingMotion
