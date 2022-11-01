import React, { useState } from "react";
import { MDBListGroup, MDBListGroupItem, MDBCheckbox, MDBIcon } from 'mdb-react-ui-kit';
import { FaCaretDown, FaPlusSquare, FaTimes, FaCheck } from "react-icons/fa";
import dayjs from "dayjs";
import ListItem from './ListItem';

function WeekDay(props) {
    const [collapsed, setCollapsed] = useState(true);
    const [hasItems, setItems] = useState(false);
    const [itemInput, setItemInput] = useState(false);
    const [todos, setTodos] = useState(['Item1', 'Item2', 'Item3', 'Item4']);

    const handleChange = () => {
        const itemInput = document.querySelectorAll('#list-item-input');

        itemInput.forEach((input) => {
            if(input.value.trim()) {
                if(hasItems === false) {
                    setItems(!hasItems);
                    return;
                }
            }
        })
    }

    return (
        <div className="day-container">
            <div className={collapsed ? "day collapsed" : "day"} >
                <div className="day-collapsed-header">
                    <div className="day-header">
                        <h5><strong>{props.day}</strong></h5>
                        {collapsed ? (
                            <>
                                <h6 className="date hidden">{props.date}</h6>
                                {hasItems === true ? (
                                    <MDBIcon fas icon="exclamation-circle" />
                                ) : (
                                    <>
                                    </>
                                )}
                            </>
                        ) : (
                            <>
                                <h6 className="date">{props.date}</h6>
                            </>
                        )}
                        
                    </div>
                    {collapsed ? (
                        <>
                            <h6 className="date">{props.date}</h6>
                        </>
                    ) : (
                        <>
                            <h6 className="date hidden">{props.date}</h6>
                        </>
                    )}
                </div>
                <div className={collapsed ? "todo-list-container collapsed" : "todo-list-container"}>
                    <MDBListGroup style={{ minWidth: '22rem' }} light>
                        {todos.map((todo) => (
                            <>
                                <ListItem text={todo} />
                            </>
                        ))}
                        {todos.length < 6 ? (
                            <MDBListGroupItem>
                            {itemInput ? (
                                <>
                                    <MDBCheckbox inline className="checkbox hidden" />
                                    <input name="to-do-input" id="list-item-input" placeholder="Type something..."></input>
                                    <FaCheck className="confirm" />
                                    <FaTimes className="cancel" onClick={() => setItemInput(!itemInput)}/>
                                </>
                            ) : (  
                                <p className="new-item" onClick={() => setItemInput(!itemInput)}>
                                    <FaPlusSquare className="new-item-icon" /><span>New Item</span>
                                </p> 
                            )}
                            </MDBListGroupItem>
                        ) : (
                            <></>
                        )}
                    </MDBListGroup> 
                </div>
                <FaCaretDown className={collapsed ? "caret" : "caret active"} onClick={() => setCollapsed(!collapsed)} />
            </div>
        </div>
    )
}

export default function Week(props) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <div className="week-container">
            {props.week === "This Week" ? 
                days.map((day, index) => (
                    <>
                        <WeekDay day={dayjs().day(index).format('dddd')} date={dayjs().day(index).format('MMM D')}/>
                    </>
                ))
                : days.map((day, index) => (
                    <>
                        <WeekDay day={dayjs().day(index + 7).format('dddd')} date={dayjs().day(index + 7).format('MMM D')}/>
                    </>
                ))}
        </div>
    )
}