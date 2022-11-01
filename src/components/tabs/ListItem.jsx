import React from "react";
import { MDBListGroupItem, MDBCheckbox } from 'mdb-react-ui-kit';

export default function Item(props) {


    return (
        <>
            <MDBListGroupItem>
                <MDBCheckbox inline className="checkbox" />
                {/* <input name="to-do-input" id="list-item-input"></input> */}
                <p className="item-text">{props.text}</p>
            </MDBListGroupItem>
        </>
    )
}