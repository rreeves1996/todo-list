import React, { useState } from 'react';
import { MDBListGroup, MDBListGroupItem, MDBCheckbox } from 'mdb-react-ui-kit';
import { FaPlusSquare, FaTimes, FaCheck, FaTrashAlt } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import ListItem from './ListItem';

export default function ListContainer({ etc, todos, setTodos }) {
    const [addTodo, setAddTodo] = useState(false);
    const [inputState, setInputState] = useState('');

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

    return (
        <>
            <div className={etc ? "todo-list-container-etc" : "todo-list-container"}>
                <MDBListGroup className={etc ? "list-group" : "list-group-contained"} style={{ minWidth: '22rem' }} light>
                    {todos.map((todo) => (
                        <>
                            <ListItem key={uuidv4()} todo={todo} toggleCompletedTodo={toggleCompletedTodo} />
                        </>
                    ))}
                    {etc ? (
                        <>
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
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
                </MDBListGroup>
            </div>
            <div className="clear-todos">
                <button onClick={() => handleFinishedTodos()}>
                    <FaTrashAlt className="trash-icon" />
                    <span className="clear-todos-text">Clear Finished</span>
                </button>
            </div>
        </>
    )
}
