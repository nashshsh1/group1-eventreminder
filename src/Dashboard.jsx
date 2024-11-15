import React from 'react';
import Sidebar from './Sidebar';
import EventContent from './EventContent';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <EventContent />
    </div>
  );
};

export default Dashboard;
