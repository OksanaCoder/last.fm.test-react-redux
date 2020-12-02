import React, { Component, useState, useEffect } from 'react'
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap'

const NavBar =  () => {
 
    return (
        <Navbar style={{background: '#000'}}>
            <Container>
            <Navbar.Brand href="#home"><img style={{width: '100px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Lastfm_logo.svg/1280px-Lastfm_logo.svg.png'/></Navbar.Brand>
            
            
            </Container>
       </Navbar>
    )
}


export default NavBar