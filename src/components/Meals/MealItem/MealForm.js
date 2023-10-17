import React,{useContext,useRef} from "react";

import './MealForm.css';
import Input from "../../UI/Input";
import CartContext from "../../store/cart-context";


const MealForm = props => {
    const amountRef=useRef();
    const context=useContext(CartContext);
    const submissionHandler=(e)=>{
        e.preventDefault();
        context.onAdd({title:props.title,amount:amountRef.current.value()})
    }
    return (
        <form className="meal-item__form" onSubmit={submissionHandler}>
            <Input
            ref={amountRef}
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