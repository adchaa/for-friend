import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <h1>ODOO</h1>
      <div className="card">
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </button>
        <button
          onClick={() => {
            navigate("/signin");
          }}
        >
          Sign in
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
