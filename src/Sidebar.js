import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faThLarge, faCalendarAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
    alert('Logout successful');
    navigate('/');
  };

  return (
    <div className="sidebar">
      <div className="profile">
        <FontAwesomeIcon icon={faUserCircle} size="3x" />
        <p>Name</p>
      </div>
      <ul className="menu">
        <li><FontAwesomeIcon icon={faThLarge} size="2x" /><br />Dashboard</li>
        <li><FontAwesomeIcon icon={faCalendarAlt} size="2x" /><br />Events</li>
        <li onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} size="2x" /><br />Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
