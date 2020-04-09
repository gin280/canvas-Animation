import React, { useEffect } from 'react'
import Arrow from './../../model/arrow'
import {captureMouse} from './../../utils'

const MouseFlow = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')
    var mouse = captureMouse(canvas)

    var arrow = new Arrow()
    arrow.x = canvas.width / 2
    arrow.y = canvas.height / 2

    var angle = 0,
      speed = 2

    //角度
    function lerpAngle(a, b, t) {
      var d = b - a
      if (d > Math.PI) d = d - 2 * Math.PI //
      if (d < -Math.PI) d = d + 2 * Math.PI //
      return a + d * t
    }

    // 距离计算
    function lerpDistance(aim, cur, ratio) {
      var delta = cur - aim
      return aim + delta * ratio
    }

    const drawFrame = () => {
      window.requestAnimationFrame(drawFrame, canvas)
      context.clearRect(0, 0, canvas.width, canvas.height)

      arrow.x = lerpDistance(mouse.x, arrow.x, 0.95)
      arrow.y = lerpDistance(mouse.y, arrow.y, 0.95)

      var dx = mouse.x - arrow.x
      var dy = mouse.y - arrow.y

      var beta = Math.atan2(dy, dx) + Math.PI
      angle = lerpAngle(beta, angle, 0.1)

      arrow.rotation = angle + Math.PI //angle默认为弧度

      var vx = Math.cos(angle) * speed
      var vy = Math.sin(angle) * speed

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

export default MouseFlow
