class Rope{
    constructor(body1, body2, offset1, offset2){
        this.offsetX = offset1;
        this.offsetY = offset2
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x: this.offsetX, y: this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);


    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position        
        strokeWeight(3)
        var Anchor1x = pointA.x
        var Anchor1y = pointA.y
        var Anchor2x = pointB.x + this.offsetX
        var Anchor2y = pointB.y + this.offsetY
        stroke("white");
        line(Anchor1x, Anchor1y, Anchor2x, Anchor2y);
        
        
    }
}