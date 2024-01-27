import React from 'react';
import logo from '../home-logo.svg';
import NavBar from './NavBar';
import MainSection from './MainSection';

const MainPage = () => (
  <div className="MainContainer">
    <div className="SideBar">
      <img src={logo} alt="logo" className="logo-img" />
    </div>
    <div className="MainSection">
      <NavBar />
      <MainSection />
    </div>
  </div>
);

export default MainPage;
