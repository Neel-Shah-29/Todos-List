import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank!!!");
        }
        else
            props.addTodo(title, desc);
        setTitle("");
        setDesc("");
    }
    return (
        <div className="container" className="Addtodo">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label for="Title" className="form-label">Todo Title</label>
                    <p>
                        <input className="add" value={title} type="text" id="Title" onChange={(e) => setTitle(e.target.value)} />
                    </p>
                </div>
                <div className="mb-3">
                    <label for="desc" className="form-label">Todo Description</label>
                    <p>
                        <input className="add" value={desc} type="text" id="desc" onChange={(e) => setDesc(e.target.value)} />
                    </p>
                </div>
                <button type="submit" className="AddTodobutton" className="btn btn-sm btn-danger">Add Todo</button>
            </form>
        </div>
    )
}

