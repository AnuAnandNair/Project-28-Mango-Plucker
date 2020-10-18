class tree{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.body=Bodies.rectangle(x,y,200,300,options);
        this.width=200;
        this.height=300;
        this.image=loadImage("tree.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        //push();
	//translate(pos.x, pos.y);
	fill(255);        
        //image(this.image,0,0,3*this.width,2*this.height);//if width and height are same as that of the tree body, then the stone cannot touch the mangoes. 
        //Tree body restricts the movement of stone towards mango and stone falls off near the border of the tree
	imageMode(CENTER);
	image(this.image,pos.x,pos.y,this.width*3,this.height*2);
        //pop();
    }
}
