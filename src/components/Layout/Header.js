import React from 'react';

import './Header.css';
import mealImage from '../../assets/meals.jpg';
import Cart from '../Cart/Cart';

const Header = props => {
    return (
        <React.Fragment>
        <header className='header'>
            <h2>ReactMeals</h2>
            <Cart/>
        </header>
        <img src={mealImage} alt='mealImage'/>
        </React.Fragment>
    );
}

export default Header;