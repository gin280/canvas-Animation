import {
    parseColor
} from './../utils'

class Box {
    constructor(width = 50, height = 50, color = '#ff0000') {
        this.x = 0
        this.y = 0
        this.width = width
        this.height = height
        this.vx = 0
        this.vy = 0
        this.rotation = 0
        this.scaleX = 0
        this.scaleY = 0
        this.color = color
        this.lineWidth = 1
    }

    draw(context) {
        context.save()
        context.translate(this.x, this.y)
        context.rotate(this.rotation)
        context.scale(this.scaleX, this.scaleY)
        context.lineWidth = this.lineWidth
        context.fillStyle = this.color
        context.beginPath()
        context.rect(0, 0, this.width, this.height)
        context.closePath()
        context.fill()
        if (this.lineWidth > 0) {
            context.stroke()
        }
        context.restore()
    }
}

export default Box