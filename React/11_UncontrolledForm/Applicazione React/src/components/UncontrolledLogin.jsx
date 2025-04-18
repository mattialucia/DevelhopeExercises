import React from "react";

const UncontrolledLogin = () => {
    
/*   
    const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const username = form.elements.username.value;
    const password = form.elements.password.value;
    const remember = form.elements.remember.checked;    
    const data = { username, password, remember };

    console.log("Data from submit (DOM):", data);
    form.reset();
  }; 
*/

  const onLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {
        username: formData.get('username'),
        password: formData.get('password'),
        remember: formData.get('remember') === 'on'
    }
    console.log('Dati da formData:', data);
    form.reset();
  }

  return (
    <form onSubmit={onLogin}>
      <div>
        <label>Username:
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
          />
        </label>
      </div>
      <div>
        <label>Password:
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </label>
      </div>
      <div>
        <label>Remember Me:
          <input type="checkbox" name="remember" />
        </label>
      </div>
      <button type="submit">Login</button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default UncontrolledLogin