import React,{useContext} from "react";

import './MealForm.css';
import Input from "../../UI/Input";
import CartContext from "../../store/cart-context";


const MealForm = props => {
    const context=useContext(CartContext);
    const submissionHandler=(e)=>{
        e.preventDefault();
        context.onAdd({title:props.title,amount:document.getElementById(props.id).value,price:props.price})
    }
    return (
        <form className="meal-item__form" onSubmit={submissionHandler}>
            <Input
            label="Amount"
            usedIn='mealForm'
            input={{
                id:props.id,
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