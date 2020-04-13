import React, { useEffect } from 'react'
import Ball from './../../model/ball'
import { captureMouse, containsPoint } from './../../utils'

const MouseEvent = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas')
    var log = document.getElementById('txt')

    var context = canvas.getContext('2d')
    var mouse = captureMouse(canvas)

    var ball = new Ball(40, 'pink')
    ball.x = canvas.width / 2
    ball.y = canvas.height / 2
    ball.draw(context)

    const state = wrd => {
      if (containsPoint(ball.getBounds(), mouse.x, mouse.y)) {
        log.value = 'in ball : ' + wrd
      } else {
        log.value = 'canvas : ' + wrd
      }
    }

    canvas.addEventListener(
      'mousedown',
      function(event) {
        state('mousedown')

        canvas.addEventListener(
          'mouseup',
          function(event) {
            state('mouseup')
          },
          false,
        )
        canvas.addEventListener(
          'mousemove',
          function(event) {
            state('mousemove')
          },
          false,
        )
      },
      false,
    )
  }, [])

  return (
    <div>
      <canvas
        id="canvas"
        width="500"
        height="500"
        style={{ background: '#000' }}
      >
        your browser not support canvas!
      </canvas>
      <textarea name="textarea" id="txt" cols="30" rows="10"></textarea>
    </div>
  )
}

export default MouseEvent
