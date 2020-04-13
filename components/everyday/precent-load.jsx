import React, { useEffect } from 'react'
import Ball from './../../model/ball'

const PrecentLoad = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d'),
      centerX = canvas.width / 2,
      centerY = canvas.height / 2,
      rad = (Math.PI * 2) / 100,
      speed = 0.1

    const text = n => {
      context.save()
      context.strokeStyle = '#49f'
      context.font = '40px Arial'
      context.strokeText(n.toFixed(0) + '%', centerX - 25, centerY + 10)
      context.stroke()
      context.restore()
    }

    const blueCircle = n => {
      context.save()
      context.beginPath()
      context.strokeStyle = '#49f'
      context.lineWidth = 5
      context.arc(
        centerX,
        centerY,
        100,
        -Math.PI / 2,
        -Math.PI / 2 + n * rad,
        false,
      )
      context.stroke()
      context.closePath()
      context.restore()
    }

    const whiteCircle = () => {
      context.save()
      context.beginPath()
      context.strokeStyle = 'white'
      context.arc(centerX, centerY, 100, 0, Math.PI * 2, false)
      context.stroke()
      context.closePath()
      context.restore()
    }

    const drawFrame = () => {
      window.requestAnimationFrame(drawFrame, canvas)
      context.clearRect(0, 0, canvas.width, canvas.height)

      whiteCircle()
      text(speed)
      blueCircle(speed)

      if (speed > 100) speed = 0
      speed += 0.1
    }

    drawFrame()
  }, [])

  return (
    <canvas id="canvas" width="500" height="500" style={{ background: '#000' }}>
      your browser not support canvas!
    </canvas>
  )
}

export default PrecentLoad
