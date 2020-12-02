import React, { Component, useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useParams , useHistory, useLocation} from "react-router-dom";


const TrackListDetails = ({ trackList }) => {
    const { name } = useParams();

    const history = useHistory();
    const location = useLocation();


// console.log(location);

        const targetArtist = trackList.find(item => item.name === name);
        console.log('props', name)
    
     
    return (
        <Container>
            <Row>
                <Col>
            
                    <h4>Singer name: </h4>
                
                                <h1>{name}</h1>
             
            
                  
                    <h4>Description </h4>
                </Col>
            </Row>
            <Row>
            <button onClick={() => history.goBack() } >Go to home</button>
            </Row>
        </Container>
        
    )
}

export default TrackListDetails