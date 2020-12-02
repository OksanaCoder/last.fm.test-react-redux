import React, { Component, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";

const TrackList = () => {
    const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=35c1fe879c42bb852aca10f2a48302fc&format=json`
    const [trackList, setTrackList]  = useState([])
    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
            const res = await fetch(url)
            const data = await res.json()
            setTrackList(data.tracks.track)
            console.log(data.tracks.track)
    }
    return (
        <div>
           <Container>
              <h1 className='mb-5 mt-5'>Top TrackList</h1>
             
                {trackList.map(item => {
                    return (
                        
                        <Row className='mt-1' style={{padding: '5px', border: '1px solid #000', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Col lg={1} md={1} sm={1}>
                        <a href={item.artist.url}><img src={item.image[1]['#text']} /></a>
                            
                        </Col>
                        <Col lg={11} md={11} sm={11}>
                         
                        <Link to={{pathname: `track/${item.mbid}`, query: { mbid: item.mbid }}}><h6>{item.artist.name}</h6></Link>
                        <p>"{item.name}"</p>
                        </Col>
                        </Row>
                       

                    )
                })}
           
          </Container>
        </div>
    )
}


export default TrackList