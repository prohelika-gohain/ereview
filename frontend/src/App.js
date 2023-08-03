import logo from './logo.svg';
import './App.css';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Reviews from './components/Reviews/Reviews';
import Profile from './components/Authentication/Profile'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Reviews/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
