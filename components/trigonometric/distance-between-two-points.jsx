import React, { useEffect } from 'react'
import Ball from './../../model/ball'

const DistanceBetweenTwoPoints = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas')
    var log = document.getElementById('log')

    var context = canvas.getContext('2d')

    //create a black square ,assign random position
    var Rect1 = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    }

    //create a red square ,assgin random position
    var Rect2 = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    }

    const drawSquare = (a, b) => {
      context.save()
      context.fillStyle = '#49f'
      context.fillRect(a - 2, b - 2, 4, 4)
      context.restore()
    }

    drawSquare(Rect1.x, Rect1.y)
    drawSquare(Rect2.x, Rect2.y)

    //calculate the distance between two points
    var dx = Rect1.x - Rect2.x
    var dy = Rect1.y - Rect2.y
    var dis = Math.sqrt(dx * dx + dy * dy)

    drawLine()
    log.style.left = (Rect1.x + Rect2.x) / 2 + 'px'
    log.style.top = (Rect1.y + Rect2.y) / 2 + 'px'

    log.innerHTML = 'distance:' + dis

    function drawLine() {
      context.save()
      context.strokeStyle = '#000000'
      context.moveTo(Rect1.x, Rect1.y)
      context.lineTo(Rect2.x, Rect2.y)
      context.stroke()
      context.restore()
    }
  }, [])

  return (
    <div>
      <canvas id="canvas" width="500" height="500" >
        your browser not support canvas!
      </canvas>
      <p style={{position: "absolute"}} id="log"></p>
    </div>
  )
}

export default DistanceBetweenTwoPoints
