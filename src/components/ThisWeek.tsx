import React from 'react';
import Week from './Week';
import WeekDay from './WeekDay';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import DAYS from '../days.json';

export default function ThisWeek() {
	return (
		<>
			<h1>
				<strong>This week</strong>
			</h1>
			<Week>
				{DAYS.map((day, index) => (
					<WeekDay
						key={uuidv4()}
						day={dayjs().day(index).format('dddd')}
						date={dayjs().day(index).format('MMM D')}
					/>
				))}
			</Week>
		</>
	);
}
