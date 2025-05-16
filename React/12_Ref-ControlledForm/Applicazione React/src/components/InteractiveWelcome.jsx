import React, { useState } from 'react';

const Welcome = ({ name }) => {
  return <p>Welcome, {name}!</p>;
};

const InteractiveWelcome = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <Welcome name={name} />
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
    </div>
  );
};

export default InteractiveWelcome;
