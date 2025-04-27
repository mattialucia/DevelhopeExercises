import React, { useState } from 'react';

const MessageForm = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <div style={{ listStyleType: 'none', marginBottom: "60px"}}>
      <h2>3) MessageForm:</h2>
      <h3>ControlledForm per messaggi:</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={handleChange} placeholder="Scrivi qui..." />
        <button type="submit">Aggiungi</button>
      </form>
      <ul style={{ listStyleType: 'none', padding: 20, margin: 20, textAlign: 'left', border: "2px solid black"}}>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessageForm;
