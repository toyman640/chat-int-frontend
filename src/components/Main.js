import React from 'react';
import logo from '../home-logo.svg';
import NavBar from './NavBar';

const MainPage = () => (
  <div className="MainContainer">
    <div className="SideBar">
      <img src={logo} alt="logo" className="logo-img" />
    </div>
    <div className="MainSection">
      <NavBar />
    </div>
  </div>
);

export default MainPage;
