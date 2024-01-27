import React from 'react';
import profilePic from '../836.jpg';
import bell from '../notification-bell.png';

const NavBar = () => (
  <div className="NavBar">
    <form className="SearchForm">
      <input className="Bar1" type="text" placeholder="Search for house" />
      <input className="Bar2" type="text" placeholder="location" />
    </form>
    <div className="NavItem2">
      <img src={bell} alt="logo" className="NotifyBell" />
      <div className="NavItem2">
        <img src={profilePic} alt="logo" className="ProfileImage" />
        <p>Jane Doe</p>
      </div>
    </div>
  </div>
);
export default NavBar;
