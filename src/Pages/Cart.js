import {React, useState} from "react";
const inventory = 4;
// const cost = 4.23;
const Cart = (props) =>{
    const [itemAmount, setItemAmount] = useState(0);
    const [cost, setCost] = useState(4.32);
    const addItem = () =>{
        // check the inventory and 
        if(itemAmount < inventory) setItemAmount(itemAmount + 1);
        setCost(cost * itemAmount)
    }
    const subItem = ()=> {
        itemAmount && setItemAmount(itemAmount-1)
        cost && setCost(cost - (cost * itemAmount))
    }
    return(
        <div className="Basic"> cart 
        <span>
        <button onClick={subItem}>-</button>
        {itemAmount}
        <button onClick={addItem}>+</button>
        {'$' + cost}
        </span>
        </div>
    )
}

export default Cart;