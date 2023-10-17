import React,{useState} from "react";
import CartContext from "./cart-context";

const CartContextProvider = props => {
    const [cartItems, setCartItems] = useState({});
    const addItemHandler = item => {
        //empty? add:check
        const prevItems={...cartItems};
        if (prevItems[item.title]) {
            prevItems[item.title] += +item.amount;
        } else {
            prevItems[item.title] = +item.amount;
        }
        setCartItems(prevItems);
    }
    const removeItemHandler = id => {

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