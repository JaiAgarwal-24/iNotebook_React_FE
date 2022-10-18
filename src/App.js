import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ErrorBoundary from './Components/ErrorBoundary';
import About from './Components/About';

function App() {
  return (
    <>
      <ErrorBoundary>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path = "/" element = {<Home/>}/>
            <Route exact path = "/about" element = {<About/>}/>
            {/* <Route exact path = "/user" element = {<Users/>}/> */}
          </Routes>
        </Router>
      </ErrorBoundary>
    </>
  );
}

export default App;
