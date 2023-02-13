import React from 'react';

interface WeekProps {
	children: any;
}

export default function Week({ children }: WeekProps) {
	return <div className='week-container'>{children}</div>;
}
