import React from "react";
import useForm from "./hooks/useForm";
import useGithubUser from "./hooks/useGithubUser";
import useCurrentLocation from "./hooks/useCurrentLocation";
import Counter from "./components/Counter";

const App = () => {
  const { formData, handleChange } = useForm();
  const { user, isLoading, error, refetch} = useGithubUser("mojombo");
  const { location, getCurrentLocation } = useCurrentLocation();

  return (
    <div className="p-20 text-center">
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
      <div>
        <h2>GitHub User</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          user && (
            <div>
              <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
              <h3>{user.name || "No Name Provided"}</h3>
              <p>{user.login}</p>
              <button onClick={refetch}>Refresh User</button>
            </div>
          )
        )}
      </div>
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
  )
}

export default App;
