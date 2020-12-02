import React, { Component, useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const TrackListDetails = (props) => {
    const { trackList, location } = this.props;
    const track = trackList.artist.find(item => item.name == location.query.item.name);
    // console.log('props', this.props.match.params.mbid)
    console.log('track', this.props.location.query);
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