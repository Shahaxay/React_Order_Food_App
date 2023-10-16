import React from "react";

import './Cart.css';
import Model from "../UI/Model";

const Cart=props=>{
    return (
        <Model>
            <ul>
                <li>Sushi</li>
            </ul>
            <div className="cart-summary">
                <h3>Total Amount</h3>
                <span id="cart-total-bill">35.62</span>
            </div>
            <div className="button-group">
                <button id="close">Close</button>
                <button id="order">Order</button>
            </div>
        </Model>
    );
}
export default Cart;