import React from 'react';
import { Link } from 'react-router-dom';
import './inner_navbar.css';

const InnerNavBar = ({ pack }) => {
  return (
      <nav className="inner-nav-container">
        <Link to={`/packs/${pack._id}/schedules`}>
          <div>
            Schedules
          </div>
        </Link>
        <Link to={`/packs/${pack._id}/payments`}>
          <div>
            Expenses
          </div>
        </Link>
        <Link to={`/packs/${pack._id}/photos/all`}>
          <div>
            Photos
          </div>
        </Link>
      </nav>
  )
}

export default InnerNavBar;