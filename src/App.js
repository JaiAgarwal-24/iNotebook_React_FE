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
import Alert from './Components/Alert';
import Signup from './Components/Signup';
import Login from './Components/Login';

function App() {
  return (
    <>
      <ErrorBoundary>
        <NoteState>
          <Router>
            <Navbar />
            <Alert message = "this is alert test" />
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                {/* <Route exact path = "/user" element = {<Users/>}/> */}
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/login" element ={ <Login/> } />
              </Routes>
            </div>
          </Router>
        </NoteState>
      </ErrorBoundary>
    </>
  );
}

export default App;
