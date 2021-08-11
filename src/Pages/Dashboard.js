import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Link to="/NewsDashboard">News Dashboard</Link>
      <br />
      <Link to="/JobDashboard">Job Dashboard</Link>
    </div>
  );
};

export default Dashboard;
