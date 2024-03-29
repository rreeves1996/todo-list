import React from 'react';
import {
	MDBNavbar,
	MDBContainer,
	MDBBreadcrumb,
	MDBBreadcrumbItem,
} from 'mdb-react-ui-kit';

interface NavBarProps {
	page: string;
	handlePageChange: (arg?: any) => void;
}

export default function NavBar({ page, handlePageChange }: NavBarProps) {
	return (
		<MDBNavbar expand='lg' light bgColor='light'>
			<div className='pt-3 px-4 bg-light mb-4'>
				<h1>{page}</h1>
				<MDBContainer fluid>
					<MDBBreadcrumb bold>
						<MDBBreadcrumbItem>
							<a
								href='Home'
								className='text-reset'
								onClick={() => handlePageChange('Home')}>
								{page === 'Home' ? <u>Home</u> : <>Home</>}
							</a>
						</MDBBreadcrumbItem>
						<MDBBreadcrumbItem>
							<a
								href='https://github.com/rreeves1996/todo-list'
								className='text-reset'>
								GitHub Repo
							</a>
						</MDBBreadcrumbItem>
						<MDBBreadcrumbItem>
							<a
								href='Contact'
								className='text-reset'
								onClick={() => handlePageChange('Contact')}>
								{page === 'Contact' ? <u>Contact</u> : <>Contact</>}
							</a>
						</MDBBreadcrumbItem>
					</MDBBreadcrumb>
				</MDBContainer>
			</div>
		</MDBNavbar>
	);
}
