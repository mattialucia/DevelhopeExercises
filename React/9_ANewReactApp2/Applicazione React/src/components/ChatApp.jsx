import React, { useState } from 'react';
import '../App.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const randomResponses = [
    "Interesting! Tell me more.",
    "That sounds great!",
    "Hmm, let me think about it...",
    "I totally agree!",
    "Can you explain further?"
  ];

  const handleSendMessage = () => {
    if (currentMessage.trim() !== "") {
      const newMessage = { text: currentMessage, sent: true };
      setMessages([...messages, newMessage]);
      setCurrentMessage("");

      // Add a random response automatically
      setTimeout(() => {
        const randomResponse = randomResponses[Math.floor(Math.random() * randomResponses.length)];
        const receivedMessage = { text: randomResponse, sent: false };
        setMessages((prevMessages) => [...prevMessages, receivedMessage]);
      }, 1000); // Simulate a delay
    }
  };

  return (
    <>
    <div className="chat-container">
      <div className="messages-list">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message-bubble ${message.sent ? "sent" : "received"}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
    </>
  );
};

export default ChatApp;
