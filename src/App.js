import React, { useState } from 'react';
import './App.css';

function App() {
  const [showMore, setShowMore] = useState(false);
  const [contactEmail, setContactEmail] = useState('pavan@example.com');
  
  const srePrinciples = [
    'Embrace risk',
    'Service Level Objectives (SLOs)',
    'Eliminate Toil',
    'Monitoring & Alerting',
    'Capacity Planning',
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Pavan Itla's React App</h1>
        <nav>
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Hide SRE Principles' : 'Show SRE Principles'}
          </button>
        </nav>
      </header>

      <main>
        {showMore && (
          <section id="sre-principles">
            <h2>SRE Principles</h2>
            <ul>
              {srePrinciples.map((principle, idx) => (
                <li key={idx}>{principle}</li>
              ))}
            </ul>
          </section>
        )}

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: {contactEmail}</p>
          <input 
            type="email" 
            placeholder="Update contact email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
        </section>
      </main>

      <footer>
        <p>DEVOPS SRE</p>
      </footer>
    </div>
  );
}

export default App;