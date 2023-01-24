import React, { FC } from "react"
import Todo from "../models/todos"
import TodoItems from "./todoItems"
import classes from './Todos.module.css';
interface Props{
    items:Todo[]
    onRemoveTodo:(id:string)=> void
}
const Todos: FC <Props> = ({items,onRemoveTodo})=>
{

    return (<ul className={classes.todos}>
        {items.map(item => <TodoItems onRemoveTodo={onRemoveTodo.bind(null,item.id)} key={item.id} items={item}/>)}
    </ul>) 
}


export default Todos