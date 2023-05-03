import React from 'react'
import { Nav, Navbar, NavDropdown, Container, Offcanvas, Form , Button, Image } from 'react-bootstrap';

function MainHeader() {
    return (
        <div className='header-wapper'>
            <Navbar bg="dark" variant="dark" expand={'md'} className="">
                <Container>
                    <Navbar.Brand href="#">
                        <Image src='https://giftlancer.com/wp-content/uploads/2023/04/cropped-GIFTLANCER.png' className='main-logo' alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">About Us</Nav.Link>
                                <Nav.Link href="#action2">Gift Economy</Nav.Link>
                                <Nav.Link href="#action2">Blog</Nav.Link>
                                <Nav.Link href="#action2">Contact</Nav.Link>
                                <NavDropdown
                                    title={<Image src='https://secure.gravatar.com/avatar/82e89bccafcf9e9e3dc7be9bbce6951e?s=96&d=mm&r=g' className='avtar-icon' alt="logo" />}
                                    id={`offcanvasNavbarDropdown-expand-lg`}
                                >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>                       
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
}

export default MainHeader;