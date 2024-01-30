import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../home-logo.svg';
import NavBar from './NavBar';
import MainSection from './MainSection';

const MainPage = () => {
  const currentUser = useSelector((state) => state.user.user);
  return (
    <div className="MainContainer">
      <div className="SideBar">
        <img src={logo} alt="logo" className="logo-img" />
      </div>
      <div className="MainSection">
        <NavBar />
        <MainSection receiverUserId={currentUser.user_id} />
      </div>
    </div>
  );
};

export default MainPage;
