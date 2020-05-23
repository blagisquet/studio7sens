import React from 'react';

import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Studio from './Components/Studio/Studio';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Studio />
      <Services />
    </div>
  );
}

export default App;
