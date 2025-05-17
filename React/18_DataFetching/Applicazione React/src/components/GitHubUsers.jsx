import React, { useState } from "react";
import GithubUser from "./GitHubUser";

const GithubUsers = () => {
  const [username, setUsername] = useState("");
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && !usernames.includes(username)) {
      setUsernames([...usernames, username]);
    }
    setUsername("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Search for GitHub Users</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Enter GitHub username" 
          required 
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {usernames.map((name, index) => (
          <GithubUser key={index} username={name} />
        ))}
      </div>
    </div>
  );
};

export default GithubUsers;
