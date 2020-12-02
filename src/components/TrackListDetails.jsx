import React, { Component, useEffect, useState } from 'react'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import { useParams , useHistory, useLocation} from "react-router-dom";


const TrackListDetails = ({ trackList }) => {
    const { name } = useParams();

    const history = useHistory();
    const location = useLocation();

        const targetArtist = trackList.find(item => item.name === name);

        console.log('props', name)

     
    return (
        <Container>
            <Row>
                <Col>
                <Card style={{ width: '50%' }} className='mt-4'>
      
                <Card.Body>
                    <Card.Title>Artist Name: {name}</Card.Title>
                    <Card.Text>
                
                    </Card.Text>
                    <Button style={{background: '#CE0A03', border: 'none' }} variant="primary" onClick={() => history.goBack() }>Go on main page</Button>
                </Card.Body>
                </Card>
                            
    
                </Col>
            </Row>
           
        </Container>
        
    )
}

export default TrackListDetails