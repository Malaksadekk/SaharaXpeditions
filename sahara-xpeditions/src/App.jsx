import React, { useState } from 'react';
// We need to import 'useLocation' from the router library
import { BrowserRouter as Router, Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Experiences from './components/Experiences';
import LuxuryCamp from './components/LuxuryCamp';
import Safety from './components/Safety';
import Booking from './components/Booking';
import Footer from './components/Footer';

// By moving the main content into its own component, we can use the useLocation hook
const AppContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  
  // 1. This gets the current page's URL path (e.g., "/" or "/experiences")
  const location = useLocation();
  // 2. This checks if the current path is the home page
  const isHomePage = location.pathname === '/';

  return (
    <div className="site-container">
      <nav className="main-nav">
        <Link to="/" className="nav-brand" onClick={closeMenu}>Sahara Xpeditions</Link>
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className={isMenuOpen ? "nav-links active" : "nav-links"}>
          <NavLink to="/experiences" onClick={closeMenu}>Experiences</NavLink>
          <NavLink to="/luxury-camp" onClick={closeMenu}>Luxury Camp</NavLink>
          <NavLink to="/safety" onClick={closeMenu}>Safety</NavLink>
          <NavLink to="/booking" onClick={closeMenu}>Booking</NavLink>
        </div>
      </nav>

      {/* 3. This now cleverly chooses a class based on the page you're on */}
      <main className={isHomePage ? 'main-content-home' : 'main-content-interior'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/luxury-camp" element={<LuxuryCamp />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

// The main App component just needs to wrap the Router now
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;