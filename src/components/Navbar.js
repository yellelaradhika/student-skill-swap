import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', backgroundColor: '#2c3e50', color: 'white' }}>
      <h2 style={{ margin: 0 }}>SkillSwap 🤝</h2>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        {/* Find Skills link removed from here */}
        <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>My Profile</Link>
        <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
        <Link to="/login" style={{ color: '#fff', textDecoration: 'none', backgroundColor: '#007bff', padding: '5px 15px', borderRadius: '5px' }}>Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;