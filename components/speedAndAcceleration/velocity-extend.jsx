import React, { useEffect } from 'react'
import Arrow from './../../model/arrow'

const VelocityExtend = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')

    var arrow = new Arrow()
    arrow.x = canvas.width / 2
    arrow.y = canvas.height / 2

    var vr = 30,
      speed = 2

    const drawFrame = () => {
      window.requestAnimationFrame(drawFrame, canvas)
      context.clearRect(0, 0, canvas.width, canvas.height)

      arrow.rotation = (vr * Math.PI) / 180

      arrow.x += Math.cos(arrow.rotation) * speed
      arrow.y += Math.sin(arrow.rotation) * speed

      arrow.draw(context)
    }
    drawFrame()
  }, [])

  return (
    <canvas id="canvas" width="500" height="500" style={{ background: '#000' }}>
      your browser not support canvas!
    </canvas>
  )
}

export default VelocityExtend
