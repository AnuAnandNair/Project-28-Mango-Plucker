class stone{
    constructor(x,y,r){
        var options= {
            restitution: 0,
            isStatic: false,           
            friction: 1,
            density: 1.2
        }
            this.body=Bodies.circle(x,y,r,options);
            this.image=loadImage("stone.png");
            this.r=r;
            World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        //push();
	//	translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r*2,this.r*2);
       // pop();

    }
}