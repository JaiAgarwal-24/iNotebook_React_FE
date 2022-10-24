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
import { useState } from 'react';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <ErrorBoundary>
        <NoteState>
          <Router>
            <Navbar />
            <Alert alert={alert}/>
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home showalert = {showAlert}/>} />
                <Route exact path="/about" element={<About />} />
                {/* <Route exact path = "/user" element = {<Users/>}/> */}
                <Route exact path="/signup" element={<Signup showalert = {showAlert} />} />
                <Route exact path="/login" element={<Login showalert = {showAlert} />} />
              </Routes>
            </div>
          </Router>
        </NoteState>
      </ErrorBoundary>
    </>
  );
}

export default App;
