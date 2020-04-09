import React, { useEffect } from 'react'
import Ball from './../../model/ball'

const GravityAsAcceleration = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')

    var ball = new Ball(20, 'red')
    ball.x = canvas.width / 2
    ball.y = canvas.height / 2 - 200

    var vy = 0.1,
        ay = 0.01,
        gravity = 0.2


    const drawFrame = () => {
        window.requestAnimationFrame(drawFrame, canvas)
        context.clearRect(0,0,canvas.width,canvas.height)

        vy += gravity
        ball.y += vy

        
    }

  }, [])

  return (
    <canvas id="canvas" width="500" height="500" style={{ background: '#000' }}>
      your browser not support canvas!
    </canvas>
  )
}

export default GravityAsAcceleration
