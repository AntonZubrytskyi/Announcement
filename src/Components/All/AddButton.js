import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from "reactstrap";

function ButtonAddBook(){

    return(
        <Navbar color='dark' dark>
            <Container>
                <NavbarBrand>Announcements</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className='btn btn-primary' to='/add'>Add New</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default ButtonAddBook;
