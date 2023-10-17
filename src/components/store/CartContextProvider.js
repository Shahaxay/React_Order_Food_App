import React,{useState} from "react";
import CartContext from "./cart-context";

const CartContextProvider = props => {
    const [cartItems, setCartItems] = useState({});
    const addItemHandler = item => {
        //empty? add:check
        const prevItems={...cartItems};
        if (prevItems[item.title]) {
            prevItems[item.title][0] += +item.amount;
        } else {
            prevItems[item.title] = [+item.amount,+item.price];
        }
        setCartItems(prevItems);
    }
    const removeItemHandler = id => {
        const prevItem={...cartItems};
        console.log(id);
        console.log(prevItem[id][0]);
        if(prevItem[id][0]>1){
            prevItem[id][0]--;
        }else{
            delete prevItem[id];
        }
        setCartItems(prevItem);
    }
    const contextObj = {
        items: cartItems, 
        onAdd: addItemHandler,
        onRemove:removeItemHandler
    }
    return (
        <CartContext.Provider value={contextObj}>
            {console.log("executing cartprovider")}
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;