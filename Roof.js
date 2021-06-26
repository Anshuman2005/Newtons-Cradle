class Roof {
    constructor (x, y, width, height){
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
    }
    display () {
        var groundPos=this.body.position;		

        push()
        rectMode(CENTER)
        fill(128,128,128)
        rect(this.body.podition.x,this.body.position.y,this.width, this.height);
        pop()
        
    }
}