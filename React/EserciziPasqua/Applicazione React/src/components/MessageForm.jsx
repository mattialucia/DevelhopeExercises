import React, { useState } from "react";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <div style={{ listStyleType: "none", marginBottom: "60px" }}>
      <h2>3) MessageForm:</h2>
      <h3>ControlledForm per messaggi:</h3>
      {messages.length > 0 && (
        <ul
          style={{
            listStyleType: "none",
            padding: 20,
            margin: 20,
            textAlign: "left",
            border: "2px solid darkgray",
            borderRadius: "10px",
            backgroundColor: "#1a1a1a"
          }}
        >
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Scrivi qui..."
        />
        <button type="submit">Aggiungi</button>
        {messages.length > 0 && <button onClick={() => setMessages([])}>Reset</button>}
      </form>
    </div>
  );
};

export default MessageForm;
