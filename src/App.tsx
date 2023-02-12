import React, { useState } from 'react';
import NavBar from './components/NavBar';
import TabBar from './components/TabBar';
import './assets/style/style.css';

function App() {
	const [page, changePage] = useState<string>('Home');

	const renderPage = () => {
		switch (page) {
			case 'Home':
				return <TabBar />;
			case 'Contact':
				return;
			default:
				return;
		}
	};

	const handlePageChange = (page: string) => changePage(page);

	return (
		<>
			<NavBar page={page} handlePageChange={handlePageChange} />
			<h1>
				<strong className='title'>To-Do List</strong>
			</h1>
			<main>{renderPage()}</main>
		</>
	);
}

export default App;
