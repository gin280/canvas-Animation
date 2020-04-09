import React, { useEffect } from 'react'
import Ball from './../../model/ball'

const AngularVelocity = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')

    var ball = new Ball()
    ball.x = canvas.width / 4
    ball.y = canvas.height / 4

    var angles = 30
    var speed = 1

    const drawFrame = () => {
      window.requestAnimationFrame(drawFrame, canvas)
      context.clearRect(0, 0, canvas.width, canvas.height)

      var vx = Math.cos((angles * Math.PI) / 180) * speed
      var vy = Math.sin((angles * Math.PI) / 180) * speed

      ball.x += vx
      ball.y += vy
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

export default AngularVelocity
