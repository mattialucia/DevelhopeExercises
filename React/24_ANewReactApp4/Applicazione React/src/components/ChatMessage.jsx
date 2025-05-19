import React from "react";

const ChatMessage = ({ text, sent }) => {
  return (
    <div className={`message-bubble ${sent ? "sent" : "received"}`}>
      {text}
    </div>
  );
};

export default ChatMessage;
