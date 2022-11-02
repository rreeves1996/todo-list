import React from "react";
import { MDBListGroupItem, MDBCheckbox } from 'mdb-react-ui-kit';

export default function Item({ todo, toggleCompletedTodo }) {


    return (
        <>
            <MDBListGroupItem>
                <MDBCheckbox inline className="checkbox" onChange={() => toggleCompletedTodo(todo.id)} />
                {/* <input name="to-do-input" id="list-item-input"></input> */}
                <p className="item-text">{todo.text}</p>
            </MDBListGroupItem>
        </>
    )
}