import React, { useState } from "react";
import { MDBListGroup } from 'mdb-react-ui-kit';
import Item from "./ListItem"

export default function Etc() {
    const [todos, setTodos] = useState([]);

    const handleAddItem = () => {
        
    }

    return (
        <>
            <h1>
                <strong>Etc.</strong>
            </h1>
            <MDBListGroup style={{ minWidth: '22rem' }} light>
                {todos.map((todo) => (
                    <>
                        {todo.body}
                    </>
                ))}
            </MDBListGroup> 
            <button onClick={() => handleAddItem()}>Add Item</button>
        </>
    )
}