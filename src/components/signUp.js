import React from 'react';
import logo from '../home-logo.svg';
import SignUpForm from './SignUp-Form';

const SignUp = () => (
  <>
    <div className="SignUpCover">
      <div className="SignUpContent">
        <img src={logo} alt="logo" className="logo-img" />
        <div className="SignUpForm">
          <h2 className="Title">Sign Up</h2>
          <p className="Desc">Create an account</p>
          <SignUpForm />
        </div>
      </div>
    </div>
  </>
);

export default SignUp;
