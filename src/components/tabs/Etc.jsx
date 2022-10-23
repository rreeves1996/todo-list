import React, { useState } from "react";
import { MDBListGroup } from 'mdb-react-ui-kit';
import Item from "./ListItem"

export default function Etc() {
    const [itemText, setItemText] = useState([]);
    const [itemArray, setItemArray] = useState([]);
    const [itemCount, setItemCount] = useState(0);

    const deleteItem = (id) => {
        console.log(id);
        const filteredItemArray = itemArray.filter((item) => {
            return item.id !== id;
        });
        console.log(filteredItemArray);
    }
    const handleAddText = (event) => {
        console.log(itemText);
    }

    const handleAddItem = () => {
        setItemCount(itemCount + 1);
        const newItem = {
            id: itemCount,
            body: <Item key={itemCount} id={itemCount} deleteItem={deleteItem} />
        }
        setItemArray((itemArray) => [...itemArray, newItem]);
        console.log(itemArray);
    }

    return (
        <>
            <h1>
                <strong>Etc.</strong>
            </h1>
            <MDBListGroup style={{ minWidth: '22rem' }} light>
                {itemArray.map((item) => (
                    <>
                        {item.body}
                    </>
                ))}
            </MDBListGroup> 
            <button onClick={() => handleAddItem()}>Add Item</button>
        </>
    )
}