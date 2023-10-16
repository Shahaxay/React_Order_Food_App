import React from "react";
import './CartIcon.css';

const CartIcon = props => {
    return (
        <React.Fragment>
            <button className="cart__button" onClick={props.onClick}>
                <img src='/icons-cart.png' alt='cart' className='cart-image' />
                <span>Your Cart</span>
                <label className="cart__badge">0</label>
            </button>
        </React.Fragment>
    );
}

export default CartIcon;