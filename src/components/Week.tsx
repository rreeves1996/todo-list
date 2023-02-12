import React from 'react';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

interface WeekProps {
	children: any;
}

export default function Week({ children }: WeekProps) {
	return <div className='week-container'>{children}</div>;
}
