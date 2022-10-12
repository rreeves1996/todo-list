import React, { useState } from "react";
import { MDBListGroup, MDBListGroupItem, MDBCheckbox } from 'mdb-react-ui-kit';


export default function Etc() {
    const [items, setItems] = useState([]);
    const [itemCount, addItem] = useState(0);

    const deleteItem = () => {
        console.log(items)
    }
    const addNewItem = () => {
        addItem(itemCount + 1);
        setItems((items) => [...items, <Item key={itemCount} id={itemCount} deleteItem={deleteItem} />])
    }

    function Item({ id, deleteItem }) {
        return (
            <>
                <MDBListGroupItem>
                    <MDBCheckbox inline className="checkbox" key={id} id={id} />
                    <input name="to-do-input" id="list-item-input"></input>
                    <button onClick={() => deleteItem()}>Delete</button>
                </MDBListGroupItem>
                
            </>
        )
    }

    return (
        <>
            <h1>
                <strong>Etc.</strong>
            </h1>
            <MDBListGroup style={{ minWidth: '22rem' }} light>
                {items}
            </MDBListGroup> 
            <button onClick={() => addNewItem()}>Add Item</button>
            <button onClick={() => deleteItem()}>Delete</button>
        </>
    )
}