import React, { useState, useRef } from 'react';
import '../App.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const messagesEndRef = useRef(null); // Ref per scroll automatico

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

      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);

      setTimeout(() => {
        const randomResponse = randomResponses[Math.floor(Math.random() * randomResponses.length)];
        const receivedMessage = { text: randomResponse, sent: false };
        setMessages((prevMessages) => [...prevMessages, receivedMessage]);

        setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
      }, 1000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <h2>React App 3</h2>
      <div className="chat-container">
        <div className="messages-list">
          {messages.map((message, index) => (
            <div key={index} className={`message-bubble ${message.sent ? "sent" : "received"}`}>
              {message.text}
            </div>
          ))}
          <div ref={messagesEndRef} /> {/* Ref per scroll automatico */}
        </div>
        <div className="input-area">
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus // Assicura che l'input abbia il focus all'avvio
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </>
  );
};

export default ChatApp;
