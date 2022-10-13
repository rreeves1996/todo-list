import React, { useEffect, useState } from "react";
import { MDBListGroup, MDBListGroupItem, MDBCheckbox } from 'mdb-react-ui-kit';


export default function Etc() {
    const [itemText, setItemText] = useState([]);
    const [listItems, setListItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);

    const deleteItem = (id) => {
        let newList = [];
        listItems.forEach((item) => {
            if(item.id != id) {
                newList.push(item);

            } else {
                console.log(id);
                console.log(item.id);
            }
        })
        setListItems(newList);
        setItemCount(itemCount - 1);
        console.log(listItems);
    }

    const handleAddText = (event, id) => {
        setItemText(itemText[id] + event);
        console.log(itemText);
    }

    function Item({ id, deleteItem }) {
        return (
            <>
                <MDBListGroupItem>
                    <MDBCheckbox inline className="checkbox"/>
                    <input name="to-do-input" id="list-item-input" onChange={handleAddText}></input>
                    <button onClick={() => deleteItem(id)}>Delete</button>
                </MDBListGroupItem>
            </>
        )
    }




    const renderListItems = () => {
        setListItems([]);
        for (let i = 0; i < itemCount; i++) {
            let newListItem = {
                id: i,
                body: <Item key={i} id={i} deleteItem={deleteItem}/>
            }
            
            setListItems(current => [...current, newListItem])
        }
    }

    useEffect(() => {
        renderListItems();
    },[itemCount])
    return (
        <>
            <h1>
                <strong>Etc.</strong>
            </h1>
            <MDBListGroup style={{ minWidth: '22rem' }} light>
            {listItems.map((item) => (
                <>
                    {item.body}
                </>
                ))}
            </MDBListGroup> 
            <button onClick={() => setItemCount(itemCount + 1)}>Add Item</button>
        </>
    )
}