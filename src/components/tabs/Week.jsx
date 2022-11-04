import React, { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import dayjs from "dayjs";
import { v4 as uuidv4 } from 'uuid';
import ListContainer from "./ListContainer";

function WeekDay(props) {
    const [collapsed, setCollapsed] = useState(true);

    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem(`todo-list${props.date}`)) || []
    });

    

    useEffect(() => {
        todos && localStorage.setItem(`todo-list${props.date}`, JSON.stringify(todos))
    }, [todos])

    return (
        <div className="day-container">
            <div className={collapsed ? "day collapsed" : "day"} >
                <div className="day-collapsed-header">
                    <div className="day-header">
                        <h5><strong>{props.day}</strong></h5>
                        {collapsed ? (
                            <>
                                <h6 className="date hidden">{props.date}</h6>
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
                <div className={collapsed ? "todo-body collapsed" : "todo-body"}>
                    <ListContainer todos={todos} setTodos={setTodos} etc={false} />
                </div>
                <button className={collapsed ? "collapse-button" : "collapse-button active"} onClick={() => setCollapsed(!collapsed)}>
                    <FaCaretDown  className="caret" />
                </button>
                
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
                        <WeekDay key={uuidv4()} day={dayjs().day(index).format('dddd')} date={dayjs().day(index).format('MMM D')}/>
                    </>
                ))
                : days.map((day, index) => (
                    <>
                        <WeekDay key={uuidv4()} day={dayjs().day(index + 7).format('dddd')} date={dayjs().day(index + 7).format('MMM D')}/>
                    </>
                ))}
        </div>
    )
}