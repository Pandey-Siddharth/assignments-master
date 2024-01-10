import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

function total(items){
    let sum=0;
    console.log("render");
    items.map(item=>{sum = sum+item.value});
    return sum;
   }
const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);
    function a(){
        return total(items)
    }

    const totalValue = useMemo(a,[items]);
    // Your code ends here
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};

export default Assignment3;