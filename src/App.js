import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap'
import TrackList from './components/TrackList'
import TrackListDetails from './components/TrackListDetails'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

  return (
    <div>
   <Router>
        <NavBar />
        <Route path="/" component={TrackList}/>
        <Route path="/details/:mbid" component={TrackListDetails}/>
    </Router>
    </div>
  );
}

export default App;
