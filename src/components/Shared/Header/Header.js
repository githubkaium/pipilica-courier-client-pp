import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container className="headSection">
                    <Navbar.Brand href="#home" className="text-info fw-bold">PiPiLiCa Courier</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">All Services</Nav.Link>
                        <Nav.Link as={Link} to="/addService">Add Service</Nav.Link>
                        <Nav.Link as={Link} to="/booking">My Booking</Nav.Link>
                        <Nav.Link as={Link} to="/manageServices">Manage Services</Nav.Link>
                        <Nav.Link as={Link} to="/feedbacks">Feedback</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light"><button className="btn bg-primary text-white">Logout</button></Button> :
                            <Nav.Link as={Link} to="/login"><button className="btn bg-primary text-white">Login</button></Nav.Link>}
                        {user?.email ?
                            <Navbar.Text className="mx-3 px-2 text-black border border-primary rounded">
                                Signed in as : <a className="text-decoration-none text-primary" href="#login">{user?.displayName}</a>
                            </Navbar.Text> :
                            <Navbar.Text></Navbar.Text>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;