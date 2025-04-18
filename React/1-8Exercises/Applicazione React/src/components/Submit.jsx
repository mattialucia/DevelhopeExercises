import { useState, useEffect } from "react";
import Welcome from "./Welcome";

const Submit = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Object formData:", formData);
    console.log("Username:", formData.username);
    console.log("Password:", formData.password);

    localStorage.setItem("Username", formData.username)
    localStorage.setItem("Password", formData.password)
  };

  useEffect(() => {
    console.log("formData", formData);
  }, [ formData ])

  return (
    <div>
      <h2>Iscriviti al sito</h2>
      <form onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <input
          name="username"
          type="text"
          required
          placeholder="Username"
          onChange={(event) => handleChange("username", event.target.value)}
        />
        <input
          name="password"
          type="password"
          required
          placeholder="Password"
          onChange={(event) => handleChange("password", event.target.value)}
        />

        <button type="submit">Accedi</button>
        <Welcome name= {formData.username}/>
      </form>
    </div>
  );
};

export default Submit;