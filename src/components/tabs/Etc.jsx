import React, { useEffect, useState } from "react";
import { MDBListGroup, MDBListGroupItem, MDBCheckbox } from 'mdb-react-ui-kit';


export default function Etc() {
    const [itemText, setItemText] = useState([]);
    const [listItems, setListItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [loading, setLoading] = useState(false);

    const deleteItem = (id) => {
        const newList = listItems;
        newList.forEach(item => {
            console.log(item.id)
            // if(item.id === id) {
            //     item.remove();
            //     console.log("removed");
            // }
        })
    }

    const handleAddText = (event) => {
        console.log(itemText);
    }

    function Item(props) {
        return (
            <>
                <MDBListGroupItem>
                    <MDBCheckbox inline className="checkbox"/>
                    <input name="to-do-input" id="list-item-input" onChange={handleAddText}></input>
                    <button onClick={() => deleteItem(props.id)}>Delete</button>
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
        console.log(listItems);
    }, [loading]);


    return (
        <>
            <h1>
                <strong>Etc.</strong>
            </h1>
            <MDBListGroup style={{ minWidth: '22rem' }} light>
                {loading ? (
                    <>
                        <h1>Loading...</h1>
                    </>
                ) : (
                    <>
                        {listItems.map((item) => (
                            <>
                                {item.body}
                            </>
                        ))}
                    </>
                )}
                
            </MDBListGroup> 
            <button onClick={() => handleAddListItem()}>Add Item</button>
        </>
    )
}