import React from 'react';
import profilePic from '../836.jpg';
import bell from '../notification-bell.png';

const NavBar = () => (
  <div className="NavBar">
    <form>
      <input type="text" placeholder="Search for house" />
      <input type="text" placeholder="location" />
    </form>
    <div>
      <img src={bell} alt="logo" className="logo-img" />
      <div>
        <img src={profilePic} alt="logo" className="logo-img" />
        <p>John Doe</p>
      </div>
    </div>
  </div>
);
export default NavBar;
