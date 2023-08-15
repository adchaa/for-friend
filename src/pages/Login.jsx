import { useState } from "react";
export function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function check(users) {
    if (
      users.find((el) => el.username == username && el.password == password)
    ) {
      alert("rba7it 3asba");
    } else {
      alert("incorrect username or password");
    }
  }
  return (
    <>
      <h1>Sign in</h1>
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
        <label for="password">password</label>
        <input
          className="inp"
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
        />
      </div>
      <button onClick={() => check(props.users)} style={{ marginTop: 20 }}>
        Sign in
      </button>
    </>
  );
}
