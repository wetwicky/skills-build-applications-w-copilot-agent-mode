
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="d-flex align-items-center w-100">
            <Link className="navbar-brand fw-bold me-4 d-flex align-items-center" to="/">
              <img src={process.env.PUBLIC_URL + '/octofitapp-small.png'} alt="Octofit Logo" className="App-logo" />
              Octofit Tracker
            </Link>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="d-flex flex-column align-items-center justify-content-center" style={{height: '60vh'}}>
              <h1 className="mt-5 mb-4 fw-bold">Welcome to Octofit Tracker!</h1>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
