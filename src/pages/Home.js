import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '50px 20px', textAlign: 'center' }}>
      {/* Main Heading Section */}
      <div style={{ marginBottom: '50px' }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          color: '#2c3e50', // Dark color for visibility
          marginBottom: '10px',
          fontWeight: 'bold' 
        }}>
          Connect. Swap. Learn. 🚀
        </h1>
        <p style={{ 
          color: '#444', 
          fontSize: '1.2rem', 
          maxWidth: '600px', 
          margin: '0 auto' 
        }}>
          The #1 platform for students to exchange skills—from Python to Biryani making.
        </p>
      </div>
      
      {/* 3D Glass Cards Section */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '30px', 
        marginTop: '20px', 
        flexWrap: 'wrap' 
      }}>
        
        {/* Card 1: Find Partner */}
        <Link to="/skills" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="home-card">
            <h1 style={{ fontSize: '3.5rem', margin: '0 0 15px 0' }}>🤝</h1>
            <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>Find Partner</h2>
            <p style={{ color: '#555', fontSize: '0.95rem' }}>
              Browse the marketplace to find skills you need.
            </p>
          </div>
        </Link>

        {/* Card 2: Swap Knowledge */}
        <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="home-card">
            <h1 style={{ fontSize: '3.5rem', margin: '0 0 15px 0' }}>🎓</h1>
            <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>Swap Knowledge</h2>
            <p style={{ color: '#555', fontSize: '0.95rem' }}>
              List your own skills and join our student community.
            </p>
          </div>
        </Link>

        {/* Card 3: Level Up */}
        <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="home-card">
            <h1 style={{ fontSize: '3.5rem', margin: '0 0 15px 0' }}>🌟</h1>
            <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>Level Up</h2>
            <p style={{ color: '#555', fontSize: '0.95rem' }}>
              View your ratings and manage your skill portfolio.
            </p>
          </div>
        </Link>
        
      </div>
    </div>
  );
}

export default Home;