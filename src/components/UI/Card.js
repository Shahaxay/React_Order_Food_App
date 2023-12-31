import React from "react";

import './Card.css';

const Card = props => {
    return <div className={`card ${props.usedIn !== undefined ? props.usedIn:''}`}>{props.children}</div>
}

export default Card