class roof
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true
			//restitution:0.3,
			//friction:0.5,
			//density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h ;
		this.body=Bodies.rectangle(this.x, this.y, this.w,this.h, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		
			rectMode(CENTER)
			strokeWeight(3);
			rect(this.x,this.y,this.w,this.h)
			fill(255,0,255)
			
			
	}

}