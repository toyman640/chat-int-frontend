import React from 'react';

const SignUpForm = () => (
  <>
    <p className="Title">Sign Up</p>
    <p className="Desc">Create an account</p>
    <form className="MainForm">
      <div className="FormControl">
        <label className="Label" htmlFor="username">
          Username
          <br />
          <input type="text" id="username" name="username" placeholder="jonedoe123" />
        </label>
      </div>
      <div className="FormControl">
        <label className="Label" htmlFor="email">
          Email
          <br />
          <input type="email" id="email" name="email" placeholder="jonedoe123@gmail.com" />
        </label>
      </div>
      <div className="FormControl">
        <label className="Label" htmlFor="Password">
          Password
          <br />
          <input type="password" id="password" name="password" />
        </label>
      </div>
      <div className="FormControl">
        <label className="Label" htmlFor="Confirm Password">
          Confirm Password
          <br />
          <input type="password" id="Confirm-Password" name="password" />
        </label>
      </div>

      <div>
        <input type="Submit" className="FormButton" value="Sign Up" />
      </div>
    </form>
  </>
);

export default SignUpForm;
