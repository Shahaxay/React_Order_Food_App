import React from "react";

import './MealItem.css'

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
                    <form className="meal-item__form">
                        <span>
                            <label htmlFor="amount"><b>Amount</b> &nbsp;&nbsp;</label>
                            <input id="amount" type="number" inputMode="numeric" className="meal-item__input" /><br />
                        </span>
                        <span>
                        <button type="submit" className="meal-item__button">+ Add</button>
                        </span>
                    </form>
                </div>
            </div>
            <hr />
        </React.Fragment>
    );
}

export default MealItem;