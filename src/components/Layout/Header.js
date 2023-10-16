import React from 'react';

import './Header.css';
import mealImage from '../../assets/meals.jpg';
import CartIcon from '../Cart/CartIcon';

const Header = props => {
    return (
        <React.Fragment>
        <header className='header'>
            <h2>ReactMeals</h2>
            <CartIcon/>
        </header>
        <img src={mealImage} alt='mealImage'/>
        </React.Fragment>
    );
}

export default Header;