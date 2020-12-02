import logo from './logo.svg';
import './App.css';
import React, { Component, useEffect, useState, useSelector } from 'react'

import { Container, Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import TrackList from './components/TrackList'
import TrackListDetails from './components/TrackListDetails'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createMemoryHistory } from 'history'

function App() {
  const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=35c1fe879c42bb852aca10f2a48302fc&format=json`
    const [trackList, setTrackList]  = useState([])

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

        const handleChange= e => {

            setSearchTerm(e.target.value)
        }
        useEffect (() => {
            const result = trackList.filter(query => query.toString().toLowerCase().includes(searchTerm))
           
                setSearchResults(result)
                console.log(result)
        }, [searchTerm])


    useEffect(() => {
        loadData()
    }, [])
    const history = createMemoryHistory()

    const loadData = async () => {
            const res = await fetch(url)
            const data = await res.json()
            setTrackList(data.tracks.track)
            console.log(data.tracks.track)
    }
  return (
    <div>
   <Router>
        
        <NavBar />
  
        
        <Route exact path="/" render={(props) => <TrackList trackList={trackList} searchResults={searchResults} />}/>
        <Route exact path="/artist/:name" render={(props) => <TrackListDetails trackList={trackList} />} />      
   </Router>
    </div>
  );
}

export default App;
