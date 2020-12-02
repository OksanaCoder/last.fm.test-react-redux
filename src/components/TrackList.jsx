import React, { Component, useEffect, useState, useSelector } from 'react'
import { Container, Row, Col, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import { Link, Router,  Route } from "react-router-dom";


const TrackList = ({trackList}) => {

 const [searchTerm, setSerchTerm] = useState('')
 const [searchRes, setSearchRes] = useState([])

 const settingSearch = (e) => {
     e.preventDefault()
    setSerchTerm(e.target.value)
 }
 useEffect(() => {
        const res = trackList.map(i=> {
            return i.name
        })
        const filteredRes = res.filter(item => item.toLowerCase().includes(searchTerm))
        setSearchRes(filteredRes)
        
 }, [searchTerm])

    return (
        <div>
           <Container>
              <h1 className='mb-5 mt-5'>Top TrackList</h1>

              <FormControl type="text" 
                         placeholder="Search" 
                         className="mr-sm-2" 
                        value={searchTerm}
                        onChange={settingSearch}
                         
                         />
                           <ul>
                             { searchRes.map(i => (
                               <li>{i}</li>

                           )) }
                             </ul>
                   
                          
                {trackList.map(item => {
                    return (
                        
                        <Row className='mt-1' style={{padding: '5px', border: '1px solid #CED4DA', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Col lg={1} md={1} sm={1}>
                        <a href={item.artist.url}><img src={item.image[1]['#text']} /></a>
                            
                        </Col>
                        <Col lg={11} md={11} sm={11}>
                         
                        <Link to={`/artist/${item.artist.name}`}><h6>{item.artist.name}</h6></Link>
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