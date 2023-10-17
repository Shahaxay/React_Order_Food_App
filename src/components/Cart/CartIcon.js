import React, { useContext } from "react";
import './CartIcon.css';
import CartContext from '../store/cart-context';

const CartIcon = props => {
    const context = useContext(CartContext);
    console.log(context.items);
    let cartItemQuantity = 0;
    Object.values(context.items).forEach(
        item => {
            cartItemQuantity+=+item[0];
        });
    return (
        <React.Fragment>
            {console.log("evaluated cartIcon")}
            <button className="cart__button" onClick={props.onClick}>
                <img src='/icons-cart.png' alt='cart' className='cart-image' />
                <span>Your Cart</span>
                <label className="cart__badge">{cartItemQuantity}</label>
            </button>
        </React.Fragment>
    );
}

export default CartIcon;