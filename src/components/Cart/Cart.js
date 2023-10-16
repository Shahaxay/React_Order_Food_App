import React from "react";
import './Cart.css';

const Cart = props => {
    return (
        <button className="cart__button">
            <img src='/icons-cart.png' alt='cart' className='cart-image' />
            <span>Your Cart</span>
            <label className="cart__badge">0</label>
        </button>
    );
}

export default Cart;