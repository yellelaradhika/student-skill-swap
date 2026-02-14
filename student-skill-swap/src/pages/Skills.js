 import React, { useState } from 'react';

function Skills() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All'); // New state for filtering

  const [allSkills] = useState([
    { id: 1, name: "Rahul", skill: "Python & ML", need: "Cooking", category: "Tech", rating: 4.8 },
    { id: 2, name: "Priya", skill: "Java Basics", need: "Digital Art", category: "Tech", rating: 4.7 },
    { id: 3, name: "Arjun", skill: "SQL & Oracle", need: "Guitar", category: "Tech", rating: 4.5 },
    { id: 4, name: "Sneha", skill: "Pencil Sketching", need: "React", category: "Creative", rating: 4.9 },
    { id: 5, name: "Ishaan", skill: "Photography", need: "Python", category: "Creative", rating: 4.6 },
    { id: 6, name: "Meera", skill: "Video Editing", need: "Baking", category: "Creative", rating: 4.8 },
    { id: 7, name: "Amit", skill: "Biryani Making", need: "Java", category: "Lifestyle", rating: 5.0 },
    { id: 8, name: "Kiran", skill: "Guitar Lessons", need: "Calculus", category: "Lifestyle", rating: 4.7 },
    { id: 9, name: "Sana", skill: "Yoga & Fitness", need: "Web Design", category: "Lifestyle", rating: 4.9 },
    { id: 10, name: "Rohan", skill: "Public Speaking", need: "Data Mining", category: "Lifestyle", rating: 4.4 }
  ]);

  // Logic to filter by BOTH search text and category button
  const filteredSkills = allSkills.filter(item => {
    const matchesSearch = item.skill.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Explore the Skills Marketplace</h2>
      
      {/* Search Bar */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Search for a skill..." 
          style={{ padding: '12px 20px', width: '60%', borderRadius: '25px', border: '1px solid #ddd', fontSize: '1rem' }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '30px' }}>
        {['All', 'Tech', 'Creative', 'Lifestyle'].map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '8px 20px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: activeCategory === cat ? '#007bff' : '#e9ecef',
              color: activeCategory === cat ? 'white' : '#333',
              fontWeight: 'bold'
            }}
          >
            {cat === 'Tech' ? '💻 ' : cat === 'Creative' ? '🎨 ' : cat === 'Lifestyle' ? '🍳 ' : ''} {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {filteredSkills.map(item => (
          <div key={item.id} className="skill-card" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '15px', background: 'white' }}>
             <span style={{ 
                backgroundColor: item.category === 'Tech' ? '#d1ecf1' : item.category === 'Creative' ? '#d4edda' : '#fff3cd', 
                color: item.category === 'Tech' ? '#0c5460' : item.category === 'Creative' ? '#155724' : '#856404',
                padding: '4px 12px', borderRadius: '15px', fontSize: '0.75rem', fontWeight: 'bold' 
              }}>
                {item.category}
              </span>
            <h3 style={{ color: '#007bff', marginTop: '10px' }}>{item.skill}</h3>
            <p><strong>Expert:</strong> {item.name}</p>
            <p><strong>Wants:</strong> {item.need}</p>
            <button style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              Request Swap
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;