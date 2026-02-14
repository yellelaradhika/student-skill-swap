import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '30px', border: '1px solid #ddd', borderRadius: '15px', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
      <h2>Login</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="email" placeholder="College Email" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        <input type="password" placeholder="Password" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        <button style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
      </form>
      
      {/* Updated the link here to be functional */}
      <p style={{ marginTop: '20px', fontSize: '0.9rem' }}>
        Don't have an account? <Link to="/register" style={{ color: '#007bff', fontWeight: 'bold', textDecoration: 'none' }}>Register here</Link>
      </p>
    </div>
  );
}

export default Login;