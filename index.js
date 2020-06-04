var rect={
    perimeter:(x,y)=>(2*(x+y)),
    area: (x,y)=>(x*y)
};

function solveRect(l,b)
{
    console.log("Solving for rectangle with l="+l+" and b="+b);
    if(l<=0|| b<=0)
    {
        console.log("Inappropriate dimensions");
    }
    else{
        console.log("area is:"+rect.area(l,b)+" and perimeter is:"+rect.perimeter(l,b));

    }
}

solveRect(2,4);
solveRect(3,8);
solveRect(0,9);