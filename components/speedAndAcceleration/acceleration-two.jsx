import React, { useEffect } from 'react'
import Ball from './../../model/ball'

const AccelerationTwo = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')

    var ball = new Ball()
    ball.x = canvas.width / 2
    ball.y = canvas.height / 2

    var vx = 0,
      vy = 0,
      ax = 0,
      ay = 0

    document.addEventListener(
      'keydown',
      function(event) {
        console.info(event, 'jojo')
        switch (event.keyCode) {
          case 37:
            ax = -0.1
            break
          case 39:
            ax = 0.1
            break
          case 38:
            ay = -0.1
            break
          case 40:
            ay = 0.1
            break
        }
      },
      false,
    )

    document.addEventListener(
      'keyup',
      function(event) {
        ax = 0
        ay = 0
        vy = 0
        vx = 0
        console.log(vy, vx)
      },
      false,
    )

    const drawFrame = () => {
      window.requestAnimationFrame(drawFrame, canvas)
      context.clearRect(0, 0, canvas.width, canvas.height)

      vx += ax
      vy += ay

      ball.x += vx
      ball.y += vy

      if (ball.x > canvas.width - ball.radius) {
        ball.x = canvas.width - ball.radius
      } else if (ball.x < ball.radius) {
        ball.x = ball.radius
      }

      if (ball.y > canvas.height - ball.radius) {
        ball.y = canvas.height - ball.radius
      } else if (ball.y < ball.radius) {
        ball.y = ball.radius
      }

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

export default AccelerationTwo
