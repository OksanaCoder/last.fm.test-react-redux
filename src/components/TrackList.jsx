import React, { Component, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

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
                        <a href={item.artist.url}><Row className='mt-1' style={{padding: '5px', border: '1px solid #000', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Col lg={1} md={1} sm={1}>
                        <img src={item.image[1]['#text']} />
                            
                        </Col>
                        <Col lg={11} md={11} sm={11}>
                     
                        <h6>{item.artist.name}</h6>
                        <p>"{item.name}"</p>
                        </Col>
                        </Row>
                        </a>
                    )
                })}
          
          </Container>
        </div>
    )
}


export default TrackList