import React,{useContext} from "react";

import './Cart.css';
import Model from "../UI/Model";
import CartContext from "../store/cart-context";

const Cart=props=>{
    const context=useContext(CartContext);
    return (
        <Model onClick={props.onClose}>
            <ul>
                {Object.keys(context.items).map(item=><li>{item}</li>)}
            </ul>
            <div className="cart-summary">
                <h3>Total Amount</h3>
                <span id="cart-total-bill">35.62</span>
            </div>
            <div className="button-group">
                <button id="close" onClick={props.onClose}>Close</button>
                <button id="order">Order</button>
            </div>
        </Model>
    );
}
export default Cart;