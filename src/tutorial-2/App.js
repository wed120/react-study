import React from "react";
import "./App.css";

function App() {
  let email;
  let password;
  const handleSubmit = (event) => {
    if (email === undefined) {
      alert("error email");
    } else if (password === undefined) {
      alert("error password");
    }
    if (email.trim().length === 0) {
      alert("error email");
    } else if (password.trim().length === 0) {
      alert("error password");
    }

    event.preventDefault();
    if (email !== undefined) {
      console.log("E-Mail: " + email);
      console.log("Password: " + password);
    }
  };
  const handleEmailChange = (event) => {
    email = event.target.value;
  };
  const handlePasswordChange = (event) => {
    password = event.target.value;
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleEmailChange}
          type="email"
          placeholder={"E-Mail"}
        />
        <input
          onChange={handlePasswordChange}
          type="password"
          placeholder={"Password"}
        />
        <button type={"submit"}>Login</button>
      </form>
    </div>
  );
}

export default App;
