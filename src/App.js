import logo from './logo.svg';
import './App.css';
import React, { Component, useEffect, useState, useSelector } from 'react'

import { Container } from 'react-bootstrap'
import TrackList from './components/TrackList'
import TrackListDetails from './components/TrackListDetails'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createMemoryHistory } from 'history'

function App() {
  const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=35c1fe879c42bb852aca10f2a48302fc&format=json`
    const [trackList, setTrackList]  = useState([])
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
        
        <Route path="/" render={(props) => <TrackList trackList={trackList} />}/>
        <Route path="/artist/:name" render={(props) => <TrackListDetails trackList={trackList} />} />      
   </Router>
    </div>
  );
}

export default App;
