import React, { Component, useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useParams , useHistory} from "react-router-dom";


const TrackListDetails = () => {
    const history = useHistory();
    const data  = useParams()
    // const atrist = data.find(item => item.name == history.match.params.name);
    console.log('props', data)

    return (
        <Container>
            <Row>
                <Col>
            
                    <h4>Singer name: </h4>
                    {/* {atrist.name} */}
                    {/* <img src=''/> */}
                    <h4>Description </h4>
                </Col>
            </Row>
            <Row>
            <button onClick={() => history.push('/') } >Go to home</button>
            </Row>
        </Container>
        
    )
}

export default TrackListDetails