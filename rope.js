class rope{
	constructor(body1,body2,pointA,pointB)
	{
this.pointA=pointA
this.pointB=pointB

var options={
bodyA:body1,
bodyB:body2,
pointB:{x:this.pointA,y:this.pointB}

}
	//create rope constraint here
	rope=Matter.Constraint.create({
		pointA:{x:200,y:20},
		bodyB:bob1,bob2,bob3,bob4,bob5,
		length:100,
		stiffness:0.1
		})
		World.add(world,rope);
	}


    //create display() here 
display(){
var pointA=this.rope.bodyA.position
var pointB=this.rope.bodyB.position

strokeWeight(2);

}
}
