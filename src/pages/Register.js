import React from 'react';

function Register() {
  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '30px', borderRadius: '20px', background: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.4)' }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>Create My Account</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <input placeholder="Full Name" style={inputStyle} />
        <input placeholder="College Email" style={inputStyle} />
        <input placeholder="What can you teach?" style={inputStyle} />
        <input placeholder="What do you want to learn?" style={inputStyle} />
        <button style={{ padding: '15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
          Create My Account
        </button>
      </form>
    </div>
  );
}

const inputStyle = { padding: '12px', borderRadius: '8px', border: '1px solid #ccc', backgroundColor: 'rgba(255, 255, 255, 0.8)' };

export default Register;