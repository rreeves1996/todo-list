import React from 'react';
import Week from './Week';
import WeekDay from './WeekDay';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import DAYS from '../days.json';

export default function NextWeek() {
	return (
		<>
			<h1>
				<strong>Next week</strong>
			</h1>
			<Week>
				{DAYS.map((day, index) => (
					<WeekDay
						key={uuidv4()}
						day={dayjs()
							.day(index + 7)
							.format('dddd')}
						date={dayjs()
							.day(index + 7)
							.format('MMM D')}
					/>
				))}
			</Week>
		</>
	);
}
