import React from 'react';
import logo from '../home-logo.svg';
import SignUpForm from './SignUp-Form';

const SignUp = () => (
  <>
    <div className="SignUpCover">
      <div className="SignUpContent">
        <img src={logo} alt="logo" className="logo-img" />
        <div className="SignUpForm">
          <p className="Title">Sign Up</p>
          <p className="Desc">Create an account</p>
          <SignUpForm />
        </div>
      </div>
    </div>
  </>
);

export default SignUp;
