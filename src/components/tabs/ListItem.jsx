import React from "react";
import { MDBListGroupItem, MDBCheckbox } from 'mdb-react-ui-kit';

export default function Item({ id, deleteItem}) {
    return (
        <>
            <MDBListGroupItem>
                <MDBCheckbox inline className="checkbox"/>
                <input name="to-do-input" id="list-item-input"></input>
                <button onClick={() => deleteItem(id)}>Delete</button>
            </MDBListGroupItem>
        </>
    )
}