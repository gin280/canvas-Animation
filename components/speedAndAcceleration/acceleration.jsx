import React, { useEffect } from 'react'
import Ball from './../../model/ball'

const Acceleration = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')

    var ball = new Ball(40)
    ball.x = 0
    ball.y = 0

    var vx = 0,
      vy = 0, //初始速度为0
      ax = 0,
      ay = 0, //分加速度为0
      angle = 30, //运动方向
      aTotal = 0.05 // 定义加速度的大小

    const drawFrame = () => {
      window.requestAnimationFrame(drawFrame, canvas)
      context.clearRect(0, 0, canvas.width, canvas.height)

      ax = Math.cos((angle * Math.PI) / 180) * aTotal
      ay = Math.sin((angle * Math.PI) / 180) * aTotal

      vx += ax
      vy += ay

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

export default Acceleration
