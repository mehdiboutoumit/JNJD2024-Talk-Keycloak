// components/Dashboard.js
import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const Dashboard = () => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Loading...</div>;
  }

  if (keycloak.authenticated) {
    return (
      <div className="dashboard">
        <h1>INPT Dashboard</h1>
        <div className="summary">
          <div className="summary-item">
            <h2>Total Employees</h2>
            <p>500</p>
          </div>
          <div className="summary-item">
            <h2>Fields</h2>
            <p>7</p>
          </div>
          <div className="summary-item">
            <h2>Upcoming Events</h2>
            <p>JNJD 2024</p>
          </div>
        </div>
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>User1 completed Project A</li>
            <li>User2 submitted a leave request</li>
            <li>New project kickoff meeting scheduled</li>
          </ul>
        </div>
      </div>
    );
  } else {
    keycloak.login();
    return <div>Redirecting to login...</div>;
  }
};

export default Dashboard;
