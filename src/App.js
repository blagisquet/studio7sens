import React from 'react';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      {/* <Home className="home" /> */}
    </div>
  );
}

export default App;
