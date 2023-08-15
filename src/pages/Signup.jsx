import { useState } from "react";
export function Signup(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function addUser(users) {
    users.push({ username: username, email: email, password: password });
    console.log(users);
  }
  return (
    <>
      <h1>Sign up</h1>
      <div>
        <label for="username">username</label>
        <input
          className="inp"
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          type="text"
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <label style={{ marginRight: 25 }} for="email">
          email
        </label>
        <input
          className="inp"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <label for="password">password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="inp"
          id="password"
          type="password"
        />
      </div>
      <button onClick={() => addUser(props.users)} style={{ marginTop: 20 }}>
        Sign up
      </button>
    </>
  );
}
