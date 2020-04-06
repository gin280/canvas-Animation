import React, { useEffect } from 'react'
import Ball from './../../model/ball'

const CirclesAndEllipses = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')
    const ball = new Ball()
    let angle = 0
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 100
    const speed = 0.05

    const drawFrame = () => {
      window.requestAnimationFrame(drawFrame, canvas)
      context.clearRect(0, 0, canvas.width, canvas.height)
      ball.x = centerX + Math.sin(angle) * radius
      ball.y = centerY + Math.cos(angle) * radius
      angle += speed
      ball.draw(context)
    }

    drawFrame()
  }, [])

  return (
    <canvas id="canvas" width="500" height="500" style={{background:'#000'}}>
      your browser not support canvas!
    </canvas>
  )
}

export default CirclesAndEllipses
