import { useEffect, useState } from "react";

function GithubUser({ username }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();
        setData(userData);
      } catch (error) {
        console.error("Errore nel recupero dei dati:", error);
      }
    }

    if (username) {
      fetchData();
    }
  }, [username]);

  return (
    <div>
      <p><strong>Nome:</strong> {data?.name || "N/A"}</p>
      <p><strong>Login:</strong> {data?.login || "N/A"}</p>
      <p><strong>Avatar:</strong></p>
      {data?.avatar_url && <img src={data.avatar_url} alt="Avatar utente" width={100} />}
    </div>
  );
}

export default GithubUser
