import React, { useState, useEffect } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import ListContainer from './ListContainer';

interface WeekDayProps {
	day: string;
	date: string;
}

export default function WeekDay({ date, day }: WeekDayProps) {
	const [collapsed, setCollapsed] = useState<boolean>(true);
	const [todos, setTodos] = useState<Todo[]>(() => {
		return JSON.parse(localStorage.getItem(`todo-list${date}`)!) || [];
	});

	useEffect(() => {
		todos && localStorage.setItem(`todo-list${date}`, JSON.stringify(todos));
	}, [todos]);

	return (
		<div className='day-container'>
			<div className={collapsed ? 'day collapsed' : 'day'}>
				<div className='day-collapsed-header'>
					<div className='day-header'>
						<h5>
							<strong>{day}</strong>
						</h5>
						{collapsed ? (
							<h6 className='date hidden'>{date}</h6>
						) : (
							<h6 className='date'>{date}</h6>
						)}
					</div>
					{collapsed ? (
						<h6 className='date'>{date}</h6>
					) : (
						<h6 className='date hidden'>{date}</h6>
					)}
				</div>
				<div className={collapsed ? 'todo-body collapsed' : 'todo-body'}>
					<ListContainer todos={todos} setTodos={setTodos} etc={false} />
				</div>
				<button
					className={collapsed ? 'collapse-button' : 'collapse-button active'}
					onClick={() => setCollapsed(!collapsed)}>
					<FaCaretDown className='caret' />
				</button>
			</div>
		</div>
	);
}
