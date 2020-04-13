import React, { useState, useEffect } from 'react'
import MyRule from './../../model/rule'
import { captureMouse } from './../../utils'

const CustomRule = () => {
  const [money, setMoney] = useState(1666)

  const changeMoney = e => {
    console.info(e.target.value)
    setMoney(e.target.value)
  }

  useEffect(() => {
    var canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d'),
      cW = canvas.width,
      cH = canvas.height,
      centerX = cW / 2,
      centerY = cH / 2

    var ruleX = centerX,
      ruleY = 80
    var isMouseDown = false,
      oldX = 0,
      offsetX = 0
    var mouse = captureMouse(canvas)

    var rule = new MyRule({
      x: ruleX,
      y: ruleY,
      min: 500,
      max: 10000,
      width: 500,
      color: 'blue',
      step: 1000,
      markShort: 5,
      markLong: 12,
      textHeight: 5,
      lineBottom: {
        mx: 0,
        my: ruleY,
        lx: cW,
        ly: ruleY,
        color: 'pink',
      },
      lineRed: {
        mx: centerX,
        my: 40,
        lx: centerX,
        ly: ruleY + 6,
        color: 'red',
      },
    })

    //重置标尺的初始位置
    rule.x = centerX - rule.min / rule.ratioScale

    // var oP = document.getElementById('record')

    // var money = 1

    //钱数
    setMoney(i => (i = rule.min))
    console.info(rule.min, '钱数')

    //起点
    var start = rule.x

    //终点
    var end = rule.width

    var speed = 0,
      fl = 0.95

    // oP.blur(function(e) {
    //   money = +this.value
    //   if (rule.min <= money && money <= rule.max) {
    //     console.info(money, 'inner')
    //     rule.x = centerX - money / rule.ratioScale
    //   } else {
    //     checkBountry()
    //     console.info(money, 'outer')
    //   }
    // })

    canvas.addEventListener('mousedown', function(e) {
      isMouseDown = true
      offsetX = mouse.x - rule.x
      oldX = rule.x
      canvas.addEventListener('mouseup', onMouseUp, false)
      canvas.addEventListener('mousemove', onMouseMove, false)
    })

    function onMouseUp(event) {
      isMouseDown = false

      canvas.removeEventListener('mouseup', onMouseUp, false)
      canvas.removeEventListener('mousemove', onMouseMove, false)
    }

    function onMouseMove(event) {
      rule.x = mouse.x - offsetX
      money = Math.floor((centerX - rule.x) * rule.ratioScale)

      //设置速度
      speed = rule.x - oldX
      oldX = rule.x

      checkBountry()
      console.info(money, 'mouseMove')
    }

    //检测边界值
    function checkBountry() {
      if (money <= rule.min) {
        rule.x = start
        money = rule.min
      }

      if (money >= rule.max) {
        rule.x = centerX - end
        money = rule.max
      }
    }

    function move() {
      if (!isMouseDown && speed !== 0) {
        if (speed >= 1 || speed <= -1) {
          rule.x += speed
          speed *= fl
          money = Math.floor((centerX - rule.x) * rule.ratioScale)
          checkBountry()
          console.info(money, 'move')
        }
      }
    }

    ;(function drawFrame() {
      window.requestAnimationFrame(drawFrame, canvas)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      move()
      rule.draw(ctx)
    })()
  }, [])

  return (
    <div style={{ position: 'relative', top: '100px' }}>
      <input
        style={{ position: 'absolute' }}
        onChange={e => changeMoney(e)}
        type="text"
        value={money}
        id="record"
      />
      <canvas
        id="canvas"
        style={{ color: '#000' }}
        width="375"
        height="105"
      ></canvas>
    </div>
  )
}

export default CustomRule
