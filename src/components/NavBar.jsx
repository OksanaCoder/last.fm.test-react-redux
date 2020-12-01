import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap'

const NavBar =  () => {
    return (
        <Navbar style={{background: '#000'}}>
            <Container>
            <Navbar.Brand href="#home" className='text-white'>Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#features" className='text-white'>Features</Nav.Link>
            <Nav.Link href="#pricing" className='text-white'>Pricing</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form>
            </Container>
       </Navbar>
    )
}


export default NavBar