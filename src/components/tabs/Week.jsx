import React, { useState } from "react";
import { MDBListGroup, MDBListGroupItem, MDBCheckbox, MDBIcon } from 'mdb-react-ui-kit';
import { FaCaretDown, FaPlusSquare, FaTimes, FaCheck, FaTrashAlt } from "react-icons/fa";
import dayjs from "dayjs";
import { v4 as uuidv4 } from 'uuid';
import ListItem from './ListItem';
import { useEffect } from "react";

function WeekDay(props) {
    const [collapsed, setCollapsed] = useState(true);
    const [hasItems, setItems] = useState(false);
    const [addTodo, setAddTodo] = useState(false);
    const [inputState, setInputState] = useState('');
    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem('todo-list')) || []
    });

    const handleChange = (event) => {
        const value = event.target.value;

        setInputState(value);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        const newTodo = inputState;

        if(newTodo) {
            setTodos((todos) => [...todos, { 
                id: uuidv4(),
                text: newTodo,
                complete: false 
            }]);
            
            setAddTodo(!addTodo);
            setInputState('');
        }
    }

    const handleFinishedTodos = () => {
        const todoList = [...todos];
        const filteredTodos = todoList.filter((item) => {
            return !item.complete
        });

        setTodos(filteredTodos);
    }

    const toggleCompletedTodo = (id) => {
        const todoList = [...todos];
        const selectedTodo = todoList.find(item => item.id === id);

        selectedTodo.complete = !selectedTodo.complete;
        setTodos(todoList);
    }

    useEffect(() => {
        todos && localStorage.setItem('todo-list', JSON.stringify(todos))
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
                <div className={collapsed ? "todo-body collapsed" : "todo-body"}>
                    <div className="todo-list-container">
                        <MDBListGroup style={{ minWidth: '22rem' }} light>
                            {todos.map((todo, index) => (
                                <>
                                    <ListItem key={todo.id} todo={todo} toggleCompletedTodo={toggleCompletedTodo} />
                                </>
                            ))}
                            {todos.length < 6 ? (
                                <MDBListGroupItem>
                                    {addTodo ? (
                                        <>
                                            <MDBCheckbox 
                                                inline 
                                                className="checkbox hidden" />
                                            <input
                                                type="text"
                                                id="list-item-input" 
                                                placeholder="Type something..."
                                                onChange={handleChange} />
                                            <FaCheck 
                                                className="confirm" 
                                                onClick={handleAddTodo} />
                                            <FaTimes 
                                                className="cancel" 
                                                onClick={() => setAddTodo(!addTodo)} />
                                        </>
                                    ) : (  
                                        <p className="new-item" onClick={() => setAddTodo(!addTodo)}>
                                            <FaPlusSquare className="new-item-icon" />
                                            <span>New Item</span>
                                        </p> 
                                    )}
                                </MDBListGroupItem>
                            ) : (
                                <></>
                            )}
                        </MDBListGroup>
                    </div>
                    <div className="clear-todos">
                        <button onClick={() => handleFinishedTodos()}>
                            <FaTrashAlt className="trash-icon" />
                            <span className="clear-todos-text">Clear Finished</span>
                        </button>
                    </div>
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