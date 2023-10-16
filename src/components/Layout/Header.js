import React, { useState } from 'react';

import './Header.css';
import mealImage from '../../assets/meals.jpg';
import CartIcon from '../Cart/CartIcon';
import Cart from '../Cart/Cart';

const Header = props => {

    const [dispayCart, setDisplayCart] = useState(false);
    const displayCartHandler = () => {
        setDisplayCart(true);
    }
    const hideCartHandler=()=>{
        setDisplayCart(false);
    }
    return (
        <React.Fragment>
            {dispayCart && <Cart onClose={hideCartHandler}/>}
            <header className='header'>
                <h2>ReactMeals</h2>
                <CartIcon onClick={displayCartHandler} />
            </header>
            <img src={mealImage} alt='mealImage' />
        </React.Fragment>
    );
}

export default Header;