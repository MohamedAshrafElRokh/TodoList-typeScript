import React, { FC, useRef } from "react";
import Todo from "../models/todos";
import classes from"./TodosForm.module.css"
interface Props {

    onAdd(text: Todo): void
}
export const TodosForm:FC <Props>  = (props) =>
{
    const inputRef = useRef<HTMLInputElement>(null)
    
   const  submitHandler = (e:React.FormEvent<HTMLFormElement>)=>
    {
        
        e.preventDefault()
       const inputId = new Date().toISOString()
       console.log(inputId)
        const inputData = {
            key: inputId,
            id: inputId,
            text: inputRef.current!.value
        };


        if(inputData.text.trim().length === 0)
        {
            return
        }else
        {
            props.onAdd(inputData)
        }

    }


    return (<form className={classes.form} onSubmit={(e) => submitHandler(e)}>
        <label htmlFor="text">What you want to do ?</label>
        <input type='text' id="text" ref={inputRef}/>
        <button >+Add</button>
    </form>)
}