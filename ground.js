class ground {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.b = Bodies.rectangle(x, y, w, h, { isStatic: true })
        World.add(world, this.b)

    }



    display() {
        var pos = this.b.position
        push()
        translate(pos.x, pos.y)
        rectMode(CENTER)
        strokeWeight(5)
        fill("orange")
        rect(0, 0, this.w, this.h)
        pop()

    }



}