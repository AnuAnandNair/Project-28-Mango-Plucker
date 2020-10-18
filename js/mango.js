class mango{
    constructor(x,y,r){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        //this.body=Bodies.rectangle(x,y,width,height,options);
        this.body=Bodies.circle(x,y,r,options);
        this.image=loadImage("mango.png");
        this.r=r;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        //push();
	//translate(pos.x, pos.y);
	//rotate(this.body.angle);
	fill(255,0,255);
	imageMode(CENTER);
	//image(this.image, 0,0,this.r*2, this.r*2);        
        image(this.image,pos.x,pos.y,this.r*2,this.r*2);
        //pop();
    }
}
