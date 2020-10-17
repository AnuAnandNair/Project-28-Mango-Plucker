class tree{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.body=Bodies.rectangle(x,y,500,600,options);
        this.width=500;
        this.height=600;
        this.image=loadImage("tree.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
		translate(pos.x, pos.y+10);
		fill(255);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}