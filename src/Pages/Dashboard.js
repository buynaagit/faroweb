import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="inner-wrapper">
        <Button type="primary">
          <Link to="/NewsDashboard">News Dashboard</Link>
        </Button>
        <br />
        <Button type="primary">
          <Link to="/JobDashboard">Job Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
