import React, { useEffect } from 'react'
import { captureMouse } from './../../utils'

const MouseDistance = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas')
    var log = document.getElementById('log')

    var mouse = captureMouse(canvas)

    var context = canvas.getContext('2d')
    var rect = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    }

    ;(function drawFrame() {
      window.requestAnimationFrame(drawFrame, canvas)
      context.clearRect(0, 0, canvas.width, canvas.height)

      var dx = mouse.x - rect.x
      var dy = mouse.y - rect.y
      var dis = Math.sqrt(dx * dx + dy * dy)

      //draw a square
      context.fillStyle = '#ffffff'
      context.fillRect(rect.x - 2, rect.y - 2, 4, 4)

      context.save()
      context.strokeStyle = '#ffffff'
      context.beginPath()
      context.moveTo(rect.x, rect.y)
      context.lineTo(mouse.x, mouse.y)
      context.closePath()
      context.stroke()
      context.restore()

      log.style.left = (mouse.x + rect.x) / 2 + 'px'
      log.style.top = (mouse.y + rect.y) / 2 + 'px'
      log.innerHTML = dis
    })()
  }, [])

  return (
    <div>
      <canvas id="canvas" width="500" height="500" style={{background:'#000'}}>
        your browser not support canvas!
      </canvas>
      <p style={{position:"absolute",color:'#fff'}} id="log"></p>
    </div>
  )
}

export default MouseDistance
