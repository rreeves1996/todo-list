import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';

export default function NavBar() {
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
        <div className='pt-3 px-4 bg-light mb-4'>
            <h1>Dashboard</h1>
            <MDBContainer fluid>
                <MDBBreadcrumb bold>
                    <MDBBreadcrumbItem>
                        <a href='' className='text-reset'>
                            Home
                        </a>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem>
                        <a href='' className='text-reset'>
                            Analytics
                        </a>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem>
                        <a href='' className='text-reset'>
                            <u>Dashboard</u>
                        </a>
                    </MDBBreadcrumbItem>
                </MDBBreadcrumb>
            </MDBContainer>
        </div>
    </MDBNavbar>
  );
}