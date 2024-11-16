import { useState } from "react";

function Counter(){
   const [x,setX]= useState(0);
   const [y,setY]= useState(0);
    return (
        <>
            count x:{x} is {(x % 2 == 0) ? 'even' : 'odd'}
            <button onClick={()=> setX(x+1)}>Inc</button>
            <button onClick={()=> setX(x-1)}>Dec</button>
            <br/>
            count:{y}
            <button onClick={()=> setY(y+1)}>Inc</button>
            <button onClick={()=> setY(y-1)}>Dec</button>
        </>
    )
}
export default Counter;