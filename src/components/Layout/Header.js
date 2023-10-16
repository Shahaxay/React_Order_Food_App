import React from 'react';

import './Header.css';

const Header = props => {
    return (
        <div className='header'>
            <h2>ReactMeals</h2>
            <button><img src='/icons-cart.png' alt='cart' className='cart-image' />Your Cart<label>0</label></button>
        </div>
    );
}

export default Header;