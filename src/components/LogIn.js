import React from 'react';
import logo from '../home-logo.svg';
import LogInForm from './LogIn-Form';

const LogIn = () => (
  <>
    <div className="SignUpCover">
      <div className="SignUpContent">
        <img src={logo} alt="logo" className="logo-img" />
        <div className="SignUpForm">
          <LogInForm />
        </div>
      </div>
    </div>
  </>
);

export default LogIn;
