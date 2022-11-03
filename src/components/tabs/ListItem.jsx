import React from "react";
import { MDBListGroupItem, MDBCheckbox } from 'mdb-react-ui-kit';

export default function Item({ todo, toggleCompletedTodo }) {
    return (
        <>
            <MDBListGroupItem>
                {todo.complete ? (
                    <>
                        <MDBCheckbox 
                            inline 
                            checked
                            className="checkbox" 
                            onChange={() => toggleCompletedTodo(todo.id)} />
                    </>
                ) : (
                    <>
                        <MDBCheckbox 
                            inline 
                            className="checkbox" 
                            onChange={() => toggleCompletedTodo(todo.id)} />
                    </>
                )}
                
                <p className="item-text">{todo.text}</p>
            </MDBListGroupItem>
        </>
    )
}