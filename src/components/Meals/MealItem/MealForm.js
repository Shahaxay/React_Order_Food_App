import React from "react";

import './MealForm.css';
import Input from "../../UI/Input";

const MealForm = props => {
    return (
        <form className="meal-item__form">
            <Input
            label="Amount"
            usedIn='mealForm'
            input={{
                type:'number',
                max:10,
                min:1,
                defaultValue:1
            }}
            />
            <button type="submit">+ Add</button>
        </form>
    );
}

export default MealForm;