//捕获坐标
export const captureMouse = function(element) {
  var mouse = { x: 0, y: 0 }

  element.addEventListener(
    'mousemove',
    function(event) {
      var x, y
      if (event.pageX || event.pageY) {
        x = event.pageX
        y = event.pageY
      } else {
        x =
          event.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft
        y =
          event.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop
      }

      x -= element.offsetLeft
      y -= element.offsetTop

      mouse.x = x
      mouse.y = y
    },
    false,
  )

  return mouse
}

export const containsPoint = function(rect, x, y) {
  return !(
    x < rect.x ||
    x > rect.x + rect.width ||
    y < rect.y ||
    y > rect.y + rect.height
  )
}

export const parseColor = function(color, toNumber) {
  if (toNumber === true) {
    if (typeof color === 'number') {
      return color | 0 //chop off decimal
    }
    if (typeof color === 'string' && color[0] === '#') {
      color = color.slice(1)
    }
    return window.parseInt(color, 16)
  } else {
    if (typeof color === 'number') {
      color = '#' + ('00000' + (color | 0).toString(16)).substr(-6) //pad
    }
    return color
  }
}

export const intersects = function(rectA, rectB) {
  return !(
    rectA.x + rectA.width < rectB.x ||
    rectB.x + rectB.width < rectA.x ||
    rectA.y + rectA.height < rectB.y ||
    rectB.y + rectB.height < rectA.y
  )
}
