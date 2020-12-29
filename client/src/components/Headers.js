import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home">PRODUCTS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/cart" ><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                            <Nav.Link href="/login"><i className="fas fa-user"></i>Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
