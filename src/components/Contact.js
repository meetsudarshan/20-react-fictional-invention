import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

  

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    setFormSubmitted(true);
  };

  return (
    <section>
      <h2>Contact</h2>
      <div className="card" style={{ backgroundColor: 'lightblue' }}>
        <div className="card-content">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" style={{ fontSize: '2rem' }}>Name:</label>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ width: '80%', fontSize: '2rem' }}
              />
            </div>
            <div>
              <label htmlFor="email" style={{ fontSize: '2rem' }}>Email:</label>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '80%', fontSize: '2rem' }}
              />
            </div>
            <div>
              <label htmlFor="message" style={{ fontSize: '2rem' }}>Message:</label>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={{ width: '80%', height: '200px', fontSize: '2rem' }}
              ></textarea>
            </div>
            <button type="submit" style={{ fontSize: '2rem', marginTop: '1rem' }}>Submit</button>
            {formSubmitted && <p style={{ fontSize: '2rem', marginTop: '1rem' }}>Thank you for your message!</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
