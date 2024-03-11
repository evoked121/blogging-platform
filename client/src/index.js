import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { AuthPage } from "./AuthPage/AuthPage.js";
import { Dashboard } from "./Dashboard/Dashboard.js";

const router = createBrowserRouter([
  { path: "/auth", element: <AuthPage /> },
  { path: "/*", element: <Dashboard /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);
