import React, { Component, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

const TrackListDetails = () => {
 
    console.log('props', this.props.match.params.mbid)
    return (
        <Container>
            <Row>
                <Col>
                    <h4>Singer name: </h4>
                    {/* <img src=''/> */}
                    <h4>Description </h4>
                </Col>
            </Row>
        </Container>
        
    )
}

export default TrackListDetails