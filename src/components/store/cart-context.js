import React from "react";

const CartContext=React.createContext({
    items:{},
    onAdd:(item)=>{},
    onRemove:(id)=>{
    }
});
export default CartContext;