import React, { useContext } from "react";

import './Cart.css';
import Model from "../UI/Model";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Cart = props => {
    const context = useContext(CartContext);
    let totalBill = 0;
    Object.values(context.items).forEach(
        item => {
            totalBill += item[0] * item[1];
        });
    return (
        <Model onClick={props.onClose}>
            <ul>
                {Object.entries(context.items).map(item =><CartItem
                title={item[0]}
                amount={item[1][0]}
                price={item[1][1]}
                />)}
            </ul>
            <div className="cart-summary">
                <h3>Total Amount</h3>
                <span id="cart-total-bill">{'$'+totalBill.toFixed(2)}</span>
            </div>
            <div className="button-group">
                <button id="close" onClick={props.onClose}>Close</button>
                <button id="order">Order</button>
            </div>
        </Model>
    );
}
export default Cart;