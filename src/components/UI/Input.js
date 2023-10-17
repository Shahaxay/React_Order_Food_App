import React,{useImperativeHandle,useRef} from "react";

import './Input.css';

const Input = React.forwardRef((props,ref)=>{
    const amountRef=useRef();
    const getAmount=()=>{
        return amountRef.current.value;
    }
useImperativeHandle(ref,()=>{
    return {value:getAmount};
});
return (
    <div className="input">
        <label htmlFor={props.input.id}>Amount</label>
        <input ref={amountRef} {...props.input} className={`${props.usedIn==='mealForm'?'mealForm':''}`}/>
    </div>
);
})

export default Input;