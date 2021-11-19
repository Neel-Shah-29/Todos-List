import React from 'react';
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    return (
        <div className="container">
            <h1 className="my-3 ">Todos List</h1>
            {props.todos.length === 0 ? "No Todos to display,CONGRATS!!!" :
                props.todos.map((todo) => {
                    return (<TodoItem todo={todo} key={todo.id} onDelete={props.onDelete} />
                    )
                })
            }
        </div>
    )
}
