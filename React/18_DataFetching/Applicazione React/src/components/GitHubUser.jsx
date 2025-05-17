import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState(null)

  async function fetchGithubUser( username ) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            setData(data);
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } 
    }

  useEffect(() => { fetchGithubUser(username) }, [username])

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px", textAlign: "center" }}>
      <img src={data.avatar_url} alt={`${data.login}'s avatar`} width="100" />
      <h3>{data.name || "No Name Provided"}</h3>
      <p>{data.login}</p>
    </div>
  );
};

export default GithubUser;
