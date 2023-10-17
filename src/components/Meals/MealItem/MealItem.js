import React from "react";

import './MealItem.css'
import MealForm from "./MealForm";

const MealItem = props => {
    return (
        <React.Fragment>
            <div className="meal-item">
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <h3 className="meal-item__price">{` $ ${props.price.toFixed(2)}`}</h3>
                </div>
                <div>
                    <MealForm title={props.name}/>
                </div>
            </div>
            <hr />
        </React.Fragment>
    );
}

export default MealItem;