import React, { useRef, useEffect, useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginState = { username, password, remember };
    onLogin(loginState);
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setRemember(false);
  };

  const mountedRef = useRef(false)
  const inputRef = useRef(null)
  console.log(inputRef)

  useEffect(() => {if(!mountedRef.current){
    mountedRef.current = true;
    console.log('Mounting for the first time.')
  } else{
    console.log('Mounting again for debug.')
  }
    inputRef.current?.focus()
  },[])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            ref={inputRef}
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter your username"
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
          />
        </label>
      </div>
      <div>
        <label>
          Remember Me:
          <input
            type="checkbox"
            checked={remember}
            onChange={(event) => setRemember(event.target.checked)}
          />
        </label>
      </div>
      <button type="submit" disabled={!(username && password)}>
        Login
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default Login;
