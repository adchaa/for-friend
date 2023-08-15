import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
let users = [];
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Signin",
    element: <Login users={users}></Login>,
  },
  {
    path: "/Signup",
    element: <Signup users={users} />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
