import React,{useState} from "react";
import './CartIcon.css';
import Cart from "./Cart";
const CartIcon = props => {
    const [dispayCart,setDisplayCart]=useState(false);
    const clickHandler=()=>{
        setDisplayCart(true);
    }
    return (
        <React.Fragment>
            {dispayCart &&<Cart/>}
            <button className="cart__button" onClick={clickHandler}>
                <img src='/icons-cart.png' alt='cart' className='cart-image' />
                <span>Your Cart</span>
                <label className="cart__badge">0</label>
            </button>
        </React.Fragment>
    );
}

export default CartIcon;