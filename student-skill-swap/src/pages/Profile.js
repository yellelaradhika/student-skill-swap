import React from 'react';

function Profile() {
  // Demo user data - You can change 'Your Name' for the hackathon!
  const user = {
    name: "Radhika", 
    college: "B.Tech CSE Student, Hyderabad",
    bio: "Passionate about coding and cooking. Ready to swap Python tips for Biryani secrets!",
    skillsOffered: ["Python", "Java", "SQL"],
    skillsWanted: ["Italian Cooking", "Digital Art"],
    swapsCompleted: 12,
    rating: 4.9
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <div className="home-card" style={{ width: '100%', textAlign: 'left', cursor: 'default' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '20px' }}>
          <div style={{ width: '100px', height: '100px', backgroundColor: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
            👤
          </div>
          <div>
            <h1 style={{ color: '#2c3e50', margin: 0 }}>{user.name}</h1>
            <p style={{ color: '#555', margin: '5px 0' }}>{user.college}</p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
              <span style={{ background: '#28a745', color: 'white', padding: '5px 15px', borderRadius: '15px', fontSize: '0.8rem' }}>⭐ {user.rating} Rating</span>
              <span style={{ background: '#007bff', color: 'white', padding: '5px 15px', borderRadius: '15px', fontSize: '0.8rem' }}>🔄 {user.swapsCompleted} Swaps</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h3 style={{ color: '#2c3e50' }}>About Me</h3>
          <p style={{ color: '#555' }}>{user.bio}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '30px' }}>
          <div>
            <h4 style={{ color: '#2c3e50' }}>Skills I'm Teaching</h4>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {user.skillsOffered.map(skill => (
                <span key={skill} style={{ background: 'rgba(0,123,255,0.1)', color: '#007bff', padding: '5px 12px', borderRadius: '8px', fontSize: '0.9rem', border: '1px solid #007bff' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: '#2c3e50' }}>Skills I Want</h4>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {user.skillsWanted.map(skill => (
                <span key={skill} style={{ background: 'rgba(40,167,69,0.1)', color: '#28a745', padding: '5px 12px', borderRadius: '8px', fontSize: '0.9rem', border: '1px solid #28a745' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;