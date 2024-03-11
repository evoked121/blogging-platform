import React from "react";
import "./dashboard.css";
import { Nav } from "./Nav/Nav.js";
import { Content } from "./Content/Content.js";

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Nav />
      <Content />
    </div>
  );
};
