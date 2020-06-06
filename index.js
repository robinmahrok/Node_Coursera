var rect=require('./rectangle');

function solveRect(l,b)
{
    console.log("Solving for rectangle with l="+l+" and b="+b);
  
    rect(l,b,(err,rectangle) =>{
        if(err)
        {
            console.log("Error "+err.message);
        }
        else{
            console.log("For rectangle with l="+l+" and b="+b+" area is: "+rectangle.area()+" and perimeter is: "+rectangle.perimeter());
            
        }
    });
    console.log("This statement is after the call to rect()");
}

solveRect(2,4);
solveRect(3,8);
solveRect(0,9);