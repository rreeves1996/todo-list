import React, { useEffect, useState } from "react";
import { MDBListGroup, MDBListGroupItem, MDBCheckbox } from 'mdb-react-ui-kit';


export default function Etc() {
    const [itemText, setItemText] = useState([]);
    const [listItems, setListItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);

    const deleteItem = (id) => {
        let newList = listItems;
        
        const filteredList = newList.splice(0, 1);
        setListItems(filteredList);
        renderList(filteredList);
        console.log(filteredList);
    }

    const handleAddText = (event, id) => {
        setItemText(itemText[id] + event);
        console.log(itemText);
    }

    function Item( props ) {
        return (
            <>
                <MDBListGroupItem>
                    <MDBCheckbox inline className="checkbox"/>
                    <input name="to-do-input" id="list-item-input" onChange={handleAddText}></input>
                    <button onClick={() => props.deleteItem(props.id)}>Delete</button>
                </MDBListGroupItem>
            </>
        )
    }


    const handleAddListItem = () => {
        setItemCount(itemCount + 1);

        let newListItem = {
            id: itemCount,
            body: <Item key={itemCount} id={itemCount} deleteItem={deleteItem}/>
        }

        setListItems(current => [...current, newListItem]);
    }

    useEffect(()=> {
        const renderList = () => {
            if(listItems) {
                listItems.map((item) => (
                <>
                    {item.body}
                </>
            ));
            } else {
                return;
            }
        }

        renderList();
    }, [listItems])
    return (
        <>
            <h1>
                <strong>Etc.</strong>
            </h1>
            <MDBListGroup style={{ minWidth: '22rem' }} light>
            {renderList()}
            </MDBListGroup> 
            <button onClick={() => handleAddListItem()}>Add Item</button>
        </>
    )
}