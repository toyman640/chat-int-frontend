import React from 'react';
import logo from '../home-logo.svg';
import SignUpForm from './SignUp-Form';

const SignUp = () => (
  <>
    <div className="SignUpCover">
      <div className="SignUpContent">
        <img src={logo} alt="logo" className="logo-img" />
        <div className="SignUpForm">
          <SignUpForm />
        </div>
      </div>
    </div>
  </>
);

export default SignUp;
