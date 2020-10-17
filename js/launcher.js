class launcher{
    constructor(body, point){
        var options ={
            bodyA:body,
            pointB:point,
            stiffness:0.004,
            length:1
        }
        this.bodyA=body;
        this.pointB=point;
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);
    }

    //make bodyA as body passed from sketch 
    attach(body){
         this.launcher.bodyA=body;
    }
   
    fly(){        
        this.launcher.bodyA=null; 
    }

    display(){
        

        if(this.launcher.bodyA){
            
var pointA=this.bodyA.position; //if line 9 is not commented
        var pointB=this.pointB; //if line 10 is not commented      
        
           // var pointA=this.launcher.bodyA.position;
          //  var pointB=this.launcher.pointB;

            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}