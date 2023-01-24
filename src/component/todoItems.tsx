    import React, { FC } from "react";
    import Todo from "../models/todos";
    import classes from './TodosItems.module.css';

    interface Props
    {
        items: Todo
        
        onRemoveTodo: ()=> void
    }

    const TodoItems: FC <Props> = ({items,onRemoveTodo}) =>
    {

        return <li className={classes.item} onClick={onRemoveTodo} key={items.id}>{items.text}</li>

    }


export default TodoItems