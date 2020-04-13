import React, { useEffect } from 'react'
import Ball from './../../model/ball'

const Throwing = () => {
  useEffect(() => {
      
  }, [])

  return (
    <div>
      <p id="record">当前的速度为：</p>
      <canvas
        id="canvas"
        width="500"
        height="500"
        style={{ background: '#000' }}
      >
        your browser not support canvas!
      </canvas>
    </div>
  )
}

export default Throwing
