import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/Context';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Others from './components/Others';
import About from './components/About';
import Error from './components/Error';
import Footer from './components/Footer';

function App() {
  return (
    <DataProvider>
      <Router basename="/Atmos">
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Others_weather" element={<Others />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </Router>

    </DataProvider>
  );
}

export default App;
