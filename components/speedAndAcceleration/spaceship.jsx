import React, { useEffect } from 'react'
import SpaceShip from './../../model/SpaceShip'

const Spaceship = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')

    var oData = document.getElementById('data')

    var spaceShip = new SpaceShip()
    spaceShip.x = canvas.width / 2
    spaceShip.y = canvas.height / 2

    var vr = 0,
      vx = 0,
      vy = 0,
      ax = 0,
      ay = 0,
      angle = 0,
      thrust = 0
    document.addEventListener(
      'keydown',
      function(event) {
        switch (event.keyCode) {
          case 37: //left
            vr = -3
            vx = 0
            vy = 0
            break
          case 39:
            vr = 3
            vx = 0
            vy = 0
            break
          case 38:
            spaceShip.showFlame = true
            thrust = 0.05
            break
          case 40:
            ax = 0
            ay = 0
            vx = 0
            vy = 0
            break
        }
      },
      false,
    )
    document.addEventListener(
      'keyup',
      function(event) {
        vr = 0
        thrust = 0
        spaceShip.showFlame = false
      },
      false,
    )

    const drawFrame = () => {
      window.requestAnimationFrame(drawFrame, canvas)
      context.clearRect(0, 0, canvas.width, canvas.height)

      spaceShip.rotation += (vr * Math.PI) / 180

      angle = spaceShip.rotation
      ax = Math.cos(angle) * thrust
      ay = Math.sin(angle) * thrust

      vx += ax
      vy += vy

      if (spaceShip.x > canvas.width - spaceShip.width) {
        spaceShip.x = canvas.width - spaceShip.width
      }

      if (spaceShip.x < spaceShip.width) {
        spaceShip.x = spaceShip.width
      }

      if (spaceShip.y > canvas.height - spaceShip.height) {
        spaceShip.y = canvas.height - spaceShip.height
      }

      if (spaceShip.y < spaceShip.height) {
        spaceShip.y = spaceShip.height
      }

      spaceShip.x += vx
      spaceShip.y += vy

      spaceShip.draw(context)

      oData.style.left = spaceShip.x + 'px'
      oData.style.top = spaceShip.y + 'px'
    }

    drawFrame()
  }, [])

  return (
    <div>
      <canvas
        id="canvas"
        width="1000"
        height="500"
        style={{ background: '#000' }}
      >
        your browser not support canvas
      </canvas>
      <ul
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          listStyle: 'none',
          color: 'aqua',
          fontSize: '12px',
          width: '200px',
          height: '100px',
        }}
        id="data"
      ></ul>
    </div>
  )
}

export default Spaceship
