import React,{useContext} from "react";
import './CartItem.css'

import CartContext from "../store/cart-context";

const CartItem = props => {
    const context=useContext(CartContext);
    const incrementHandler=()=>{
        context.onAdd({
            title:props.title,
            amount:1
        });
    }
    const decrementHandler=()=>{
        context.onRemove(props.title);
    }
    return (
        <React.Fragment>
        <div className="cart-item">
            <div className="cart-item__desc">
                <h3>{props.title}</h3>
                <h6>{'$'+props.price.toFixed(2)}</h6>
                <span>{`x ${props.amount}`}</span>
            </div>
            <div className="cart-item__buttons">
                <button className="decrement" onClick={decrementHandler}>-</button>
                <button className="increment" onClick={incrementHandler}>+</button>
            </div>
        </div>
        <hr className="cart-item__hr"/>
        </React.Fragment>
    );
}

export default CartItem;