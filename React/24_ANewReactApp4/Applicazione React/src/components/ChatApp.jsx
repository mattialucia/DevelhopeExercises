import React, { useState, useRef } from "react";
import useSWR from "swr";
import ChatMessage from "./ChatMessage";
import "../App.css";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch bot response");
  console.log(response)
  return response.json();
};

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const messagesEndRef = useRef(null);

  const { data: botResponse, mutate } = useSWR(
    "https://mocki.io/v1/f593d44b-753e-4761-9d23-278d5d5eab05",
    fetcher,
    { revalidateOnFocus: false } // Prevent unnecessary re-fetching on focus
  );

  const handleSendMessage = () => {
    if (currentMessage.trim() !== "") {
      const newMessage = { text: currentMessage, sent: true };
      setMessages([...messages, newMessage]);
      setCurrentMessage("");

      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);

      setTimeout(async () => {
        await mutate(); // Fetch new response from the bot
        if (botResponse) {
          const receivedMessage = { text: botResponse.message || "Hmm, let me think...", sent: false };
          setMessages((prevMessages) => [...prevMessages, receivedMessage]);
        }
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
      <h2>React App 4</h2>
      <div className="chat-container">
        <div className="messages-list">
          {messages.map((message, index) => (
            <ChatMessage key={index} text={message.text} sent={message.sent} />
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="input-area">
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </>
  );
};

export default ChatApp;
