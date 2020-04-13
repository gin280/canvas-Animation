import React, { useEffect } from 'react'
import Ball from './../../model/ball'

const CirclesAndEllipses = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d'),
      boxes = [],
      activeBox = createBox(),
      gravity = 0.02

    const createBox = () => {
        var color = 'pink'
        var box = 
    }
  }, [])

  return (
    <canvas id="canvas" width="500" height="500" style={{ background: '#000' }}>
      your browser not support canvas!
    </canvas>
  )
}

export default CirclesAndEllipses
