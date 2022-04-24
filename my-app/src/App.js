import React from 'react';
import Sign_in from "./Sign_in";
//import movies from "./movies";
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Hello, welcome to the Movie App.
          <Routes>
            <Route path="/" element={<Sign_in />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
