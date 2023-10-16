import React from "react";

import './Card.css';

const Card = props => {
    return <div className={`card ${props.usedIn === 'banner' ? 'banner'
        : props.usedIn === "mealList" ? 'mealList'
            : ''}`}>{props.children}</div>
}

export default Card