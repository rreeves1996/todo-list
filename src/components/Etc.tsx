import React, { useState, useEffect } from 'react';
import ListContainer from './ListContainer';

export default function Etc() {
	const [todos, setTodos] = useState(() => {
		return JSON.parse(localStorage.getItem(`todo-list-etc`)!) || [];
	});

	useEffect(() => {
		todos && localStorage.setItem(`todo-list-etc`, JSON.stringify(todos));
	}, [todos]);

	return (
		<>
			<h1>
				<strong>Etc.</strong>
			</h1>
			<div className='etc-todo-container'>
				<ListContainer todos={todos} setTodos={setTodos} etc={true} />
			</div>
		</>
	);
}
