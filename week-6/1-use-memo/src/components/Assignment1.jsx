import { useState } from "react";
import { useMemo } from 'react';
// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

function factorial(n){
    console.log("Render")
    if(n>1){
        let ans = 1;
        while(n>=1){
            ans = ans * n;
            n--;
        }
        return ans;
    }
    return n;
}

export function Assignment1() {
    const [input, setInput] = useState(0);

    const calculate = function(){
        return factorial(input);
    }

    let expensiveValue= useMemo(calculate,[input]);

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={function(e){
                    setInput((Number(e.target.value)));                 
                }} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}