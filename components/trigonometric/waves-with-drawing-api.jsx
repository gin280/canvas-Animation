import React, { useEffect } from 'react'
import Ball from './../../model/ball'

const WavesWithDrawingApi = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas')

    var oRange = document.getElementById('range')
    var ranVau = document.getElementById('ranVau')

    var context = canvas.getContext('2d')
    context.lineWidth = 2
    context.strokeStyle = '#ffffff'

    var angle = 0,
      range = 50,
      xspeed = 0.5,
      yspeed = 0.05,
      xpos = 0,
      ypos = canvas.height / 2

    stdLine()
    drawFrame()

    oRange.addEventListener(
      'change',
      function(event) {
        xpos = 0,
        ypos = canvas.height/2;
        
        range = this.value;
        ranVau.value = this.value;
        
        context.clearRect(0,0,canvas.width,canvas.height);
        stdLine();
        drawFrame();
      },
      false,
    )

    function drawFrame() {
      window.requestAnimationFrame(drawFrame, canvas)

      context.beginPath()

      context.moveTo(xpos, ypos)
      //calculate new position
      xpos += xspeed
      angle += yspeed
      ypos = canvas.height / 2 + Math.sin(angle) * range
      context.lineTo(xpos, ypos)

      context.stroke()
    }

    function stdLine() {
      context.save()
      context.beginPath()
      context.moveTo(xpos, ypos)
      context.lineTo(canvas.width, ypos)
      context.closePath()
      context.strokeStyle = '#479'
      context.stroke()
      context.restore()
    }
  }, [])

  return (
    <div>
      <canvas id="canvas" height="500" width="500" style={{background:'#000'}}>
        your browser not support canvas!
      </canvas>
      <div>
        <p>
          振幅:
          <input
            type="range"
            min="0"
            max="200"
            value="50"
            step="1"
            id="range"
          />
          <input type="text" value="50" id="ranVau" />
        </p>
      </div>
    </div>
  )
}

export default WavesWithDrawingApi
