import React from 'react';

interface WeekProps {
	children: JSX.Element[];
}

export default function Week({ children }: WeekProps) {
	return <div className='week-container'>{children}</div>;
}
