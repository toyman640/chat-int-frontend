import React from 'react';

const LogInForm = () => (
  <>
    <p className="Title">Welcome back</p>
    <p className="Desc">Login to your account</p>
    <button type="button">
      Continue with Google
    </button>
    <form className="MainForm">
      <div className="FormControl">
        <label className="Label" htmlFor="Email Address">
          Email Address
          <br />
          <input className="FormInput" type="email" id="Email Address" name="username" placeholder="jonedoe123" />
        </label>
      </div>
      <div className="FormControl">
        <label className="Label" htmlFor="Password">
          Password
          <br />
          <input type="password" className="FormInput" id="password" name="password" placeholder="jonedoe123@gmail.com" />
        </label>
      </div>
      <div>
        <input type="Submit" className="FormButton" value="Sign Up" />
      </div>
    </form>
  </>
);

export default LogInForm;
