import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap'
import TrackList from './components/TrackList'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const key = '35c1fe879c42bb852aca10f2a48302fc'

  return (
    <div>
   
        <NavBar />
        <TrackList />
 
    </div>
  );
}

export default App;
