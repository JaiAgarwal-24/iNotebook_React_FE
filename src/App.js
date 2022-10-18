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
import NoteState from './Context/notes/NoteState';

function App() {
  return (
    <>
      <ErrorBoundary>
        <NoteState>
          <Router>
            <Navbar />
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                {/* <Route exact path = "/user" element = {<Users/>}/> */}
              </Routes>
            </div>
          </Router>
        </NoteState>
      </ErrorBoundary>
    </>
  );
}

export default App;
