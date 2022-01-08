class Tower{
 
    constructor(x,y,width,height){

        var option={
            isStatic:true
        }

        this.width=width;
        this.height=height;

        this.body=Bodies.rectangle(x,y,this.width,this.height,option);

        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position
        var angle=this.body.angle
        
        push()
        rectMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle);
        rect(0,0,this.width,this.height)
        pop()
    }



}
