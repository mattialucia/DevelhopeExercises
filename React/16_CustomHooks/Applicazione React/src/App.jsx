import React from "react";
import useCounter from "./hooks/useCounter";
import useForm from "./hooks/useForm";
import useGithubUser from "./hooks/useGithubUser";
import useCurrentLocation from "./hooks/useCurrentLocation";
import Counter from "./components/Counter";

const App = () => {
  const { count, increment, decrement, reset } = useCounter();
  const { formData, handleChange } = useForm();
  const { user, loading, error, fetchUserData } = useGithubUser("mojombo");
  const { location, getCurrentLocation } = useCurrentLocation();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Custom Hooks</h1>
      <Counter />

      <div>
        <h2>Form</h2>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>

      {/* GitHub User Hook */}
      <div>
        <h2>GitHub User</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          user && (
            <div>
              <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
              <h3>{user.name || "No Name Provided"}</h3>
              <p>{user.login}</p>
              <button onClick={fetchUserData}>Refresh User</button>
            </div>
          )
        )}
      </div>

      {/* Current Location Hook */}
      <div>
        <h2>Current Location</h2>
        {location ? (
          <p>Latitude: {location.latitude}, Longitude: {location.longitude}</p>
        ) : (
          <p>No location available</p>
        )}
        <button onClick={getCurrentLocation}>Get Location</button>
      </div>
    </div>
  );
};

export default App;
