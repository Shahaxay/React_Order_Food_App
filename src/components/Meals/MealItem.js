import React from "react";

import './MealItem.css'

const MealItem=props=>{
    return (
        <React.Fragment>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <h3 className="mean-item__price">{` $ ${props.price}`}</h3>
        <hr/>
        </React.Fragment>
    );
}

export default MealItem;